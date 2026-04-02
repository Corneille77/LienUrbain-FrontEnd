import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-catalogue',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './catalogue.html',
  styleUrl: './catalogue.scss'
})
export class CatalogueComponent {
  recherche: string = '';
  
 
  nouvelleAnnonce = {
    titre: '',
    description: '',
    auteur: 'Moi',
    categorie: 'Service',
    couleur: 'primary'
  };

  // Ta liste de cartes
  annoncesData = [
    { titre: 'Aide aux courses', description: 'Je propose mon aide pour faire les courses au supermarché.', auteur: 'Jean-Marc', categorie: 'Service', couleur: 'primary' },
    { titre: 'Cours de guitare', description: 'Initiation à la guitare acoustique pour débutants.', auteur: 'Sarah', categorie: 'Loisir', couleur: 'success' },
    { titre: 'Garde de chat', description: 'Je m\'occupe de vos boules de poils pendant vos vacances.', auteur: 'Élodie', categorie: 'Animaux', couleur: 'warning' }
  ];

  
  ajouterAnnonce() {
    if (this.nouvelleAnnonce.titre && this.nouvelleAnnonce.description) {
      const couleurs: any = { 'Service': 'primary', 'Loisir': 'success', 'Animaux': 'warning' };
      this.nouvelleAnnonce.couleur = couleurs[this.nouvelleAnnonce.categorie] || 'secondary';
      
      this.annoncesData.unshift({ ...this.nouvelleAnnonce });
      
   
      this.nouvelleAnnonce.titre = '';
      this.nouvelleAnnonce.description = '';
    }
  }

  
  get annonces() {
    return this.annoncesData.filter(item => 
      item.titre.toLowerCase().includes(this.recherche.toLowerCase()) ||
      item.categorie.toLowerCase().includes(this.recherche.toLowerCase())
    );
  }
}