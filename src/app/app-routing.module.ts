import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ListefichefraisComponent } from './listefichefrais/listefichefrais.component';
import { NavbarComponent } from './navbar/navbar.component';
import {ConnexionComponent} from "./connexion/connexion.component";
import {FichefraisComponent} from "./fichefrais/fichefrais.component";
import {AjoutFicheFraisComponent} from "./ajout-fiche-frais/ajout-fiche-frais.component";

const routes: Routes = [
  { path: '', redirectTo : '/connexion', pathMatch: 'full' },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'Listefichefrais', component : ListefichefraisComponent },
  { path: 'accueil', component : NavbarComponent },
  { path:'modifierFrais/:id', component : FichefraisComponent},
  { path:'ajouterFrais', component : AjoutFicheFraisComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
