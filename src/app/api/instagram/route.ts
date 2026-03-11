import { NextResponse } from "next/server";

export interface InstagramPost {
  id: string;
  caption?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp: string;
}

const INSTAGRAM_USERNAME = "skbbeauty212";
const CACHE_DURATION = 3600; // 1 hour
let cachedPosts: InstagramPost[] | null = null;
let cacheTimestamp = 0;

/**
 * Primary method: Official Instagram Graph API (requires access token)
 */
async function fetchWithGraphAPI(token: string): Promise<InstagramPost[]> {
  const response = await fetch(
    `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&limit=9&access_token=${token}`,
    { next: { revalidate: CACHE_DURATION } }
  );

  if (!response.ok) {
    throw new Error(`Instagram API responded with ${response.status}`);
  }

  const data = await response.json();
  return (data.data || []).filter(
    (post: InstagramPost) =>
      post.media_type === "IMAGE" || post.media_type === "CAROUSEL_ALBUM"
  );
}

/**
 * Fallback: Try to fetch public profile data via Instagram's web API
 * This is a best-effort approach and may not always work.
 */
async function fetchPublicProfile(
  username: string
): Promise<InstagramPost[]> {
  try {
    const response = await fetch(
      `https://www.instagram.com/api/v1/users/web_profile_info/?username=${username}`,
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          "x-ig-app-id": "936619743392459",
          Accept: "*/*",
        },
        next: { revalidate: CACHE_DURATION },
      }
    );

    if (!response.ok) return [];

    const data = await response.json();
    const edges =
      data?.data?.user?.edge_owner_to_timeline_media?.edges || [];

    return edges
      .slice(0, 9)
      .map((edge: Record<string, unknown>, i: number) => {
        const node = edge.node as Record<string, unknown>;
        const captionEdges = (
          node?.edge_media_to_caption as Record<string, unknown>
        )?.edges as Array<{ node: { text: string } }>;

        return {
          id: (node?.id as string) || `pub-${i}`,
          caption: captionEdges?.[0]?.node?.text,
          media_type: node?.is_video ? ("VIDEO" as const) : ("IMAGE" as const),
          media_url: node?.display_url as string,
          thumbnail_url: node?.thumbnail_src as string,
          permalink: node?.shortcode
            ? `https://www.instagram.com/p/${node.shortcode}/`
            : `https://www.instagram.com/${username}/`,
          timestamp: node?.taken_at_timestamp
            ? new Date(
                (node.taken_at_timestamp as number) * 1000
              ).toISOString()
            : new Date().toISOString(),
        };
      })
      .filter(
        (p: InstagramPost) => p.media_type === "IMAGE" && p.media_url
      );
  } catch {
    return [];
  }
}

export async function GET() {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;

  // Return cached posts if still fresh
  const now = Date.now() / 1000;
  if (cachedPosts && cachedPosts.length > 0 && now - cacheTimestamp < CACHE_DURATION) {
    return NextResponse.json({ posts: cachedPosts });
  }

  // Method 1: Official Graph API (most reliable)
  if (token) {
    try {
      const posts = await fetchWithGraphAPI(token);
      if (posts.length > 0) {
        cachedPosts = posts;
        cacheTimestamp = now;
        return NextResponse.json({ posts });
      }
    } catch (error) {
      console.error("Instagram Graph API failed:", error);
    }
  }

  // Method 2: Public profile fetch (best effort fallback)
  try {
    const posts = await fetchPublicProfile(INSTAGRAM_USERNAME);
    if (posts.length > 0) {
      cachedPosts = posts;
      cacheTimestamp = now;
      return NextResponse.json({ posts });
    }
  } catch (error) {
    console.error("Public profile fetch failed:", error);
  }

  // Return cached data or empty
  return NextResponse.json({
    posts: cachedPosts || [],
    error:
      "Unable to fetch Instagram posts. Set INSTAGRAM_ACCESS_TOKEN in your environment for reliable access.",
  });
}
