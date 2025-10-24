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
  selector: 'app-ecommerce-page',
  templateUrl: './ecommerce-page.component.html',
  styleUrls: ['./ecommerce-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EcommercePageComponent {
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
    title: 'Projet e-commerce “FKDress”',
    subtitle:
      'Boutique performante (achat + location), checkout sécurisé Stripe 3DS, back-office simple, SEO & UX mobile.',
    img: 'assets/images/ecom-home-hero.jpg',
    alt: 'Page d’accueil FKDress avec call-to-action',
  };

  // Value props (cartes visibles)
  readonly valueProps: VProp[] = [
    {
      icon: 'speed',
      title: 'Rapide & SEO',
      text: 'Core Web Vitals verts, pré-rendu, données structurées.',
    },
    {
      icon: 'verified_user',
      title: 'Paiement sécurisé',
      text: 'Stripe 3D Secure, remboursements, webhooks idempotents.',
    },
    {
      icon: 'dashboard_customize',
      title: 'Admin simple',
      text: 'Produits, stocks, commandes, RDV location.',
    },
    {
      icon: 'devices',
      title: 'Responsive',
      text: 'UX fluide du mobile au desktop.',
    },
  ];

  // Découpage du travail (TOUT VISIBLE)
  readonly work: WorkItem[] = [
    {
      icon: 'view_module',
      title: 'Catalogue & filtres',
      desc: 'Listing combinant vente et location + filtres multi-critères.',
      bullets: [
        'Filtrage par type, catégories, couleurs, disponibilité',
        'Tri (nouveautés, prix loc/vente ↑/↓)',
        'Vignettes avec mini-carousel, tailles, prix loc & vente',
        'Recherche instantanée et URL paramétrée (SEO)',
      ],
      img: 'assets/images/ecom-catalogue-listing.jpg',
      alt: 'Catalogue avec filtres et cartes produits',
    },
    {
      icon: 'shopping_bag',
      title: 'Fiche produit & achat',
      desc: 'Variantes, tailles, quantité, tarif vente et UX claire.',
      bullets: [
        'Sélecteurs de tailles avec états (dispo, indispo)',
        'Panier persistant, validation front/back',
        'Payement Stripe Payment Element (3DS)',
        'Blocs réassurance (livraison, qualité, retours)',
      ],
      img: 'assets/images/ecom-product-purchase.jpg',
      alt: 'Fiche produit avec achat',
    },
    {
      icon: 'event_available',
      title: 'Location & RDV',
      desc: 'Réservation de créneaux et gestion d’indisponibilités.',
      bullets: [
        'Durées de location configurables',
        'Créneaux par type (1 personne, groupe)',
        'Messages d’indisponibilité + suggestions de dates',
        'Calcul du total (acompte, solde, options)',
      ],
      img: 'assets/images/ecom-rental-booking.jpg',
      alt: 'Page location avec calendrier de rendez-vous',
    },
    {
      icon: 'admin_panel_settings',
      title: 'Back-office & menu admin',
      desc: 'Gestion des données + navigation claire par domaines.',
      bullets: [
        'Sections : Users, Articles, Tailles, Catégories, Commandes, RDV',
        'Rôles & permissions (RBAC)',
        'Design sobre et cohérent avec le front',
        'Actions rapides (ajout, édition, suppression)',
      ],
      img: 'assets/images/ecom-admin-menu.jpg',
      alt: 'Menu latéral Admin avec les sections',
    },
    {
      icon: 'table_view',
      title: 'Admin des articles',
      desc: 'Tableau de gestion performant et lisible.',
      bullets: [
        'Tri, recherche, pagination',
        'Colonnes clés : prix loc/vente, stock, tailles, dispo',
        'Badges de statut et actions (éditer/supprimer)',
        'Export CSV/PDF (option)',
      ],
      img: 'assets/images/ecom-admin-articles.jpg',
      alt: 'Liste des articles en back-office',
    },
    {
      icon: 'person',
      title: 'Espace compte client',
      desc: 'Profil, commandes, locations et RDV.',
      bullets: [
        'Données personnelles, téléphone, adresse',
        'Historique commandes & locations',
        'Onglets : Données, Commandes, Locations, RDV',
        'Suppression de compte & gestion RGPD',
      ],
      img: 'assets/images/ecom-account-profile.jpg',
      alt: 'Compte client avec onglets et formulaire',
    },
  ];

  // Galerie (aperçus)
  readonly gallery: ImgItem[] = [
    {
      src: 'assets/images/ecom-home-hero.jpg',
      alt: 'Accueil',
      caption: 'Accueil & USP',
    },
    {
      src: 'assets/images/ecom-catalogue-listing.jpg',
      alt: 'Catalogue',
      caption: 'Catalogue & filtres',
    },
    {
      src: 'assets/images/ecom-product-purchase.jpg',
      alt: 'Achat',
      caption: 'Fiche produit & achat',
    },
    {
      src: 'assets/images/ecom-rental-booking.jpg',
      alt: 'Location',
      caption: 'Location & RDV',
    },
    {
      src: 'assets/images/ecom-admin-articles.jpg',
      alt: 'Admin articles',
      caption: 'Admin — articles',
    },
    {
      src: 'assets/images/ecom-account-profile.jpg',
      alt: 'Compte',
      caption: 'Espace compte',
    },
  ];

  // FAQ courte
  readonly faq: Faq[] = [
    {
      q: 'Paiement ?',
      a: 'Stripe 3D Secure (cartes, Apple/Google Pay), remboursements, coupons.',
    },
    {
      q: 'SEO & perfs ?',
      a: 'Données structurées, images optimisées, compositeur de pages, Lighthouse 90+.',
    },
    {
      q: 'Back-office ?',
      a: 'CRUD complet, rôles & permissions, exports CSV/PDF, filtres & recherche.',
    },
  ];
}
