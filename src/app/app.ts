import {ChangeDetectionStrategy, Component, signal, afterNextRender, inject, DestroyRef} from '@angular/core';
import {RouterOutlet, Router, RouterLink, RouterLinkActive, NavigationEnd} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {CommonModule} from '@angular/common';
import {PORTFOLIO_DATA} from './portfolio.data';
import {animate} from 'motion';
import {filter} from 'rxjs/operators';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MatIconModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  router = inject(Router);
  destroyRef = inject(DestroyRef);
  data = signal(PORTFOLIO_DATA).asReadonly();
  isMenuOpen = signal(false);
  isDarkMode = signal(true);

  constructor() {
    afterNextRender(() => {
      // Ensure initial theme is applied
      if (!this.isDarkMode()) {
        document.documentElement.classList.add('light');
      } else {
        document.documentElement.classList.remove('light');
      }

      this.initAnimations();

      // Re-run animations on route change
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef)
      ).subscribe(() => {
        setTimeout(() => this.initAnimations(), 200);
      });
    });
  }

  initAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animate(
            entry.target,
            { opacity: [0, 1], y: [20, 0] },
            { duration: 0.8, ease: "easeOut" }
          );
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-item').forEach(el => observer.observe(el));
  }

  toggleTheme() {
    this.isDarkMode.update(v => !v);
    if (typeof document !== 'undefined') {
      if (this.isDarkMode()) {
        document.documentElement.classList.remove('light');
      } else {
        document.documentElement.classList.add('light');
      }
    }
  }

  scrollToSection(sectionId: string) {
    if (this.router.url !== '/home' && this.router.url !== '/') {
      this.router.navigate(['/home']).then(() => {
        this.executeScroll(sectionId);
      });
    } else {
      this.executeScroll(sectionId);
    }
  }

  private executeScroll(sectionId: string) {
    setTimeout(() => {
      if (typeof document !== 'undefined') {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 100);
  }

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }
}

