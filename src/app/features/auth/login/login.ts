import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html'
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private router: Router) {}

  seConnecter() {
    console.log('Tentative de connexion avec :', this.email);
    
    // Simulation de l'interceptor JWT / Gestion du Token
    if (this.email && this.password) {
      // On simule le stockage d'un Token JWT
      localStorage.setItem('token', 'fake-jwt-token-pour-demo');
      
      // On redirige vers le catalogue
      alert('Connexion réussie !');
      // Si tu as configuré le routing, on décommente la ligne suivante :
      // this.router.navigate(['/catalogue']);
    }
  }
}