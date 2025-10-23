import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav; // ← référence forte
  year = new Date().getFullYear();

  onMenuToggle() {
    // ← appelé par le header
    if (this.sidenav) this.sidenav.toggle();
  }
  onCloseSidenav() {
    // ← appelé par la sidebar
    if (this.sidenav) this.sidenav.close();
  }
}
