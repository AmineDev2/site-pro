import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageLightboxDialogComponent } from 'src/app/shared/image-lightbox-dialog/image-lightbox-dialog/image-lightbox-dialog.component';

type VProp = { icon: string; title: string; text: string };
type WorkItem = {
  icon: string;
  title: string;
  desc: string;
  bullets: string[];
  img: string;
  alt: string;
};
type ImgItem = { src: string; alt: string; caption: string };
type Faq = { q: string; a: string };

@Component({
  selector: 'app-apps-dashboards-page',
  templateUrl: './apps-dashboards-page.component.html',
  styleUrls: ['./apps-dashboards-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppsDashboardsPageComponent {
  constructor(private dialog: MatDialog) {}

  openImage(src: string, alt?: string, caption?: string) {
    this.dialog.open(ImageLightboxDialogComponent, {
      data: { src, alt, caption },
      panelClass: 'lightbox-panel',
      autoFocus: false,
      restoreFocus: true,
    });
  }

  // HERO
  readonly hero = {
    title: 'Dashboard “SalesPulse”',
    subtitle:
      'KPIs temps réel, filtres & vues sauvegardées, exports & PDF. Angular + Flask, RBAC, journaux d’audit & observabilité.',
    img: 'assets/images/salespulse-hero-laptop.jpg',
    alt: 'Dashboard KPI affiché sur un ordinateur portable',
  };

  // Points forts
  readonly valueProps: VProp[] = [
    {
      icon: 'speed',
      title: 'Performance',
      text: 'Lazy-loading, cache, Core Web Vitals maîtrisés.',
    },
    {
      icon: 'security',
      title: 'Sécurité',
      text: 'RBAC, audit trails, principes OWASP.',
    },
    {
      icon: 'tune',
      title: 'Exploration',
      text: 'Filtres multi-critères, vues enregistrées, partage.',
    },
  ];

  // Découpage du travail (tout visible)
  readonly work: WorkItem[] = [
    {
      icon: 'insights',
      title: 'KPIs & Charts',
      desc: 'Vue d’ensemble actionnable en un coup d’œil.',
      bullets: [
        'Cartes & tableaux dynamiques (bar/line/area)',
        'Comparaisons période + variations (%)',
        'Favoris & mise en avant des indicateurs clés',
        'Exports PNG/PDF des visuels',
      ],
      img: 'assets/images/salespulse-kpi-closeup.jpg',
      alt: 'Gros plan sur des courbes KPI',
    },
    {
      icon: 'tune',
      title: 'Filtres & Vues',
      desc: 'Exploration rapide, liens partageables.',
      bullets: [
        'Filtres multi-critères (date, segments, produits)',
        'Segments et vues sauvegardées par utilisateur',
        'Deep-linking (URL = état de la page)',
        'Temps de réponse < 200ms côté API (requêtes courantes)',
      ],
      img: 'assets/images/salespulse-filters-explore.jpg',
      alt: 'Écran d’exploration des données',
    },
    {
      icon: 'verified_user',
      title: 'RBAC & Audit',
      desc: 'Accès fin et conformité.',
      bullets: [
        'Rôles & permissions (RBAC)',
        'Masquage de champs sensibles',
        'Journaux d’accès & d’actions',
        'SSO OAuth2/OpenID Connect',
      ],
      img: 'assets/images/salespulse-monitoring.jpg',
      alt: 'Monitoring et journaux',
    },
    {
      icon: 'file_download',
      title: 'Exports & Automations',
      desc: 'Partage et planification.',
      bullets: [
        'Exports CSV/XLSX/PDF (mises en page soignées)',
        'Planification d’envoi e-mail récurrent',
        'Webhooks pour synchroniser d’autres apps',
        'Traçabilité des exports et destinataires',
      ],
      img: 'assets/images/salespulse-searchconsole.jpg',
      alt: 'Vue analytics orientée SEO',
    },
  ];

  // Galerie
  readonly gallery: ImgItem[] = [
    {
      src: 'assets/images/salespulse-hero-laptop.jpg',
      alt: 'Hero KPI',
      caption: 'Vue d’ensemble KPI',
    },
    {
      src: 'assets/images/salespulse-kpi-closeup.jpg',
      alt: 'Courbes KPI',
      caption: 'Détail des indicateurs',
    },
    {
      src: 'assets/images/salespulse-filters-explore.jpg',
      alt: 'Filtres',
      caption: 'Exploration & filtres',
    },
    {
      src: 'assets/images/salespulse-monitoring.jpg',
      alt: 'Monitoring',
      caption: 'Monitoring & audit',
    },
    {
      src: 'assets/images/salespulse-searchconsole.jpg',
      alt: 'SEO/Analytics',
      caption: 'Exports & partage',
    },
  ];

  // FAQ
  readonly faq: Faq[] = [
    {
      q: 'Tech ?',
      a: 'Angular (standalone, RxJS), Flask API, Postgres. Charts réactifs, PDF server-side.',
    },
    {
      q: 'Perf ?',
      a: 'Lighthouse 95+ (desktop), caching intelligent, chargement différé des gros modules.',
    },
    {
      q: 'Sécurité ?',
      a: 'RBAC, audit, CSP stricte, tokens courts + rotation.',
    },
  ];
}
