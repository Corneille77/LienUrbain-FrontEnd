import { Routes } from '@angular/router';
import { CatalogueComponent } from './features/annonces/catalogue/catalogue';
import { LoginComponent } from './features/auth/login/login';
import { ProfilComponent } from './features/profil/mon-profil/mon-profil';
import { RegisterComponent } from './features/auth/register/register';
import { authGuard } from './auth.guard'; // Import de la guard

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'catalogue', component: CatalogueComponent },
  { path: 'profil', component: ProfilComponent, canActivate: [authGuard] }, // Route protégée
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];