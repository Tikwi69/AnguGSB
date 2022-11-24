import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListefichefraisComponent } from './listefichefrais/listefichefrais.component';
import { FicheFraisService} from "./service/fichefrais.service";
import { Fichefrais} from "./metier/fichefrais";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListefichefraisComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    FicheFraisService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
