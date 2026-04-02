import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm mb-4 py-3">
      <div class="container">
        <a class="navbar-brand fw-bold" routerLink="/catalogue">🏙️ Lien Urbain</a>
        
        <div class="d-flex align-items-center">
          <a class="btn btn-link text-white text-decoration-none me-3" 
             routerLink="/catalogue" routerLinkActive="fw-bold">Catalogue</a>
          
          <a class="btn btn-outline-light rounded-pill px-3" 
             routerLink="/login" routerLinkActive="active">Connexion</a>
             
          <a class="btn btn-outline-light rounded-pill px-3 ms-2" 
             routerLink="/profil" routerLinkActive="active">👤 Mon Profil</a>
        </div>
      </div>
    </nav>

    <div class="container pb-5">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {}