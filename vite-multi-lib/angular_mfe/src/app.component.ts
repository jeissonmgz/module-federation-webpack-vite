import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { navigateShell } from './NavigateShell';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  template: `
    <h1>Angular + vite</h1>
    <button (click)="goToShellHome()">Ir al Home de la shell</button>
    <a
      routerLink="/angular"
      href="#"
      class="text-xl font-bold no-underline hover:underline ..."
      >Home Angular |
    </a>
    <a
      routerLink="/angular/about"
      href="#"
      class="text-xl font-bold no-underline hover:underline ..."
      >About us</a
    >
    <hr />
    <router-outlet></router-outlet>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {

  goToShellHome() {
    navigateShell('/');
  }
}
