import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  standalone: true,
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  isNavbarVisible = true;
  lastScrollPosition = 0;

  @HostListener('window:scroll')
  onScroll(): void {
    const currentScrollPosition = window.scrollY;

    if (currentScrollPosition > this.lastScrollPosition && currentScrollPosition > 100) {
      this.isNavbarVisible = false;
    } else if (currentScrollPosition < this.lastScrollPosition) {
      this.isNavbarVisible = true;
    }

    this.lastScrollPosition = currentScrollPosition;
  }
}
