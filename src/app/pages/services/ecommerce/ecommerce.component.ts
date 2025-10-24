import { ChangeDetectionStrategy, Component } from '@angular/core';

type ValueProp = { icon: string; title: string; text: string };
type Feature = {
  icon: string;
  title: string;
  bullets: string[];
  img: string;
  alt: string;
};
type Plan = {
  name: string;
  tagline: string;
  price: string;
  bullets: string[];
  cta: string;
  link: string;
  emphasized?: boolean;
};
type Faq = { q: string; a: string };

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EcommerceComponent {
  readonly hero = {
    title: 'E-commerce & location sur mesure',
    subtitle:
      'Stripe, performance, SEO et back-office complet. Paniers, abonnements, location avec caution & durée.',
    img: 'assets/images/ecommerce-hero-checkout.jpg',
    alt: 'Tunnel de paiement e-commerce sur ordinateur portable',
  };

  readonly valueProps: ValueProp[] = [
    {
      icon: 'speed',
      title: 'Rapide & SEO',
      text: 'Core Web Vitals verts, pre-render, données structurées.',
    },
    {
      icon: 'verified_user',
      title: 'Fiable & sécurisé',
      text: 'Stripe, 3D Secure, webhooks idempotents, audit.',
    },
    {
      icon: 'dashboard_customize',
      title: 'Admin simple',
      text: 'Produits, stocks, commandes, retours, exports.',
    },
    {
      icon: 'devices',
      title: 'Responsive & adaptatif',
      text: 'Interface fluide qui s’adapte à tous les écrans, du mobile au desktop.',
    },
  ];

  readonly features: Feature[] = [
    {
      icon: 'shopping_cart',
      title: 'Catalogue, panier & paiement',
      bullets: [
        'Variantes, bundles, attributs personnalisés',
        'Codes promo, taxes, frais de port, factures PDF',
        'Stripe Card / Link / Apple Pay / Google Pay',
      ],
      img: 'assets/images/ecommerce-mobile-payment.jpg',
      alt: 'Paiement mobile sans contact',
    },
    {
      icon: 'work_outline',
      title: 'Location avec caution',
      bullets: [
        'Durée, dépôt de garantie, états & retours',
        'Rappels automatiques et contrats PDF',
        'Avoirs et remboursements partiels',
      ],
      img: 'assets/images/ecommerce-case-orders.jpg', // ← existante dans ton dossier
      alt: 'Préparation de commandes et emballage en entrepôt',
    },
    {
      icon: 'insights',
      title: 'Back-office & analytics',
      bullets: [
        'Dashboard CA, cohortes & conversion',
        'Rôles & permissions, logs webhooks',
        'Exports CSV/Excel, intégrations ERP/CRM',
      ],
      img: 'assets/images/ecommerce-admin-dashboard.jpg',
      alt: 'Tableau de bord d’administration e-commerce',
    },
  ];

  // --- Forfaits Développement ---
  readonly devPlans: Plan[] = [
    {
      name: 'Vitrine léger',
      tagline: 'Idéal micro-entreprise / projet perso',
      price: 'à partir de 590 €',
      bullets: [
        '1 à 3 pages (Accueil, Services, Contact)',
        'Design responsive mobile/tablette',
        'Formulaire de contact',
        'SEO de base (titres, métas)',
        'Mise en ligne incluse',
      ],
      cta: 'Demander un devis',
      link: '/contact',
    },
    {
      name: 'Vitrine Pro',
      tagline: 'Image soignée + contenu évolutif',
      price: 'à partir de 1 290 €',
      bullets: [
        'Jusqu’à 8 pages + Blog/Actus',
        'Performance & Core Web Vitals verts',
        'SEO on-page + données structurées',
        'Google Analytics / Search Console',
        'Support 1 mois inclus',
      ],
      cta: 'Demander un devis',
      link: '/contact',
      emphasized: true,
    },
    {
      name: 'E-commerce Starter',
      tagline: 'Vendre en ligne simplement',
      price: 'à partir de 2 490 €',
      bullets: [
        'Catalogue ≤ 100 produits',
        'Paiement Stripe (3D Secure)',
        'Gestion commandes & stocks',
        'Emails transactionnels',
        'RGPD & sécurité de base',
      ],
      cta: 'Demander un devis',
      link: '/contact',
    },
    {
      name: 'E-commerce Pro',
      tagline: 'Sur-mesure, prêt pour la croissance',
      price: 'à partir de 5 990 €',
      bullets: [
        'Catalogue étendu, variantes & promos',
        'Intégrations (transport, ERP/CRM)',
        'Tableau de bord admin personnalisé',
        'Optimisation performance & SEO',
        'Recette, tests & déploiement pro',
      ],
      cta: 'Parler du projet',
      link: '/contact',
    },
  ];

  // --- Forfaits Maintenance ---
  readonly maintenancePlans: Plan[] = [
    {
      name: 'Maintenance Essentielle',
      tagline: 'Pour garder le site stable et à jour',
      price: '49 €/mois',
      bullets: [
        'Sauvegardes mensuelles',
        'Mises à jour mineures (Angular, Flask)',
        'Surveillance uptime',
        'Corrections de bugs urgents',
      ],
      cta: 'Souscrire',
      link: '/contact',
    },
    {
      name: 'Maintenance Pro',
      tagline: 'Sécurité, performances et suivi continu',
      price: '99 €/mois',
      bullets: [
        'Sauvegardes hebdomadaires',
        'Mises à jour techniques & sécurité',
        'Monitoring & alertes de disponibilité',
        'Petites évolutions incluses (≤ 1h/mois)',
      ],
      cta: 'Souscrire',
      link: '/contact',
      emphasized: true,
    },
    {
      name: 'Maintenance Premium',
      tagline: 'Assistance prioritaire & évolutions régulières',
      price: '199 €/mois',
      bullets: [
        'Support prioritaire (sous 24h)',
        'Optimisations SEO & performance trimestrielles',
        'Mises à jour Angular/Flask majeures',
        'Évolutions fonctionnelles (≤ 3h/mois)',
      ],
      cta: 'Souscrire',
      link: '/contact',
    },
  ];

  readonly faq: Faq[] = [
    {
      q: 'Puis-je accepter Apple Pay / Google Pay ?',
      a: 'Oui, via Stripe (Payment Request API) lorsqu’il est supporté par le navigateur/appareil.',
    },
    {
      q: 'Gérez-vous la location avec caution ?',
      a: 'Oui : capture/libération, rappels, états et retours, avoirs et remboursements partiels.',
    },
    {
      q: 'Migration depuis Shopify / WooCommerce ?',
      a: 'Oui : import produits, clients & commandes, redirections SEO et reprise des paiements.',
    },
    {
      q: 'RGPD & conformité ?',
      a: 'Export/suppression des données, consentement cookies, journalisation et rôles/permissions.',
    },
  ];

  readonly caseStudy = {
    img: 'assets/images/ecommerce-case-orders.jpg',
    alt: 'Préparation de commandes dans des cartons',
    title: 'Cas “LocaBox” — e-commerce & location',
    bullets: [
      '+62% de conversion mobile en 3 mois',
      '2× plus rapide en préparation de commandes',
      'Incidents de paiement ÷10 grâce aux webhooks Stripe',
    ],
    link: '/projets',
  };

  readonly year = new Date().getFullYear();
}
