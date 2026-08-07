export type Language = "fr" | "en"

// Central translation dictionary. Every user-facing string on the site lives here
// so the FR/EN toggle can swap the entire site cleanly and consistently.
export const dictionary = {
  fr: {
    common: {
      freeConsultation: "Consultation gratuite",
      bookFreeCall: "Réservez votre appel gratuit",
      homeAria: "Accueil ÉquipeSitePRO",
      openMenu: "Ouvrir le menu",
      closeMenu: "Fermer le menu",
      switchToEnglish: "Passer en anglais",
      switchToFrench: "Passer en français",
    },
    nav: {
      services: "Services",
      howItWorks: "Comment ça marche",
      pricing: "Tarifs",
      testimonials: "Témoignages",
      about: "À propos",
      blog: "Blog",
      contact: "Contact",
    },
    hero: {
      badge: "Votre partenaire pour un site web professionnel",
      titleLine1: "Transformez votre site web",
      titleLine2: "en votre meilleur Commercial.",
      description:
        "Un design moderne, une navigation fluide, et une présence en ligne qui inspire confiance. Nous construisons des sites web qui reflètent la qualité de votre travail et transforment les visiteurs en clients.",
      ctaPrimary: "Obtenez votre consultation gratuite",
      ctaSecondary: "Voir comment ça marche",
    },
    preview: {
      eyebrow: "Notre engagement envers vous",
      title: "Recevez un aperçu de votre site transformé en 24h",
      description:
        "Avant même de vous engager, nous vous montrons ce que votre nouveau site peut devenir. Nous sommes là pour vous accompagner à chaque étape.",
      cards: [
        {
          title: "Un aperçu en 24 heures",
          description:
            "À partir de ce que vous avez déjà, nous construisons un aperçu de votre nouveau site en moins de 24 heures, avant que vous ayez à vous engager.",
        },
        {
          title: "Un accompagnement humain",
          description:
            "Un interlocuteur dédié du début à la fin. Pas de robots, pas de jargon technique, juste une équipe qui vous écoute et prend soin de vous.",
        },
        {
          title: "Votre satisfaction garantie",
          description:
            "Nous ajustons votre site jusqu'à ce qu'il vous ressemble parfaitement. Votre confiance et votre tranquillité d'esprit sont notre priorité.",
        },
      ],
      stats: [
        { value: "24h", label: "Aperçu offert" },
        { value: "0 $", label: "Sans engagement" },
        { value: "100 %", label: "Clients satisfaits" },
      ],
      cta: "Recevez votre aperçu gratuit",
    },
    trustedLogos: {
      label: "Ils nous font confiance",
    },
    problem: {
      titleLine1: "La qualité de votre site web",
      titleLine2: "communique la qualité de votre service.",
      description:
        "Quand quelqu'un voit un site web beau et professionnel, il s'attend à un service beau et professionnel. Quand il voit un site web daté et brisé, il s'attend à un service daté et brisé.",
      bullet1: "Un site web daté = Un service daté.",
      bullet2: "Un site web professionnel = Un service professionnel.",
      bullet3: "Votre site web est votre meilleur commercial. Il travaille 24h/24.",
      cta: "Voyez comment nous réglons cela",
      imageAlt:
        "Un entrepreneur frustré à son bureau avec un site web obsolète et des appels manqués qui s'accumulent",
    },
    outcomes: {
      eyebrow: "Ce que nous faisons",
      titlePlain: "Des sites web professionnels qui ",
      titleAccent: "vous apportent des clients",
      descriptionPlain: "Nous ne construisons pas seulement des sites web. Nous construisons des ",
      descriptionAccent: "vitrines numériques",
      descriptionEnd: " qui transforment chaque visiteur en client potentiel.",
      items: [
        {
          title: "Site Web Professionnel & SEO Local",
          description:
            "Nous construisons un site web moderne, ultra-rapide et optimisé pour les moteurs de recherche. Nous configurons votre fiche Google Business Profile pour que vous apparaissiez en tête des recherches locales.",
          bullet: "Apparaissez sur Google Maps et dans les résultats de recherche locaux.",
        },
        {
          title: "Design Responsive & Premium",
          description:
            "Votre site s'adapte parfaitement aux ordinateurs, tablettes et téléphones. Un design moderne, propre, qui inspire confiance à vos clients dès la première seconde.",
          bullet: "Une expérience utilisateur impeccable sur tous les écrans.",
        },
        {
          title: "Galerie de Photos & Portfolio",
          description:
            "Nous mettons en valeur votre travail avec une galerie de photos professionnelle et organisée. Les clients voient la qualité de vos réalisations avant même de vous contacter.",
          bullet: "Votre travail parle de lui-même grâce à des visuels de qualité.",
        },
        {
          title: "Prise de Rendez-vous Automatisée",
          description:
            "Nous intégrons un système de calendrier intelligent à votre site web. Les clients voient vos disponibilités en temps réel et réservent leur rendez-vous en quelques clics, sans aucun échange d'emails.",
          bullet: "Votre agenda se remplit automatiquement, 24h/24, 7j/7.",
        },
        {
          title: "Configuration & Mise en Place Complète",
          description:
            "Nous gérons tout de A à Z. Configuration du domaine, hébergement sécurisé, installation des emails professionnels et intégration de votre calendrier.",
          bullet:
            "Vous n'avez rien à configurer. Vous commencez à recevoir des clients dès le premier jour.",
        },
        {
          title: "FAQ & Contenu Stratégique",
          description:
            "Nous intégrons une section FAQ complète sur votre site pour répondre aux questions les plus fréquentes de vos clients, réduisant les appels inutiles et augmentant les conversions.",
          bullet: "Vos clients trouvent des réponses instantanément, sans avoir à vous appeler.",
        },
      ],
    },
    howItWorks: {
      eyebrow: "Comment ça marche",
      titlePlain: "De simple à ",
      titleAccent: "PRO",
      subtitle: "Voici exactement à quel point c'est simple de commencer.",
      steps: [
        {
          title: "Nous comprenons votre entreprise.",
          description:
            "Nous discutons avec vous de vos besoins, de vos objectifs et de votre vision. C'est la base d'un site web qui vous ressemble.",
        },
        {
          title: "Nous construisons votre site web.",
          description:
            "Notre équipe conçoit et développe un site web moderne, professionnel et optimisé. Design, photos, texte, tout est fait pour impressionner.",
        },
        {
          title: "Votre site web est prêt à convertir.",
          description:
            "Nous mettons votre site en ligne et vous accompagnons pour que vos visiteurs deviennent des clients. Simple et efficace.",
        },
      ],
      cta: "Commencez votre projet aujourd'hui",
    },
    gallery: {
      eyebrow: "Pourquoi nous choisir",
      titleLine1: "Ne laissez plus votre site web être une simple brochure.",
      titleLine2: "Faites-en votre meilleur commercial.",
      slides: [
        {
          tag: "Un design qui inspire confiance",
          title: "Un site web qui reflète la qualité de votre travail.",
          subtitle:
            "Votre entreprise mérite une vitrine numérique à la hauteur de votre savoir-faire.",
          statNumber: "95%",
          statText: "des clients jugent la qualité d'un service à travers son site web",
          description:
            "Le design, la vitesse, et la clarté de votre site web sont les premiers éléments que vos clients voient. Nous construisons des sites qui donnent envie de vous faire confiance, dès la première seconde.",
          ctaText: "Voir nos réalisations",
        },
        {
          tag: "Conçu pour les entrepreneurs",
          title: "Un site qui fait le travail, pas juste du beau.",
          subtitle: "Optimisé pour la conversion, pas juste pour le look.",
          statNumber: "100%",
          statText:
            "de nos sites sont livrés avec une configuration complète (domaine, hébergement, emails)",
          description:
            "Nous ne construisons pas des brochures numériques. Nous construisons des vitrines professionnelles qui transforment les visiteurs en clients. Réservation en ligne, galerie photos, FAQ : tout est pensé pour vous aider à grandir.",
          ctaText: "Réservez votre appel gratuit",
        },
      ],
    },
    testimonials: {
      eyebrow: "Résultats réels",
      title: "Apprécié par des propriétaires d'entreprise acharnés",
      items: [
        {
          quote:
            "Mon vieux site web datait de 2012. J'avais honte de l'envoyer à mes clients. ÉquipeSitePRO a rendu le processus tellement simple. Ils ont compris mon métier, ont posé les bonnes questions, et le résultat est un site dont je suis fier.",
          name: "Jean Marchand",
          role: "Propriétaire, Couverture Marchand Inc.",
        },
        {
          quote:
            "Mon ancien site mettait 9 secondes à charger et je perdais des clients. Le nouveau est instantané, et le formulaire de réservation remplit mon agenda automatiquement.",
          name: "David Parc",
          role: "Propriétaire, Happy Tails Toilettage",
        },
        {
          quote:
            "Ces gars-là comprennent les petites entreprises. Pas de jargon, pas de détours. Je leur ai envoyé quelques photos et ils ont géré le reste. Le meilleur argent que j'ai dépensé pour mon entreprise.",
          name: "Michel Torres",
          role: "Propriétaire, Torres Paysagisme",
        },
        {
          quote:
            "Je savais que j'avais besoin d'un changement, mais j'avais peur que ce soit compliqué. L'équipe m'a guidé pas à pas. J'ai adoré travailler avec eux. C'était fluide, humain, et le design final est magnifique.",
          name: "Sophie Bélanger",
          role: "Propriétaire, Clinique Vétérinaire Bel-Air",
        },
        {
          quote:
            "Je n'avais pas de site web depuis 10 ans. J'avais peur que ce soit trop technique. Dès le premier appel, j'ai su que j'étais entre de bonnes mains. Le design est superbe, et mes clients me complimentent constamment.",
          name: "Robert Gagnon",
          role: "Propriétaire, Gagnon Électrique Inc.",
        },
        {
          quote:
            "J'ai adoré chaque étape du processus. Ils écoutent vraiment ce que vous voulez. Le nouveau site est épuré, moderne, et fonctionne à la perfection sur mobile. C'est exactement ce dont j'avais besoin.",
          name: "Marie-Claude Lévesque",
          role: "Propriétaire, Studio de Yoga Namasté",
        },
        {
          quote:
            "Je suis fier de mon entreprise, mais mon site web ne le reflétait pas. ÉquipeSitePRO a su capturer mon essence. Le processus a été collaboratif et amusant. Je recommande à 100%.",
          name: "Sébastien Thibault",
          role: "Directeur, Thibault Construction",
        },
      ],
    },
    pricing: {
      eyebrow: "Tarifs",
      title: "Une tarification simple, sans surprises",
      subtitle:
        "Un investissement unique pour votre site web, suivi d'une cotisation mensuelle pour maintenir votre présence en ligne. Sans engagement.",
      plans: [
        {
          name: "Sur Mesure",
          cadence: " + 97 $/mois",
          tag: "",
          description:
            "Vous avez un projet unique, une vision précise, ou des besoins qui sortent de l'ordinaire ? Ce plan est fait pour vous. Nous adaptons notre processus à vos exigences, sans compromis.",
          features: [
            "Conception exclusive selon vos directives",
            "Fonctionnalités sur mesure et complexes",
            "Développement d'outils personnalisés",
            "Intégrations avancées (API, CRM, etc.)",
            "Accompagnement dédié tout au long du projet",
            "Un site web qui vous ressemble, exactement comme vous l'imaginez",
          ],
          cta: "Contactez-nous",
        },
        {
          name: "Maintien Pro",
          cadence: "/mois",
          tag: "MISE À JOUR",
          description:
            "La cotisation mensuelle qui maintient votre site web actif, sécurisé et performant. Un coût minime pour une tranquillité d'esprit maximale.",
          features: [
            "Hébergement sécurisé et performant",
            "Sauvegardes automatiques et protection contre les pannes",
            "Mises à jour mensuelles du design et du contenu",
            "Support prioritaire 7 jours sur 7",
            "Aucun coût caché. Vous gardez le contrôle de votre site web",
          ],
          cta: "Réserver un appel gratuit",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Des questions ? Nous avons les réponses",
      items: [
        {
          q: "Combien de temps faut-il pour construire mon site web ?",
          a: "Nos sites Starter sont livrés en 7 jours. Les projets Croissance et Sur Mesure varient selon l'ampleur du travail, mais nous vous donnerons un calendrier clair avant de commencer. Pas d'attente interminable.",
        },
        {
          q: "Dois-je rédiger le contenu moi-même ?",
          a: "Non. Envoyez-nous simplement quelques photos et quelques informations de base sur votre entreprise. Nous nous occupons de la rédaction, de la mise en page et du design. Vous révisez, nous ajustons, et nous lançons.",
        },
        {
          q: "Et si j'ai déjà un site web ?",
          a: "Nous pouvons reconstruire ou migrer votre site existant. La plupart de nos clients viennent à nous avec un site ancien, lent ou obsolète, et nous le remplaçons par quelque chose de rapide et moderne.",
        },
        {
          q: "Mon site web fonctionnera-t-il sur les téléphones ?",
          a: "Absolument. Chaque site que nous construisons est conçu en priorité pour le mobile, ce qui signifie qu'il est beau et fonctionne parfaitement sur les téléphones, les tablettes et les ordinateurs. La plupart de vos clients recherchent sur leur téléphone.",
        },
        {
          q: "Que se passe-t-il après le lancement de mon site ?",
          a: "Avec notre forfait Croissance, nous gérons l'hébergement, la sécurité, les sauvegardes et les modifications mensuelles pour que vous n'ayez jamais à vous en soucier. Les clients Starter sont propriétaires de leur site à 100 % et peuvent ajouter un plan d'entretien à tout moment.",
        },
        {
          q: "Y a-t-il un contrat à long terme ?",
          a: "Non. Les forfaits mensuels sont reconduits mois par mois. Vous pouvez passer à un forfait supérieur, inférieur ou annuler à tout moment. Nous gagnons votre confiance chaque mois.",
        },
      ],
    },
    showcase: {
      eyebrow: "Nos réalisations",
      titlePlain: "Des sites web qui transforment ",
      titleAccent: "des entreprises",
      subtitlePlain: 'Cliquez sur un projet pour voir comment nous transformons un site "simple" en un site ',
      subtitleAccent: "PRO",
      before: "AVANT",
      after: "APRÈS",
      simple: "Simple",
      pro: "PRO",
      fromSimpleToPro: "De simple à PRO",
      quotePart1: "De simple",
      quotePart2: " à ",
      quotePart3: "PRO",
      visitSite: "Visiter le site",
      categories: {
        Massothérapeute: "Massothérapeute",
        Naturopathe: "Naturopathe",
        Service: "Service",
        Commerce: "Commerce",
      } as Record<string, string>,
    },
    contact: {
      eyebrow: "Contactez-nous",
      titleLine1: "Une question ? Besoin d'une démo gratuite ?",
      titleLine2: "Nous sommes là pour vous aider.",
      findOnMaps: "Trouvez-nous sur Google Maps",
      infoTitle: "Informations de contact",
      addressLabel: "Adresse",
      addressValue: "Stand by, nous sommes en cours d'installation.",
      phoneLabel: "Téléphone",
      emailLabel: "Courriel",
      pitchTitle: "Prêt à obtenir un site web qui vous apporte réellement des clients ?",
      pitchBody:
        "Réservez un appel gratuit de 15 minutes. Nous examinerons votre configuration actuelle et vous montrerons exactement ce qu'un meilleur site pourrait faire pour vos résultats. Sans pression, sans jargon.",
    },
    floatingContact: {
      call: "Appelez-nous",
      message: "Envoyez un message",
    },
    footer: {
      tagline:
        "Des sites web professionnels pour les petites entreprises qui veulent grandir. Construits rapidement, conçus pour convertir, réalisés par des gens qui comprennent votre réalité.",
      rights: "Tous droits réservés.",
      privacy: "Politique de confidentialité",
      terms: "Conditions d'utilisation",
      columns: [
        {
          title: "Services",
          links: [
            "Conception de sites web",
            "Réservation en ligne",
            "SEO et recherche locale",
            "Hébergement et plans d'entretien",
          ],
        },
        {
          title: "Entreprise",
          links: ["À propos de nous", "Nos réalisations", "Avis clients", "Contact"],
        },
        {
          title: "Ressources",
          links: ["Audit de site gratuit", "Tarifs", "FAQ", "Blog"],
        },
      ],
    },
    about: {
      eyebrow: "La vérité sur les sites web",
      titlePlain: "Le site web est votre ",
      titleAccent: "premier contact client.",
      titleEnd: " Il détermine si vous gagnez ou perdez l'affaire.",
      funnelKicker: "Le parcours du client",
      funnelTitle: "Le chemin qui mène à votre porte",
      funnelStep1Label: "Étape 1 : La recherche.",
      funnelStep1:
        " Quand un client a besoin de vos services, il ouvre Google Maps. Il tape « plombier près de moi » ou « entrepreneur en toiture près de moi ». Il scanne la liste. Il regarde les notes. Il clique sur le bouton « Site web ».",
      funnelStep2Label: "Étape 2 : La décision.",
      funnelStep2Part1: " Le site web s'ouvre. ",
      funnelStep2Emph: "Le chronomètre commence.",
      funnelStep2Part2:
        " En trois secondes, le client décide s'il reste ou s'il retourne à Google Maps pour appeler le concurrent suivant.",
      funnelStep3Label: "Étape 3 : Le transfert de qualité.",
      funnelStep3:
        " Ce n'est pas une opinion. C'est un principe psychologique validé appelé l'effet de halo. Un site web beau et professionnel crée une attente de service beau et professionnel. Un site web daté et brisé crée une attente de service daté et brisé. Le cerveau humain associe la qualité perçue dans un domaine à la qualité attendue dans un autre.",
      stat1Value: "3",
      stat1Label: "Secondes",
      stat1Desc: "Pour convaincre ou perdre un client",
      stat2Value: "95%",
      stat2Label: "Décision",
      stat2Desc: "Basée sur la première impression visuelle",
      stat3Value: "100%",
      stat3Label: "Responsabilité",
      stat3Desc: "Le site web doit refléter votre qualité réelle",
      costKicker: "L'équation commerciale",
      costTitle: "Le coût d'un site web qui ne convertit pas",
      costP1Plain: "Le problème fondamental est le suivant : ",
      costP1Emph:
        "les entreprises dépensent des milliers de dollars en publicité pour attirer des visiteurs sur un site web qui les repousse.",
      costP2:
        "Si votre site web est daté, lent, ou difficile à naviguer, vous n'êtes pas seulement en train de perdre l'argent que vous avez dépensé pour cette publicité. Vous perdez également le coût d'opportunité de chaque client qui aurait dû vous appeler.",
      costP3Part1: "Une agence de marketing traditionnelle vous facture ",
      costP3Emph1: "1 000 $ à 5 000 $ par mois",
      costP3Part2: " pour des publicités. Un site web professionnel coûte ",
      costP3Emph2: "5 000 $ à 10 000 $",
      costP3Part3: " en conception initiale, plus des coûts récurrents d'hébergement et de maintenance.",
      costP4Part1: "Pour la plupart des entrepreneurs, cet investissement est hors de portée. Et c'est là que le problème s'aggrave : ",
      costP4Emph: "ils n'ont pas de site web, ou ils ont un site web qui leur fait perdre de l'argent.",
      solutionTitle: "Notre solution : Une approche différente",
      solutionP1:
        "Nous avons constaté que la méthode traditionnelle de création de sites web est obsolète. Elle est chère, lente, et produit souvent un résultat qui ne répond pas aux besoins réels de l'entreprise.",
      solutionP2:
        "En utilisant les technologies modernes, nous pouvons construire un site web professionnel de haute qualité en une fraction du temps et du coût. Nous répercutons ces économies sur nos clients.",
      solutionCard1Value: "2 000 $",
      solutionCard1Label: "Conception initiale",
      solutionCard1Desc: "Un investissement unique pour un site web professionnel.",
      solutionCard2Value: "1",
      solutionCard2Label: "Semaine",
      solutionCard2Desc: "Livraison de votre site web professionnel.",
      solutionCard3Value: "97 $",
      solutionCard3Label: "Par mois",
      solutionCard3Desc: "Hébergement, sécurité et mises à jour inclus. Sans engagement.",
      comparisonTitle: "L'approche traditionnelle vs. Notre approche",
      comparisonColTraditional: "Agence Traditionnelle",
      comparisonColVs: "VS",
      comparisonColUs: "ÉquipeSitePRO",
      comparisonRows: [
        { traditional: "5 000 $ - 10 000 $ initial", us: "2 000 $ initial + 97 $/mois" },
        { traditional: "Hébergement & sécurité en extra", us: "Hébergement, sécurité, sauvegardes inclus" },
        { traditional: "Disparaît après livraison", us: "Support mensuel et mises à jour inclus" },
      ],
      ctaBook: "Réservez votre appel gratuit",
      ctaPricing: "Voir nos tarifs",
    },
    blog: {
      eyebrow: "Le Blog",
      titlePlain: "Des conseils pour bâtir une présence en ligne ",
      titleAccent: "qui compte.",
      subtitle:
        "Des articles pratiques pour vous aider à comprendre l'importance d'un site web professionnel et comment il peut transformer votre entreprise.",
      readArticle: "Lire l'article",
      backToBlog: "Retour au blog",
      notFound: "Article introuvable",
      posts: [
        {
          title: "Pourquoi votre site web vous fait perdre des clients (et comment y remédier)",
          excerpt:
            "Votre site web est votre première impression. S'il est daté, lent, ou difficile à naviguer, les clients le remarquent. Voici comment corriger le tir.",
          date: "15 Août 2026",
        },
        {
          title: "Le design web n'est pas une décoration. C'est une question de confiance.",
          excerpt:
            "Pourquoi un design propre et professionnel est essentiel pour établir la crédibilité de votre entreprise dès la première seconde.",
          date: "10 Août 2026",
        },
        {
          title: "3 erreurs courantes à éviter lors de la création de votre site web",
          excerpt:
            "Des photos de mauvaise qualité à un contenu mal écrit, voici les pièges les plus courants qui nuisent à votre image en ligne.",
          date: "5 Août 2026",
        },
        {
          title: "Pourquoi un site web mobile est indispensable pour les entrepreneurs",
          excerpt:
            "La plupart de vos clients cherchent vos services sur leur téléphone. Si votre site ne s'affiche pas parfaitement, ils iront voir ailleurs.",
          date: "28 Juillet 2026",
        },
        {
          title: "L'importance d'une galerie de photos professionnelle",
          excerpt:
            "Vos clients veulent voir à quoi ressemble votre travail avant de vous appeler. Des photos de qualité sont le meilleur moyen de les convaincre.",
          date: "20 Juillet 2026",
        },
      ],
    },
  },

  en: {
    common: {
      freeConsultation: "Free consultation",
      bookFreeCall: "Book your free call",
      homeAria: "ÉquipeSitePRO home",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      switchToEnglish: "Switch to English",
      switchToFrench: "Switch to French",
    },
    nav: {
      services: "Services",
      howItWorks: "How it works",
      pricing: "Pricing",
      testimonials: "Testimonials",
      about: "About",
      blog: "Blog",
      contact: "Contact",
    },
    hero: {
      badge: "Your partner for a professional website",
      titleLine1: "Turn your website",
      titleLine2: "into your best salesperson.",
      description:
        "A modern design, smooth navigation, and an online presence that inspires confidence. We build websites that reflect the quality of your work and turn visitors into customers.",
      ctaPrimary: "Get your free consultation",
      ctaSecondary: "See how it works",
    },
    preview: {
      eyebrow: "Our commitment to you",
      title: "Receive a preview of your transformed website in 24h",
      description:
        "Before you commit to anything, we show you what your new website can become. We are here to support you every step of the way.",
      cards: [
        {
          title: "A preview within 24 hours",
          description:
            "Using what you already have, we build a preview of your new website in less than 24 hours, before you have to commit to anything.",
        },
        {
          title: "Real human support",
          description:
            "One dedicated point of contact from start to finish. No bots, no technical jargon, just a team that listens and takes good care of you.",
        },
        {
          title: "Your satisfaction guaranteed",
          description:
            "We refine your website until it fits you perfectly. Your trust and peace of mind are our top priority.",
        },
      ],
      stats: [
        { value: "24h", label: "Free preview" },
        { value: "$0", label: "No commitment" },
        { value: "100%", label: "Happy clients" },
      ],
      cta: "Get your free preview",
    },
    trustedLogos: {
      label: "Trusted by",
    },
    problem: {
      titleLine1: "The quality of your website",
      titleLine2: "communicates the quality of your service.",
      description:
        "When someone sees a beautiful, professional website, they expect a beautiful, professional service. When they see a dated, broken website, they expect a dated, broken service.",
      bullet1: "A dated website = a dated service.",
      bullet2: "A professional website = a professional service.",
      bullet3: "Your website is your best salesperson. It works 24/7.",
      cta: "See how we fix this",
      imageAlt:
        "A frustrated business owner at their desk with an outdated website and missed calls piling up",
    },
    outcomes: {
      eyebrow: "What we do",
      titlePlain: "Professional websites that ",
      titleAccent: "bring you customers",
      descriptionPlain: "We don't just build websites. We build ",
      descriptionAccent: "digital storefronts",
      descriptionEnd: " that turn every visitor into a potential customer.",
      items: [
        {
          title: "Professional Website & Local SEO",
          description:
            "We build a modern, lightning-fast website optimized for search engines. We set up your Google Business Profile so you show up at the top of local searches.",
          bullet: "Show up on Google Maps and in local search results.",
        },
        {
          title: "Responsive & Premium Design",
          description:
            "Your site adapts perfectly to computers, tablets, and phones. A modern, clean design that inspires confidence in your customers from the very first second.",
          bullet: "A flawless user experience on every screen.",
        },
        {
          title: "Photo Gallery & Portfolio",
          description:
            "We showcase your work with a professional, well-organized photo gallery. Customers see the quality of your work before they even contact you.",
          bullet: "Your work speaks for itself through high-quality visuals.",
        },
        {
          title: "Automated Appointment Booking",
          description:
            "We integrate a smart calendar system into your website. Customers see your availability in real time and book their appointment in a few clicks, with no back-and-forth emails.",
          bullet: "Your calendar fills up automatically, 24/7.",
        },
        {
          title: "Complete Setup & Configuration",
          description:
            "We handle everything from A to Z. Domain setup, secure hosting, professional email setup, and calendar integration.",
          bullet: "You have nothing to configure. You start receiving customers from day one.",
        },
        {
          title: "FAQ & Strategic Content",
          description:
            "We add a complete FAQ section to your site to answer your customers' most frequent questions, reducing unnecessary calls and increasing conversions.",
          bullet: "Your customers find answers instantly, without having to call you.",
        },
      ],
    },
    howItWorks: {
      eyebrow: "How it works",
      titlePlain: "From simple to ",
      titleAccent: "PRO",
      subtitle: "Here's exactly how simple it is to get started.",
      steps: [
        {
          title: "We understand your business.",
          description:
            "We talk with you about your needs, your goals, and your vision. That's the foundation of a website that truly represents you.",
        },
        {
          title: "We build your website.",
          description:
            "Our team designs and develops a modern, professional, and optimized website. Design, photos, copy, everything is built to impress.",
        },
        {
          title: "Your website is ready to convert.",
          description:
            "We put your site live and support you so your visitors become customers. Simple and effective.",
        },
      ],
      cta: "Start your project today",
    },
    gallery: {
      eyebrow: "Why choose us",
      titleLine1: "Stop letting your website be just a brochure.",
      titleLine2: "Make it your best salesperson.",
      slides: [
        {
          tag: "A design that inspires confidence",
          title: "A website that reflects the quality of your work.",
          subtitle: "Your business deserves a digital storefront worthy of your craft.",
          statNumber: "95%",
          statText: "of customers judge the quality of a service through its website",
          description:
            "The design, speed, and clarity of your website are the first things your customers see. We build sites that make people want to trust you from the very first second.",
          ctaText: "See our work",
        },
        {
          tag: "Built for business owners",
          title: "A site that does the work, not just looks good.",
          subtitle: "Optimized for conversion, not just for looks.",
          statNumber: "100%",
          statText: "of our sites are delivered with a complete setup (domain, hosting, emails)",
          description:
            "We don't build digital brochures. We build professional storefronts that turn visitors into customers. Online booking, photo gallery, FAQ: everything is designed to help you grow.",
          ctaText: "Book your free call",
        },
      ],
    },
    testimonials: {
      eyebrow: "Real results",
      title: "Loved by hard-working business owners",
      items: [
        {
          quote:
            "My old website dated back to 2012. I was embarrassed to send it to my clients. ÉquipeSitePRO made the process so simple. They understood my trade, asked the right questions, and the result is a site I'm proud of.",
          name: "Jean Marchand",
          role: "Owner, Couverture Marchand Inc.",
        },
        {
          quote:
            "My old site took 9 seconds to load and I was losing customers. The new one is instant, and the booking form fills my calendar automatically.",
          name: "David Parc",
          role: "Owner, Happy Tails Grooming",
        },
        {
          quote:
            "These guys understand small businesses. No jargon, no runaround. I sent them a few photos and they handled the rest. The best money I've spent on my business.",
          name: "Michel Torres",
          role: "Owner, Torres Landscaping",
        },
        {
          quote:
            "I knew I needed a change, but I was afraid it would be complicated. The team guided me step by step. I loved working with them. It was smooth, human, and the final design is gorgeous.",
          name: "Sophie Bélanger",
          role: "Owner, Bel-Air Veterinary Clinic",
        },
        {
          quote:
            "I hadn't had a website in 10 years. I was afraid it would be too technical. From the very first call, I knew I was in good hands. The design is stunning, and my customers compliment me constantly.",
          name: "Robert Gagnon",
          role: "Owner, Gagnon Électrique Inc.",
        },
        {
          quote:
            "I loved every step of the process. They really listen to what you want. The new site is clean, modern, and works perfectly on mobile. It's exactly what I needed.",
          name: "Marie-Claude Lévesque",
          role: "Owner, Namasté Yoga Studio",
        },
        {
          quote:
            "I'm proud of my business, but my website didn't reflect that. ÉquipeSitePRO captured my essence. The process was collaborative and fun. I recommend them 100%.",
          name: "Sébastien Thibault",
          role: "Director, Thibault Construction",
        },
      ],
    },
    pricing: {
      eyebrow: "Pricing",
      title: "Simple pricing, no surprises",
      subtitle:
        "A one-time investment for your website, followed by a monthly fee to maintain your online presence. No commitment.",
      plans: [
        {
          name: "Custom",
          cadence: " + $97/month",
          tag: "",
          description:
            "Do you have a unique project, a precise vision, or needs that go beyond the ordinary? This plan is for you. We adapt our process to your requirements, no compromises.",
          features: [
            "Exclusive design based on your guidelines",
            "Custom and complex features",
            "Development of personalized tools",
            "Advanced integrations (API, CRM, etc.)",
            "Dedicated support throughout the project",
            "A website that represents you, exactly as you imagine it",
          ],
          cta: "Contact us",
        },
        {
          name: "Pro Maintenance",
          cadence: "/month",
          tag: "UPDATE",
          description:
            "The monthly fee that keeps your website active, secure, and high-performing. A minimal cost for maximum peace of mind.",
          features: [
            "Secure, high-performance hosting",
            "Automatic backups and protection against outages",
            "Monthly design and content updates",
            "Priority support 7 days a week",
            "No hidden costs. You keep control of your website",
          ],
          cta: "Book a free call",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Questions? We have answers",
      items: [
        {
          q: "How long does it take to build my website?",
          a: "Our Starter sites are delivered in 7 days. Growth and Custom projects vary depending on the scope of work, but we'll give you a clear timeline before we start. No endless waiting.",
        },
        {
          q: "Do I have to write the content myself?",
          a: "No. Just send us a few photos and some basic information about your business. We handle the writing, layout, and design. You review, we adjust, and we launch.",
        },
        {
          q: "What if I already have a website?",
          a: "We can rebuild or migrate your existing site. Most of our clients come to us with an old, slow, or outdated site, and we replace it with something fast and modern.",
        },
        {
          q: "Will my website work on phones?",
          a: "Absolutely. Every site we build is designed mobile-first, which means it looks great and works perfectly on phones, tablets, and computers. Most of your customers search on their phones.",
        },
        {
          q: "What happens after my site launches?",
          a: "With our Growth plan, we handle hosting, security, backups, and monthly edits so you never have to worry about them. Starter clients own their site 100% and can add a maintenance plan at any time.",
        },
        {
          q: "Is there a long-term contract?",
          a: "No. Monthly plans renew month by month. You can upgrade, downgrade, or cancel at any time. We earn your trust every month.",
        },
      ],
    },
    showcase: {
      eyebrow: "Our work",
      titlePlain: "Websites that transform ",
      titleAccent: "businesses",
      subtitlePlain: 'Click on a project to see how we transform a "simple" site into a ',
      subtitleAccent: "PRO",
      before: "BEFORE",
      after: "AFTER",
      simple: "Simple",
      pro: "PRO",
      fromSimpleToPro: "From simple to PRO",
      quotePart1: "From simple",
      quotePart2: " to ",
      quotePart3: "PRO",
      visitSite: "Visit the site",
      categories: {
        Massothérapeute: "Massage Therapist",
        Naturopathe: "Naturopath",
        Service: "Service",
        Commerce: "Retail",
      } as Record<string, string>,
    },
    contact: {
      eyebrow: "Contact us",
      titleLine1: "A question? Need a free demo?",
      titleLine2: "We're here to help.",
      findOnMaps: "Find us on Google Maps",
      infoTitle: "Contact information",
      addressLabel: "Address",
      addressValue: "Stand by, we're currently getting set up.",
      phoneLabel: "Phone",
      emailLabel: "Email",
      pitchTitle: "Ready to get a website that actually brings you customers?",
      pitchBody:
        "Book a free 15-minute call. We'll review your current setup and show you exactly what a better site could do for your bottom line. No pressure, no jargon.",
    },
    floatingContact: {
      call: "Call us",
      message: "Send a message",
    },
    footer: {
      tagline:
        "Professional websites for small businesses that want to grow. Built fast, designed to convert, made by people who understand your reality.",
      rights: "All rights reserved.",
      privacy: "Privacy policy",
      terms: "Terms of use",
      columns: [
        {
          title: "Services",
          links: ["Website design", "Online booking", "SEO and local search", "Hosting and maintenance plans"],
        },
        {
          title: "Company",
          links: ["About us", "Our work", "Client reviews", "Contact"],
        },
        {
          title: "Resources",
          links: ["Free site audit", "Pricing", "FAQ", "Blog"],
        },
      ],
    },
    about: {
      eyebrow: "The truth about websites",
      titlePlain: "Your website is your ",
      titleAccent: "first customer touchpoint.",
      titleEnd: " It determines whether you win or lose the deal.",
      funnelKicker: "The customer journey",
      funnelTitle: "The path that leads to your door",
      funnelStep1Label: "Step 1: The search.",
      funnelStep1:
        " When a customer needs your services, they open Google Maps. They type \"plumber near me\" or \"roofing contractor near me.\" They scan the list. They look at the ratings. They click the \"Website\" button.",
      funnelStep2Label: "Step 2: The decision.",
      funnelStep2Part1: " The website opens. ",
      funnelStep2Emph: "The clock starts ticking.",
      funnelStep2Part2:
        " Within three seconds, the customer decides whether to stay or go back to Google Maps to call the next competitor.",
      funnelStep3Label: "Step 3: The quality transfer.",
      funnelStep3:
        " This isn't an opinion. It's a validated psychological principle called the halo effect. A beautiful, professional website creates an expectation of beautiful, professional service. A dated, broken website creates an expectation of dated, broken service. The human brain associates perceived quality in one area with expected quality in another.",
      stat1Value: "3",
      stat1Label: "Seconds",
      stat1Desc: "To win or lose a customer",
      stat2Value: "95%",
      stat2Label: "Decision",
      stat2Desc: "Based on the first visual impression",
      stat3Value: "100%",
      stat3Label: "Responsibility",
      stat3Desc: "The website must reflect your real quality",
      costKicker: "The business equation",
      costTitle: "The cost of a website that doesn't convert",
      costP1Plain: "The fundamental problem is this: ",
      costP1Emph:
        "businesses spend thousands of dollars on advertising to drive visitors to a website that pushes them away.",
      costP2:
        "If your website is dated, slow, or hard to navigate, you're not only losing the money you spent on that advertising. You're also losing the opportunity cost of every customer who should have called you.",
      costP3Part1: "A traditional marketing agency charges you ",
      costP3Emph1: "$1,000 to $5,000 per month",
      costP3Part2: " for ads. A professional website costs ",
      costP3Emph2: "$5,000 to $10,000",
      costP3Part3: " in initial design, plus recurring hosting and maintenance costs.",
      costP4Part1: "For most business owners, that investment is out of reach. And that's where the problem gets worse: ",
      costP4Emph: "they have no website, or they have a website that's losing them money.",
      solutionTitle: "Our solution: A different approach",
      solutionP1:
        "We found that the traditional method of building websites is outdated. It's expensive, slow, and often produces a result that doesn't meet the business's real needs.",
      solutionP2:
        "Using modern technology, we can build a high-quality professional website in a fraction of the time and cost. We pass those savings on to our clients.",
      solutionCard1Value: "$2,000",
      solutionCard1Label: "Initial design",
      solutionCard1Desc: "A one-time investment for a professional website.",
      solutionCard2Value: "1",
      solutionCard2Label: "Week",
      solutionCard2Desc: "Delivery of your professional website.",
      solutionCard3Value: "$97",
      solutionCard3Label: "Per month",
      solutionCard3Desc: "Hosting, security, and updates included. No commitment.",
      comparisonTitle: "The traditional approach vs. Our approach",
      comparisonColTraditional: "Traditional Agency",
      comparisonColVs: "VS",
      comparisonColUs: "ÉquipeSitePRO",
      comparisonRows: [
        { traditional: "$5,000 - $10,000 upfront", us: "$2,000 upfront + $97/month" },
        { traditional: "Hosting & security extra", us: "Hosting, security, backups included" },
        { traditional: "Disappears after delivery", us: "Monthly support and updates included" },
      ],
      ctaBook: "Book your free call",
      ctaPricing: "See our pricing",
    },
    blog: {
      eyebrow: "The Blog",
      titlePlain: "Advice for building an online presence ",
      titleAccent: "that matters.",
      subtitle:
        "Practical articles to help you understand the importance of a professional website and how it can transform your business.",
      readArticle: "Read the article",
      backToBlog: "Back to blog",
      notFound: "Article not found",
      posts: [
        {
          title: "Why your website is losing you customers (and how to fix it)",
          excerpt:
            "Your website is your first impression. If it's dated, slow, or hard to navigate, customers notice. Here's how to fix it.",
          date: "August 15, 2026",
        },
        {
          title: "Web design isn't decoration. It's about trust.",
          excerpt:
            "Why a clean, professional design is essential to establishing your business's credibility from the very first second.",
          date: "August 10, 2026",
        },
        {
          title: "3 common mistakes to avoid when building your website",
          excerpt:
            "From poor-quality photos to badly written content, here are the most common pitfalls that hurt your online image.",
          date: "August 5, 2026",
        },
        {
          title: "Why a mobile website is essential for business owners",
          excerpt:
            "Most of your customers search for your services on their phone. If your site doesn't display perfectly, they'll go elsewhere.",
          date: "July 28, 2026",
        },
        {
          title: "The importance of a professional photo gallery",
          excerpt:
            "Your customers want to see what your work looks like before they call you. Quality photos are the best way to convince them.",
          date: "July 20, 2026",
        },
      ],
    },
  },
} as const

// Recursively widen literal types (e.g. "Services" -> string) so that the FR and
// EN dictionaries share one structural type and `dictionary[language]` is assignable
// to `Dictionary` regardless of which language is active.
type Widen<T> = T extends string
  ? string
  : T extends number
    ? number
    : T extends boolean
      ? boolean
      : T extends readonly (infer U)[]
        ? readonly Widen<U>[]
        : { readonly [K in keyof T]: Widen<T[K]> }

export type Dictionary = Widen<(typeof dictionary)["fr"]>
