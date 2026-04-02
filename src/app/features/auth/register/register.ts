import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class RegisterComponent {
  nom = '';
  email = '';
  password = '';

  constructor(private router: Router) {}

  onRegister() {
    
    console.log('Inscription de :', this.nom, this.email);
    alert('Compte créé avec succès ! Connectez-vous maintenant.');
    this.router.navigate(['/login']); 
  }
}
