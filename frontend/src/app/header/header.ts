
import { Component, HostListener } from '@angular/core';
import { CommonModule, NgIf, NgFor, NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NgIf, NgFor, NgClass],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class Header {
  isAuthenticated = false;
  isScrolled = false;
  isMobileMenuOpen = false;
  activeDropdown: string | null = null;

  menuItems = [
    { label: 'Inicio', id: 'hero' },
    { 
      label: 'Quiénes Somos', 
      id: 'about',
      hasDropdown: true,
      submenu: [
        { label: 'Objeto Social', id: 'social-object' },
        { label: 'Misión', id: 'mission-vision' },
        { label: 'Visión', id: 'mission-vision' },
        { label: 'Valores Corporativos', id: 'values' }
      ]
    },
    { label: 'Servicios', id: 'services' },
    { label: 'Complementarios', id: 'complementary' },
    { label: 'Elegirnos', id: 'why-us' },
    { label: 'Compromiso', id: 'commitment' },
    { label: 'Contacto', id: 'contact' },
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.isMobileMenuOpen = false;
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  onLoginClick() {
    // Aquí puedes implementar la lógica de login o mostrar modal
  }

  onDashboardClick() {
    // Aquí puedes implementar la lógica para mostrar el dashboard
  }

  toggleDropdown(menuLabel: string) {
    this.activeDropdown = this.activeDropdown === menuLabel ? null : menuLabel;
  }

  closeDropdown() {
    this.activeDropdown = null;
  }

  isDropdownOpen(menuLabel: string): boolean {
    return this.activeDropdown === menuLabel;
  }
}
