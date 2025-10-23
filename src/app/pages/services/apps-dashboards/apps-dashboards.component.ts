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
  selector: 'app-apps-dashboards',
  templateUrl: './apps-dashboards.component.html',
  styleUrls: ['./apps-dashboards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppsDashboardsComponent {
  readonly hero = {
    title: 'Apps & Dashboards sur mesure',
    subtitle:
      'SaaS, portails clients, reporting temps réel. Front Angular, API Flask, auth, rôles, exports et PDF.',
    img: 'assets/images/appsdash-hero-analytics.jpg',
    alt: 'Dashboard analytics affiché sur un ordinateur portable',
  };

  readonly valueProps: VProp[] = [
    {
      icon: 'speed',
      title: 'Rapide & scalable',
      text: 'Lazy-loading, cache, Core Web Vitals.',
    },
    {
      icon: 'security',
      title: 'Sécurisé',
      text: 'Auth, rôles, journaux, bonnes pratiques OWASP.',
    },
    {
      icon: 'integration_instructions',
      title: 'Connecté',
      text: 'Intégrations API, webhooks, S3, e-mailing.',
    },
  ];

  readonly features: Feature[] = [
    {
      icon: 'monitor_heart',
      title: 'Tableaux de bord',
      bullets: [
        'Graphiques & KPIs',
        'Filtres & sauvegarde de vues',
        'Exports CSV/PDF',
      ],
      img: 'assets/images/appsdash-laptop-graph.jpg',
      alt: 'Graphiques et tableau de bord sur un ordinateur portable',
    },
    {
      icon: 'groups',
      title: 'Portails & collaboration',
      bullets: [
        'Espace client',
        'Permissions fines',
        'Historique & commentaires',
      ],
      img: 'assets/images/appsdash-team-collab.jpg',
      alt: 'Équipe collaborant autour d’un ordinateur',
    },
    {
      icon: 'insights',
      title: 'Data & monitoring',
      bullets: ['Logs & traçabilité', 'Alertes', 'Dashboards temps réel'],
      img: 'assets/images/appsdash-data-screen.jpg',
      alt: 'Écran avec données et graphiques analytiques',
    },
  ];

  // --- Packs (tarifs attractifs)
  readonly plans: Plan[] = [
    {
      name: 'Starter Dashboard',
      price: 'à partir de 2 200 €',
      tagline: 'Tableau de bord clé en main',
      bullets: [
        'KPIs essentiels',
        'Filtres & export CSV/PDF',
        'Déploiement & formation',
      ],
      cta: 'Demander un devis',
      link: '/contact',
    },
    {
      name: 'Standard SaaS',
      price: '4 900 – 7 900 €',
      tagline: 'Portail client + rôles',
      bullets: [
        'Auth & permissions',
        'Espace client & historique',
        'Intégrations e-mail/analytics',
      ],
      cta: 'Voir des projets',
      link: '/projets',
      emphasized: true,
    },
    {
      name: 'Pro Data',
      price: 'sur devis',
      tagline: 'Temps réel & intégrations',
      bullets: [
        'Webhooks & files d’attente',
        'Alertes & monitoring',
        'Connecteurs ERP/CRM',
      ],
      cta: 'Parler du projet',
      link: '/contact',
    },
  ];

  // --- FAQ
  readonly faq: Faq[] = [
    {
      q: 'Quels délais typiques ?',
      a: 'Un dashboard Starter se livre en 2–3 semaines. Un portail Standard en 4–8 semaines selon les intégrations.',
    },
    {
      q: 'Pouvez-vous faire du temps réel ?',
      a: 'Oui : rafraîchissement périodique, websockets ou polling optimisé suivant les besoins et l’infra.',
    },
    {
      q: 'SSO / Auth avancée ?',
      a: 'Oui : JWT, rotation de tokens, RBAC, SSO (OAuth2/OpenID Connect) selon votre fournisseur.',
    },
    {
      q: 'RGPD et sécurité ?',
      a: 'Journalisation des accès, rôles/permissions, export/suppression des données, politiques CSP & cookies.',
    },
    {
      q: 'Hébergement & maintenance ?',
      a: 'Hébergement sur votre compte (AWS/GCP/OVH) ou le vôtre. Support mensuel en option (49€/99€/149€ selon niveau).',
    },
  ];
}
