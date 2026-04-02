import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mon-profil.html' 
})
export class ProfilComponent { 
  utilisateur = {
    nom: 'Voisin Test',
    email: 'test@lienurbain.fr'
  };
}
