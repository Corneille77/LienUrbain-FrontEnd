import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Announcement {
  id: number;
  title: string;
  description: string;
  category: string;
  status: string;
  createdAt: string;
  user: number | null;
}

@Injectable({
  providedIn: 'root'
})
export class AnnoncesService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8000/api/announcements';

  getAll(): Observable<Announcement[]> {
    return this.http.get<Announcement[]>(this.apiUrl);
  }
}
