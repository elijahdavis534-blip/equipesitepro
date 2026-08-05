import type { Language } from "./dictionary"

export type BlogArticle = {
  title: string
  date: string
  content: string
}

// Full article bodies keyed by slug, for each language.
// Kept separate from the main dictionary to avoid bloating it.
export const blogContent: Record<Language, Record<string, BlogArticle>> = {
  fr: {
    "pourquoi-site-web-perd-clients": {
      title: "Pourquoi votre site web vous fait perdre des clients (et comment y remédier)",
      date: "15 Août 2026",
      content: `
        <p class="text-lg leading-relaxed text-muted-foreground">Imaginez un instant. Un client potentiel cherche votre service sur Google. Il clique sur le lien de votre site web. Il atterrit sur une page qui met 5 secondes à charger. Le design est vieillot. Les photos sont floues. Le texte est mal écrit.</p>

        <div class="bg-muted/30 p-6 rounded-xl border border-border my-6">
          <p class="italic text-navy font-medium">Que pense-t-il de vous ?</p>
        </div>

        <p>Si vous avez un site web daté ou de mauvaise qualité, ce n'est pas seulement un problème esthétique. <strong class="text-navy">C'est un problème commercial.</strong> Voici pourquoi les clients jugent votre entreprise sur votre site web.</p>

        <h2 class="font-heading text-2xl font-bold text-navy mt-8 mb-4">1. La première impression est tout</h2>
        <p>Nous le savons tous : nous prenons des décisions en quelques secondes. Si votre site web est professionnel, propre et moderne, vous inspirez confiance. Si votre site web est en retard d'une décennie, vous inspirez le doute. C'est aussi simple que cela.</p>

        <h2 class="font-heading text-2xl font-bold text-navy mt-8 mb-4">2. La vitesse de chargement compte</h2>
        <p>Un site web lent est un site web qui repousse les clients. Les gens sont impatients. Si votre site met plus de 2 ou 3 secondes à charger, ils partiront et iront voir votre concurrent.</p>

        <h2 class="font-heading text-2xl font-bold text-navy mt-8 mb-4">3. Le design reflète votre travail</h2>
        <p>Si vous êtes un entrepreneur, votre travail est votre fierté. Votre site web devrait refléter cette fierté. Des photos de qualité, un design épuré, et un contenu clair sont la preuve que vous prenez votre entreprise au sérieux.</p>

        <hr class="border-border my-8" />

        <h3 class="font-heading text-xl font-bold text-navy mb-3">Comment y remédier</h3>
        <p>La bonne nouvelle, c'est que vous n'avez pas à devenir un expert en design web pour avoir un site professionnel. Vous avez juste besoin des bonnes personnes pour le faire. Nous sommes là pour ça.</p>

        <div class="mt-6">
          <a href="/#contact" class="inline-flex items-center text-brand-red font-semibold hover:underline">
            Commencez votre projet aujourd'hui <span class="ml-1">→</span>
          </a>
        </div>
      `,
    },
    "design-web-confiance-credibilite": {
      title: "Le design web n'est pas une décoration. C'est une question de confiance.",
      date: "10 Août 2026",
      content: `
        <p class="text-lg leading-relaxed text-muted-foreground">Le design web n'est pas juste une question de choix de couleurs ou de typographie. <strong class="text-navy">C'est une question de psychologie humaine.</strong></p>

        <blockquote class="border-l-4 border-brand-red pl-4 italic text-muted-foreground my-6">
          "Pourquoi faisons-nous confiance à certaines marques et pas à d'autres ? Souvent, c'est à cause de la manière dont elles se présentent."
        </blockquote>

        <p>Un site web professionnel est une poignée de main numérique. Lorsque votre site est propre, facile à naviguer et agréable à regarder, vous dites à vos clients : <em>"Je prends mon travail au sérieux."</em></p>

        <p>Un site mal conçu, en revanche, envoie le message inverse.</p>

        <div class="bg-navy/5 p-6 rounded-xl border border-border my-6">
          <p class="font-medium text-navy">Investir dans un design de qualité est l'un des meilleurs investissements que vous puissiez faire pour votre entreprise. C'est la vitrine de votre savoir-faire.</p>
        </div>
      `,
    },
    "3-erreurs-creation-site-web": {
      title: "3 erreurs courantes à éviter lors de la création de votre site web",
      date: "5 Août 2026",
      content: `
        <p class="text-lg leading-relaxed text-muted-foreground">Créer un site web professionnel peut sembler intimidant. Mais en évitant ces 3 erreurs courantes, vous pouvez vous assurer que votre site fera bonne impression.</p>

        <div class="grid gap-4 my-6">
          <div class="p-4 rounded-xl border border-border bg-card">
            <h3 class="font-bold text-navy text-lg">Erreur n°1 : Utiliser des photos génériques</h3>
            <p class="text-muted-foreground text-sm mt-1">Les photos de stock peuvent sembler pratiques, mais elles donnent souvent un aspect impersonnel et peu professionnel. Utilisez des photos de votre propre travail ou de votre équipe.</p>
          </div>
          <div class="p-4 rounded-xl border border-border bg-card">
            <h3 class="font-bold text-navy text-lg">Erreur n°2 : Négliger la version mobile</h3>
            <p class="text-muted-foreground text-sm mt-1">Plus de la moitié des recherches locales se font sur un téléphone. Si votre site ne s'affiche pas parfaitement sur mobile, vous perdez des clients.</p>
          </div>
          <div class="p-4 rounded-xl border border-border bg-card">
            <h3 class="font-bold text-navy text-lg">Erreur n°3 : Avoir un contenu mal écrit</h3>
            <p class="text-muted-foreground text-sm mt-1">Rien ne nuit à la crédibilité d'une entreprise comme un texte rempli de fautes de français ou des phrases confuses. Prenez le temps de rédiger un texte clair, précis, et sans erreurs.</p>
          </div>
        </div>

        <div class="mt-6">
          <a href="/#contact" class="inline-flex items-center text-brand-red font-semibold hover:underline">
            Discutons-en <span class="ml-1">→</span>
          </a>
        </div>
      `,
    },
    "site-web-mobile-entrepreneurs": {
      title: "Pourquoi un site web mobile est indispensable pour les entrepreneurs",
      date: "28 Juillet 2026",
      content: `
        <div class="bg-brand-red/5 p-6 rounded-xl border border-brand-red/10 mb-6">
          <p class="text-center text-2xl font-bold text-brand-red">+60%</p>
          <p class="text-center text-sm text-navy font-medium">des recherches sur Google proviennent d'appareils mobiles.</p>
        </div>

        <p>Lorsqu'un client potentiel cherche un service, il le fait sur son téléphone, en attendant un rendez-vous ou à la fin de la journée.</p>

        <p>Si votre site web n'est pas optimisé pour les écrans mobiles, vous dites à ces clients que vous ne vous souciez pas de leur expérience. <strong class="text-navy">C'est une erreur fatale.</strong></p>

        <p>Un site web responsive (qui s'adapte à tous les écrans) est une nécessité. Ce n'est pas une option.</p>
      `,
    },
    "galerie-photos-professionnelle": {
      title: "L'importance d'une galerie de photos professionnelle",
      date: "20 Juillet 2026",
      content: `
        <p class="text-lg leading-relaxed text-muted-foreground">Vous le savez déjà : <strong class="text-navy">les gens achètent avec leurs yeux.</strong></p>

        <p>Pour un entrepreneur, que ce soit un couvreur, un paysagiste ou un électricien, la preuve de votre travail est ce que vous montrez.</p>

        <div class="bg-muted/30 p-6 rounded-xl border border-border my-6">
          <p class="font-medium text-navy">Une galerie de photos professionnelle sur votre site web permet à vos clients potentiels de voir la qualité de votre travail avant même de vous contacter.</p>
        </div>

        <p>Des photos claires, lumineuses et bien composées sont un puissant outil de vente. Elles prouvent votre savoir-faire et vous distinguent de la concurrence.</p>
      `,
    },
  },
  en: {
    "pourquoi-site-web-perd-clients": {
      title: "Why your website is losing you customers (and how to fix it)",
      date: "August 15, 2026",
      content: `
        <p class="text-lg leading-relaxed text-muted-foreground">Picture this for a moment. A potential customer searches for your service on Google. They click the link to your website. They land on a page that takes 5 seconds to load. The design looks dated. The photos are blurry. The copy is badly written.</p>

        <div class="bg-muted/30 p-6 rounded-xl border border-border my-6">
          <p class="italic text-navy font-medium">What do they think of you?</p>
        </div>

        <p>If you have a dated or low-quality website, it's not just an aesthetic problem. <strong class="text-navy">It's a business problem.</strong> Here's why customers judge your business by your website.</p>

        <h2 class="font-heading text-2xl font-bold text-navy mt-8 mb-4">1. First impressions are everything</h2>
        <p>We all know it: we make decisions within seconds. If your website is professional, clean and modern, you inspire trust. If your website is a decade behind, you inspire doubt. It's that simple.</p>

        <h2 class="font-heading text-2xl font-bold text-navy mt-8 mb-4">2. Loading speed matters</h2>
        <p>A slow website is a website that pushes customers away. People are impatient. If your site takes more than 2 or 3 seconds to load, they'll leave and go check out your competitor.</p>

        <h2 class="font-heading text-2xl font-bold text-navy mt-8 mb-4">3. Design reflects your work</h2>
        <p>If you're a business owner, your work is your pride. Your website should reflect that pride. Quality photos, a clean design, and clear content are proof that you take your business seriously.</p>

        <hr class="border-border my-8" />

        <h3 class="font-heading text-xl font-bold text-navy mb-3">How to fix it</h3>
        <p>The good news is that you don't have to become a web design expert to have a professional site. You just need the right people to do it. That's what we're here for.</p>

        <div class="mt-6">
          <a href="/#contact" class="inline-flex items-center text-brand-red font-semibold hover:underline">
            Start your project today <span class="ml-1">→</span>
          </a>
        </div>
      `,
    },
    "design-web-confiance-credibilite": {
      title: "Web design isn't decoration. It's about trust.",
      date: "August 10, 2026",
      content: `
        <p class="text-lg leading-relaxed text-muted-foreground">Web design isn't just about choosing colors or typography. <strong class="text-navy">It's about human psychology.</strong></p>

        <blockquote class="border-l-4 border-brand-red pl-4 italic text-muted-foreground my-6">
          "Why do we trust some brands and not others? Often, it's because of the way they present themselves."
        </blockquote>

        <p>A professional website is a digital handshake. When your site is clean, easy to navigate and pleasant to look at, you tell your customers: <em>"I take my work seriously."</em></p>

        <p>A poorly designed site, on the other hand, sends the opposite message.</p>

        <div class="bg-navy/5 p-6 rounded-xl border border-border my-6">
          <p class="font-medium text-navy">Investing in quality design is one of the best investments you can make for your business. It's the showcase of your craftsmanship.</p>
        </div>
      `,
    },
    "3-erreurs-creation-site-web": {
      title: "3 common mistakes to avoid when building your website",
      date: "August 5, 2026",
      content: `
        <p class="text-lg leading-relaxed text-muted-foreground">Building a professional website can feel intimidating. But by avoiding these 3 common mistakes, you can make sure your site makes a good impression.</p>

        <div class="grid gap-4 my-6">
          <div class="p-4 rounded-xl border border-border bg-card">
            <h3 class="font-bold text-navy text-lg">Mistake #1: Using generic photos</h3>
            <p class="text-muted-foreground text-sm mt-1">Stock photos may seem convenient, but they often come across as impersonal and unprofessional. Use photos of your own work or your team.</p>
          </div>
          <div class="p-4 rounded-xl border border-border bg-card">
            <h3 class="font-bold text-navy text-lg">Mistake #2: Neglecting the mobile version</h3>
            <p class="text-muted-foreground text-sm mt-1">More than half of local searches happen on a phone. If your site doesn't display perfectly on mobile, you're losing customers.</p>
          </div>
          <div class="p-4 rounded-xl border border-border bg-card">
            <h3 class="font-bold text-navy text-lg">Mistake #3: Having badly written content</h3>
            <p class="text-muted-foreground text-sm mt-1">Nothing hurts a business's credibility like text full of spelling mistakes or confusing sentences. Take the time to write clear, precise, error-free copy.</p>
          </div>
        </div>

        <div class="mt-6">
          <a href="/#contact" class="inline-flex items-center text-brand-red font-semibold hover:underline">
            Let's talk about it <span class="ml-1">→</span>
          </a>
        </div>
      `,
    },
    "site-web-mobile-entrepreneurs": {
      title: "Why a mobile website is essential for business owners",
      date: "July 28, 2026",
      content: `
        <div class="bg-brand-red/5 p-6 rounded-xl border border-brand-red/10 mb-6">
          <p class="text-center text-2xl font-bold text-brand-red">+60%</p>
          <p class="text-center text-sm text-navy font-medium">of Google searches come from mobile devices.</p>
        </div>

        <p>When a potential customer looks for a service, they do it on their phone — while waiting for an appointment or at the end of the day.</p>

        <p>If your website isn't optimized for mobile screens, you're telling those customers that you don't care about their experience. <strong class="text-navy">That's a fatal mistake.</strong></p>

        <p>A responsive website (one that adapts to every screen) is a necessity. It's not an option.</p>
      `,
    },
    "galerie-photos-professionnelle": {
      title: "The importance of a professional photo gallery",
      date: "July 20, 2026",
      content: `
        <p class="text-lg leading-relaxed text-muted-foreground">You already know it: <strong class="text-navy">people buy with their eyes.</strong></p>

        <p>For a business owner — whether a roofer, a landscaper or an electrician — the proof of your work is what you show.</p>

        <div class="bg-muted/30 p-6 rounded-xl border border-border my-6">
          <p class="font-medium text-navy">A professional photo gallery on your website lets your potential customers see the quality of your work before they even contact you.</p>
        </div>

        <p>Clear, bright, well-composed photos are a powerful sales tool. They prove your craftsmanship and set you apart from the competition.</p>
      `,
    },
  },
}
