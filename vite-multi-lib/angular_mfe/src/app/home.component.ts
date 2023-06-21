import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { navigateShell } from '../NavigateShell';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `<h2>Home</h2>
  <table>
    <thead>
      <tr>
        <th>Page</th>
        <th>Vue</th>
        <th>React</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Home</td>
        <td><button (click)="goToVueHome()">Ir a Vue:Home</button></td>
        <td><button (click)="goToReactHome()">Ir a React:Home</button></td>
      </tr>
      <tr>
        <td>About</td>
        <td><button (click)="goToVueAbout()">Ir a Vue:About</button></td>
        <td><button (click)="goToReactAbout()">Ir a React:About</button></td>
      </tr>
    </tbody>
  </table>
  `,
})
export class HomeComponent {
  goToVueHome() {
    navigateShell('/vue')
  }
  goToVueAbout() {
    navigateShell('/vue/about')
  }
  goToReactHome() {
    navigateShell('/react')
  }
  goToReactAbout() {
    navigateShell('/react/about')
  }
}
