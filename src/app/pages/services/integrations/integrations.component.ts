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

@Component({
  selector: 'app-integrations',
  templateUrl: './integrations.component.html',
  styleUrls: ['./integrations.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IntegrationsComponent {
  readonly hero = {
    title: 'Intégrations & API',
    subtitle:
      'Stripe, S3, e-mails, webhooks fiables, files d’attente et connecteurs ERP/CRM. Sécurité et observabilité incluses.',
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
      text: 'Logs, corrélation, alertes et dashboards.',
    },
  ];

  readonly features: Feature[] = [
    {
      icon: 'payments',
      title: 'Paiements Stripe',
      bullets: [
        'Cartes / Apple Pay / Google Pay',
        'Webhooks signés & idempotents',
        'Remboursements, abonnements, coupons',
      ],
      img: 'assets/images/integrations-stripe-terminal.jpg',
      alt: 'Paiement sans contact sur terminal',
    },
    {
      icon: 'cloud_upload',
      title: 'Stockage & fichiers (S3)',
      bullets: [
        'Upload signé, ACL, lifecycle',
        'Génération de PDF / images',
        'CDN & liens temporaires',
      ],
      img: 'assets/images/integrations-s3-buckets.jpg',
      alt: 'Baies de serveurs et stockage',
    },
    {
      icon: 'hub',
      title: 'Webhooks & automatisations',
      bullets: [
        'Files d’attente & retries',
        'Alertes & monitoring',
        'Connecteurs ERP/CRM',
      ],
      img: 'assets/images/integrations-webhooks-dashboard.jpg',
      alt: 'Dashboard de suivi en temps réel',
    },
  ];

  readonly plans: Plan[] = [
    {
      name: 'Starter Integration',
      price: 'à partir de 1 400 €',
      tagline: '1 connecteur (ex. Stripe) prêt à l’emploi',
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
      price: '3 500 – 5 500 €',
      tagline: '2–3 connecteurs + back-office',
      bullets: [
        'Webhooks idempotents',
        'Exports/Imports',
        'Observabilité & alertes',
      ],
      cta: 'Voir des projets',
      link: '/projets',
      emphasized: true,
    },
    {
      name: 'Pro Automation',
      price: 'sur devis',
      tagline: 'Workflows, files & intégrations avancées',
      bullets: [
        'Queues & retry policies',
        'Connecteurs ERP/CRM',
        'SLOs & monitoring',
      ],
      cta: 'Parler du projet',
      link: '/contact',
    },
  ];

  readonly faq: Faq[] = [
    {
      q: 'Gérez-vous les clés et la sécurité ?',
      a: 'Oui : clés côté serveur, signatures de webhooks, idempotence, secrets en coffre (env/secret manager).',
    },
    {
      q: 'Et si un webhook tombe en échec ?',
      a: 'Mise en file, retries exponentiels, alerte et journalisation pour rejouer en toute sécurité.',
    },
    {
      q: 'Peut-on exposer une API publique ?',
      a: 'Oui : endpoints REST/GraphQL, quotas, rate-limit, auth (JWT / OAuth2), documentation.',
    },
    {
      q: 'Migration depuis un service tiers ?',
      a: 'Oui : reprise de données, mapping de schémas, redirections/compat et tests de non-régression.',
    },
    {
      q: 'Maintenance ?',
      a: 'Support mensuel en option (49€/99€/149€) pour mises à jour, surveillance et petits correctifs.',
    },
  ];
}
