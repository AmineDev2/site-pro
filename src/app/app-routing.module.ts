import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AproposComponent } from './pages/apropos/apropos.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MentionsLegalesComponent } from './pages/mentions-legales/mentions-legales.component';

// Projets (index + 3 pages)
import { ProjectsComponent } from './pages/projects/projects.component';
import { EcommercePageComponent } from './pages/projects/ecommerce-page/ecommerce-page.component';
import { AppsDashboardsPageComponent } from './pages/projects/apps-dashboards-page/apps-dashboards-page.component';
import { IntegrationsPageComponent } from './pages/projects/integrations-page/integrations-page.component';

// Services
import { AppsDashboardsComponent } from './pages/services/apps-dashboards/apps-dashboards.component';
import { EcommerceComponent } from './pages/services/ecommerce/ecommerce.component';
import { IntegrationsComponent } from './pages/services/integrations/integrations.component';

const routes: Routes = [
  // Accueil
  { path: '', component: HomeComponent, title: 'Accueil' },
  { path: 'home', component: HomeComponent, title: 'Accueil' },

  // Projets (index + pages détaillées)
  { path: 'projets', component: ProjectsComponent, title: 'Projets' },
  {
    path: 'projets/ecommerce',
    component: EcommercePageComponent,
    title: 'Projet · E-commerce « LumiShop »',
  },
  {
    path: 'projets/apps-dashboards',
    component: AppsDashboardsPageComponent,
    title: 'Projet · Apps & Dashboards « SalesPulse »',
  },
  // {
  //   path: 'projets/integrations-api',
  //   component: IntegrationsPageComponent,
  //   title: 'Projet · Intégrations & API « OpsBridge »',
  // },

  // Services
  {
    path: 'services/ecommerce',
    component: EcommerceComponent,
    title: 'Services · E-commerce',
  },
  {
    path: 'services/apps-dashboards',
    component: AppsDashboardsComponent,
    title: 'Services · Apps & Dashboards',
  },
  {
    path: 'services/integrations',
    component: IntegrationsComponent,
    title: 'Services · Intégrations & API',
  },

  // Contact / À propos / Légal
  { path: 'contact', component: ContactComponent, title: 'Contact' },
  { path: 'apropos', component: AproposComponent, title: 'À propos' },
  {
    path: 'mentions-legales',
    component: MentionsLegalesComponent,
    title: 'Mentions légales',
  },

  // Fallback
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
