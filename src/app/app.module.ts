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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListefichefraisComponent,
    ConnexionComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    FichefraisService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
