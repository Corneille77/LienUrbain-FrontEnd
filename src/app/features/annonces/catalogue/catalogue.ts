import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AnnoncesService, Announcement } from '../annonces.service';

@Component({
  selector: 'app-catalogue',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './catalogue.html',
  styleUrl: './catalogue.scss'
})
export class CatalogueComponent implements OnInit {
  private annoncesService = inject(AnnoncesService);

  recherche: string = '';
  annoncesData: Announcement[] = [];

  ngOnInit(): void {
    this.annoncesService.getAll().subscribe({
      next: (data) => {
        this.annoncesData = data;
        console.log('Annonces récupérées :', data);
      },
      error: (err) => {
        console.error('Erreur API :', err);
      }
    });
  }

  get annonces() {
    return this.annoncesData.filter(item =>
      item.title.toLowerCase().includes(this.recherche.toLowerCase()) ||
      item.category.toLowerCase().includes(this.recherche.toLowerCase())
    );
  }
}