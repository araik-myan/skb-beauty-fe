export type Lang = "fr" | "en";

export const translations = {
  nav: {
    home: { fr: "Accueil", en: "Home" },
    about: { fr: "À Propos", en: "About" },
    services: { fr: "Nos Soins", en: "Our Services" },
    gallery: { fr: "Galerie", en: "Gallery" },
    contact: { fr: "Contact", en: "Contact" },
    book: { fr: "Réserver", en: "Book Now" },
    openMenu: { fr: "Ouvrir le menu", en: "Open menu" },
    closeMenu: { fr: "Fermer le menu", en: "Close menu" },
    call: { fr: "Appeler", en: "Call" },
  },
  hero: {
    tagline: { fr: "Institut de Beauté Premium", en: "Premium Beauty Institute" },
    subtitle: { fr: "Votre destination beauté au cœur de Guéliz", en: "Your beauty destination in the heart of Guéliz" },
    description: {
      fr: "Une expérience de beauté raffinée, où chaque soin est une invitation à révéler votre éclat naturel dans un cadre élégant et chaleureux.",
      en: "A refined beauty experience, where every treatment is an invitation to reveal your natural glow in an elegant and warm setting.",
    },
    bookOnline: { fr: "Réserver en ligne", en: "Book Online" },
    discoverServices: { fr: "Découvrir nos Soins", en: "Discover our Services" },
    scroll: { fr: "Défiler", en: "Scroll" },
  },
  about: {
    label: { fr: "À Propos", en: "About Us" },
    heading1: { fr: "Un havre de beauté", en: "A beauty haven" },
    heading2: { fr: "au cœur de Guéliz", en: "in the heart of Guéliz" },
    overlayTitle1: { fr: "L'art de", en: "The art of" },
    overlayTitle2: { fr: "la beauté", en: "beauty" },
    cardTitle: { fr: "Excellence", en: "Excellence" },
    cardSubtitle: { fr: "Beauté & Bien-être", en: "Beauty & Wellness" },
    p1: {
      fr: "Bienvenue chez SKB Beauty Marrakech, votre destination beauté d'exception au cœur du quartier Guéliz. Notre institut incarne l'élégance et le raffinement, offrant un espace où chaque détail est pensé pour sublimer votre beauté naturelle.",
      en: "Welcome to SKB Beauty Marrakech, your exceptional beauty destination in the heart of the Guéliz district. Our institute embodies elegance and refinement, offering a space where every detail is designed to enhance your natural beauty.",
    },
    p2: {
      fr: "Dans un cadre chaleureux et luxueux, notre équipe de professionnelles passionnées vous accueille avec une attention particulière. Chaque soin est une expérience sur-mesure, conçue pour répondre à vos besoins uniques et révéler votre éclat intérieur.",
      en: "In a warm and luxurious setting, our team of passionate professionals welcomes you with special attention. Every treatment is a bespoke experience, designed to meet your unique needs and reveal your inner radiance.",
    },
    p3: {
      fr: "Nous croyons que la beauté est un art — et que chaque femme mérite un moment de grâce et de sérénité pour se reconnecter à elle-même.",
      en: "We believe that beauty is an art — and that every woman deserves a moment of grace and serenity to reconnect with herself.",
    },
    passion: { fr: "Passion", en: "Passion" },
    passionDesc: { fr: "Du soin", en: "For care" },
    quality: { fr: "Qualité", en: "Quality" },
    qualityDesc: { fr: "Premium", en: "Premium" },
    expertise: { fr: "Expertise", en: "Expertise" },
    expertiseDesc: { fr: "Confirmée", en: "Proven" },
  },
  services: {
    label: { fr: "Nos Soins", en: "Our Services" },
    heading1: { fr: "Des soins d'exception", en: "Exceptional treatments" },
    heading2: { fr: "pour révéler votre éclat", en: "to reveal your radiance" },
    description: {
      fr: "Découvrez notre gamme complète de soins beauté et bien-être, conçus avec passion et expertise pour sublimer chaque femme.",
      en: "Discover our full range of beauty and wellness treatments, crafted with passion and expertise to enhance every woman.",
    },
    discover: { fr: "Découvrir", en: "Discover" },
    bookCta: { fr: "Prendre Rendez-vous", en: "Book an Appointment" },
    bookNote: { fr: "Appelez-nous pour réserver votre soin", en: "Call us to book your treatment" },
    items: [
      {
        title: { fr: "Sourcils", en: "Eyebrows" },
        subtitle: { fr: "Le regard sublimé", en: "Enhanced gaze" },
        description: {
          fr: "Épilation, teinture, brow lift — des techniques précises pour des sourcils parfaitement dessinés.",
          en: "Waxing, tinting, brow lift — precise techniques for perfectly shaped eyebrows.",
        },
      },
      {
        title: { fr: "Cils", en: "Lashes" },
        subtitle: { fr: "L'éclat du regard", en: "Radiant eyes" },
        description: {
          fr: "Poses naturelles 2D, volume 3D/4D ou maxi volume 5D/6D pour un regard intense et captivant.",
          en: "Natural 2D, volume 3D/4D or maxi volume 5D/6D lash extensions for an intense, captivating look.",
        },
      },
      {
        title: { fr: "Épilation", en: "Waxing" },
        subtitle: { fr: "Douceur absolue", en: "Absolute softness" },
        description: {
          fr: "Cire orientale pour une peau parfaitement lisse. Aisselles, jambes, maillots ou forfait intégral.",
          en: "Oriental wax for perfectly smooth skin. Underarms, legs, bikini or full body packages.",
        },
      },
      {
        title: { fr: "Head Spa", en: "Head Spa" },
        subtitle: { fr: "Rituel exclusif", en: "Exclusive ritual" },
        description: {
          fr: "Massage crânien relaxant, soins du cuir chevelu et huiles aromatiques pour une détente absolue.",
          en: "Relaxing scalp massage, scalp treatments and aromatic oils for absolute relaxation.",
        },
      },
      {
        title: { fr: "Massage", en: "Massage" },
        subtitle: { fr: "Voyage sensoriel", en: "Sensory journey" },
        description: {
          fr: "Relaxants, toniques ou aux pierres chaudes. Libérez les tensions et retrouvez la sérénité.",
          en: "Relaxing, toning or hot stone massages. Release tension and find serenity.",
        },
      },
      {
        title: { fr: "Manucure", en: "Manicure" },
        subtitle: { fr: "Mains sublimes", en: "Beautiful hands" },
        description: {
          fr: "Pose gel, semi-permanent, gainage ou nails art. Des ongles impeccables grâce à notre expertise.",
          en: "Gel, semi-permanent, strengthening or nail art. Flawless nails thanks to our expertise.",
        },
      },
      {
        title: { fr: "Pédicure", en: "Pedicure" },
        subtitle: { fr: "Soins des pieds", en: "Foot care" },
        description: {
          fr: "Beauté, nettoyage, restructuration et vernis semi-permanent pour des pieds soignés et élégants.",
          en: "Beauty, cleansing, restructuring and semi-permanent polish for well-groomed, elegant feet.",
        },
      },
      {
        title: { fr: "Coiffure", en: "Hair" },
        subtitle: { fr: "L'art capillaire", en: "The art of hair" },
        description: {
          fr: "Coupes, brushings, colorations, balayages, soins botox et lissages au service de votre beauté.",
          en: "Cuts, blow-dries, coloring, balayage, botox treatments and straightening at the service of your beauty.",
        },
      },
    ],
  },
  refreshment: {
    label: { fr: "Espace Détente", en: "Relaxation Area" },
    heading1: { fr: "Votre bien-être,", en: "Your well-being," },
    heading2: { fr: "jusque dans les moindres détails", en: "down to the finest details" },
    description: {
      fr: "Chez SKB Beauty, chaque visite est une parenthèse de douceur. Dès votre arrivée, notre espace rafraîchissement vous accueille avec une sélection de boissons soigneusement choisies pour accompagner votre expérience beauté.",
      en: "At SKB Beauty, every visit is a moment of indulgence. Upon arrival, our refreshment area welcomes you with a selection of carefully chosen beverages to accompany your beauty experience.",
    },
    overlayTitle1: { fr: "Un instant", en: "A moment" },
    overlayTitle2: { fr: "de douceur", en: "of sweetness" },
    overlayDesc: { fr: "Savourez votre boisson préférée", en: "Enjoy your favourite drink" },
    overlayDesc2: { fr: "pendant votre soin.", en: "during your treatment." },
    drinksLabel: { fr: "Nos boissons", en: "Our beverages" },
    drinks: [
      { name: { fr: "Jus de fraise", en: "Strawberry juice" }, detail: { fr: "Fruité & rafraîchissant", en: "Fruity & refreshing" } },
      { name: { fr: "Jus de mangue", en: "Mango juice" }, detail: { fr: "Exotique & onctueux", en: "Exotic & smooth" } },
      { name: { fr: "Frappuccino Café Caramel", en: "Caramel Coffee Frappuccino" }, detail: { fr: "Glacé & gourmand", en: "Iced & indulgent" } },
      { name: { fr: "Moka Blanc", en: "White Mocha" }, detail: { fr: "Doux & crémeux", en: "Smooth & creamy" } },
      { name: { fr: "Matcha", en: "Matcha" }, detail: { fr: "Thé vert japonais", en: "Japanese green tea" } },
      { name: { fr: "Ubecious", en: "Ubecious" }, detail: { fr: "Ube & saveur unique", en: "Ube & unique flavour" } },
      { name: { fr: "Caramel Macchiato", en: "Caramel Macchiato" }, detail: { fr: "Espresso & caramel", en: "Espresso & caramel" } },
    ],
    comfortTitle: { fr: "Un moment pour vous", en: "A moment for you" },
    comfortDesc: {
      fr: "Installez-vous confortablement et laissez-vous porter par l'atmosphère chaleureuse de notre institut. Ici, le temps vous appartient.",
      en: "Make yourself comfortable and let the warm atmosphere of our institute carry you. Here, time is yours.",
    },
    quote: {
      fr: "La beauté commence par un moment de sérénité. Offrez-vous cette pause, vous la méritez.",
      en: "Beauty begins with a moment of serenity. Treat yourself to this pause, you deserve it.",
    },
    quoteAuthor: { fr: "L'équipe SKB Beauty", en: "The SKB Beauty Team" },
  },
  gallery: {
    label: { fr: "Galerie", en: "Gallery" },
    heading1: { fr: "L'univers", en: "The world of" },
    heading2: { fr: " SKB Beauty", en: " SKB Beauty" },
    description: {
      fr: "Plongez dans notre univers de beauté et découvrez l'atmosphère raffinée qui vous attend.",
      en: "Dive into our beauty universe and discover the refined atmosphere that awaits you.",
    },
    viewOnInstagram: { fr: "Voir sur Instagram", en: "View on Instagram" },
    followUs: { fr: "Suivez-nous sur Instagram", en: "Follow us on Instagram" },
  },
  contact: {
    label: { fr: "Contact", en: "Contact" },
    heading1: { fr: "Nous vous", en: "We are" },
    heading2: { fr: "attendons", en: "waiting for you" },
    description: {
      fr: "Prenez rendez-vous et offrez-vous un moment de beauté et de sérénité au cœur de Marrakech.",
      en: "Book an appointment and treat yourself to a moment of beauty and serenity in the heart of Marrakech.",
    },
    phone: { fr: "Téléphone", en: "Phone" },
    tapToCall: { fr: "Appuyez pour appeler", en: "Tap to call" },
    email: { fr: "Email", en: "Email" },
    sendEmail: { fr: "Envoyer un email", en: "Send an email" },
    address: { fr: "Adresse", en: "Address" },
    hours: { fr: "Horaires", en: "Hours" },
    weekdays: { fr: "Lundi — Samedi : 9h00 — 19h00", en: "Monday — Saturday: 9:00 AM — 7:00 PM" },
    sunday: { fr: "Dimanche : Fermé", en: "Sunday: Closed" },
    callBtn: { fr: "Appeler", en: "Call" },
  },
  divider: {
    text: { fr: "Votre beauté, notre passion", en: "Your beauty, our passion" },
  },
  footer: {
    description: {
      fr: "Votre destination beauté d'exception au cœur de Guéliz. Un espace où l'élégance rencontre le savoir-faire pour sublimer votre beauté naturelle.",
      en: "Your exceptional beauty destination in the heart of Guéliz. A space where elegance meets expertise to enhance your natural beauty.",
    },
    navigation: { fr: "Navigation", en: "Navigation" },
    contact: { fr: "Contact", en: "Contact" },
    copyright: { fr: "SKB Beauty Marrakech. Tous droits réservés.", en: "SKB Beauty Marrakech. All rights reserved." },
    madeWith: { fr: "Fait avec", en: "Made with" },
    inMarrakech: { fr: "à Marrakech", en: "in Marrakech" },
  },
} as const;

export type Translations = typeof translations;
