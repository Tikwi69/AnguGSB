import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListefichefraisComponent } from './listefichefrais/listefichefrais.component';
import { FichefraisService} from "./service/fichefrais.service";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { ConnexionComponent } from './connexion/connexion.component';
import {VisiteurService} from "./service/visiteur.service";
import {AjoutFicheFraisComponent} from "./ajout-fiche-frais/ajout-fiche-frais.component";
import {FichefraisComponent} from "./fichefrais/fichefrais.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListefichefraisComponent,
    ConnexionComponent,
    FichefraisComponent,
    AjoutFicheFraisComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    FichefraisService,
    VisiteurService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
