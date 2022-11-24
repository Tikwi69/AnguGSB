import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ListefichefraisComponent } from './listefichefrais/listefichefrais.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  { path: '', redirectTo : '/connexion', pathMatch: 'full' },
  { path: 'Listefichefrais', component : ListefichefraisComponent },
  { path: 'accueil', component : NavbarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
