import { ChangeDetectionStrategy, Component } from '@angular/core';

type VProp = { icon: string; title: string; text: string };
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
type ImgItem = { src: string; alt: string; caption: string };

@Component({
  selector: 'app-integrations-page',
  templateUrl: './integrations-page.component.html',
  styleUrls: ['./integrations-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IntegrationsPageComponent {
  readonly hero = {
    title: 'Projet Intégrations & API “OpsBridge”',
    subtitle:
      'Stripe, S3, e-mails, webhooks idempotents, files d’attente et connecteurs ERP/CRM. Sécurité & observabilité.',
    img: 'assets/images/integrations-hero-connectors.jpg',
    alt: 'Visualisation de connexions entre services',
  };

  readonly valueProps: VProp[] = [
    {
      icon: 'link',
      title: 'Connecté',
      text: 'Stripe, S3, Mailer, Slack, Google, etc.',
    },
    {
      icon: 'shield',
      title: 'Sécurisé',
      text: 'Clés serveur, signatures, idempotence, retries.',
    },
    {
      icon: 'visibility',
      title: 'Traçable',
      text: 'Logs, corrélation, alertes & dashboards.',
    },
  ];

  readonly features: Feature[] = [
    {
      icon: 'payments',
      title: 'Paiements Stripe',
      bullets: [
        'Apple Pay / Google Pay',
        'Webhooks signés & idempotents',
        'Remboursements & abonnements',
      ],
      img: 'assets/images/integrations-stripe-terminal.jpg',
      alt: 'Paiement sans contact sur terminal',
    },
    {
      icon: 'cloud_upload',
      title: 'Stockage & fichiers (S3)',
      bullets: [
        'Upload signé, ACL, lifecycle',
        'Génération de PDF/images',
        'CDN & liens temporaires',
      ],
      img: 'assets/images/integrations-s3-buckets.jpg',
      alt: 'Baies de serveurs et stockage',
    },
    {
      icon: 'hub',
      title: 'Webhooks & automatisations',
      bullets: [
        'Files & retries exponentiels',
        'Alertes & monitoring',
        'Connecteurs ERP/CRM',
      ],
      img: 'assets/images/integrations-webhooks-dashboard.jpg',
      alt: 'Dashboard de suivi en temps réel',
    },
  ];

  readonly gallery: ImgItem[] = [
    {
      src: 'assets/images/integrations-stripe-terminal.jpg',
      alt: 'Stripe Terminal',
      caption: 'Paiements Stripe & conformité',
    },
    {
      src: 'assets/images/integrations-s3-buckets.jpg',
      alt: 'Stockage S3',
      caption: 'Stockage & génération de documents',
    },
    {
      src: 'assets/images/integrations-webhooks-dashboard.jpg',
      alt: 'Webhooks monitoring',
      caption: 'Webhooks, files & monitoring',
    },
  ];

  readonly devPlans: Plan[] = [
    {
      name: 'Starter Integration',
      price: 'à partir de 990 €',
      tagline: '1 connecteur prêt à l’emploi',
      bullets: [
        'Implémentation sécurisée',
        'Dashboard minimal de logs',
        'Déploiement & doc rapide',
      ],
      cta: 'Demander un devis',
      link: '/contact',
    },
    {
      name: 'Standard Connect',
      price: '2 900 – 4 900 €',
      tagline: '2–3 connecteurs + back-office',
      bullets: [
        'Webhooks idempotents',
        'Exports / Imports',
        'Observabilité & alertes',
      ],
      cta: 'Voir des projets',
      link: '/projets',
      emphasized: true,
    },
    {
      name: 'Pro Automation',
      price: 'sur devis (dès 6 900 €)',
      tagline: 'Workflows & intégrations avancées',
      bullets: [
        'Queues & retry policies',
        'Connecteurs ERP/CRM',
        'SLOs & monitoring',
      ],
      cta: 'Parler du projet',
      link: '/contact',
    },
  ];

  readonly maintenancePlans: Plan[] = [
    {
      name: 'Maintenance Essentielle',
      price: '49 €/mois',
      tagline: 'Mises à jour & stabilité',
      bullets: [
        'Sauvegardes mensuelles',
        'Patches sécurité mineurs',
        'Surveillance uptime',
        'Hotfix urgents',
      ],
      cta: 'Souscrire',
      link: '/contact',
    },
    {
      name: 'Maintenance Pro',
      price: '99 €/mois',
      tagline: 'Sécurité + petites évolutions',
      bullets: [
        'MAJ régulières',
        'Monitoring & alertes',
        'Évolutions incluses (≤ 1h/mois)',
      ],
      cta: 'Souscrire',
      link: '/contact',
      emphasized: true,
    },
    {
      name: 'Maintenance Premium',
      price: '149 €/mois',
      tagline: 'Prioritaire & optimisation continue',
      bullets: [
        'Support prioritaire',
        'Optimisations trimestrielles',
        'MAJ majeures & audits',
      ],
      cta: 'Souscrire',
      link: '/contact',
    },
  ];

  readonly faq: Faq[] = [
    {
      q: 'Clés & sécurité ?',
      a: 'Clés côté serveur, signatures de webhooks, idempotence, secrets en coffre.',
    },
    {
      q: 'Gestion des erreurs ?',
      a: 'Files d’attente, retries exponentiels, alertes, rejouabilité contrôlée.',
    },
    {
      q: 'API publique ?',
      a: 'Endpoints REST/GraphQL, quotas, rate-limit, JWT / OAuth2, documentation.',
    },
  ];
}
