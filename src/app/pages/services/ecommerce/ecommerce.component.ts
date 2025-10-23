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
  price: string;
  tagline: string;
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

  readonly plans: Plan[] = [
    {
      name: 'Starter',
      price: 'à partir de 2 900€',
      tagline: 'Vitrine + checkout Stripe',
      bullets: [
        'Produits simples',
        'Pages essentielles',
        'Déploiement & formation',
      ],
      cta: 'Demander un devis',
      link: '/contact',
    },
    {
      name: 'Boutique',
      price: '6 900 – 12 000€',
      tagline: 'Catalogue complet & back-office',
      bullets: ['Variantes & promos', 'Stocks & commandes', 'SEO & analytics'],
      cta: 'Voir des projets',
      link: '/projets',
      emphasized: true,
    },
    {
      name: 'Pro Location',
      price: 'sur devis',
      tagline: 'Caution, retours, workflow',
      bullets: [
        'Caution & contrats',
        'Retours & avoirs',
        'Intégrations avancées',
      ],
      cta: 'Parler du projet',
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
