import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  /** Passe true si l'utilisateur est admin (plus tard via un AuthService) */
  @Input() isAdmin = false;
  @Output() closeSidenav = new EventEmitter<void>();
  close() {
    this.closeSidenav.emit();
  }
}
