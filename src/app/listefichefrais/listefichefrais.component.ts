import { Component, OnInit } from '@angular/core';
import {Fichefrais} from '../metier/fichefrais';
import {FichefraisService} from "../service/fichefrais.service";
import {Router} from '@angular/router';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-listefichefrais',
  templateUrl: './listefichefrais.component.html',
  styleUrls: ['./listefichefrais.component.css']
})
export class ListefichefraisComponent implements OnInit {

  public mesFrais: Fichefrais[]=[];
  private error: string="";
  private id: number=0;
  private titre: string="";
  private unFrais: Fichefrais=new Fichefrais();

  constructor( private unFS: FichefraisService, private unRouteur: Router) {
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Cache-Control' : 'no-cache'
    });
  }

  ngOnInit(): void {
    let item = localStorage.getItem('id');
    this.id = 1;
    this.titre = 'Liste des frais du visiteur ' + this.id;
    this.getFicheFraisListe(this.id);
  }

  getFicheFraisListe(id: number) : void {
    this.unFS.getFicheFraisListe(id).subscribe(
      (fichefrais) => {
        this.mesFrais = fichefrais;

      },
      (error) => {
        this.error = error.messages;
      }
    )
  }

  supprimer(unFrais:Fichefrais):void {
    this.unFS.deleteFrais(unFrais).subscribe(
      ()=>{

      },
      (error)=>{
        this.error=error.messages;
      }
    );
    if (this.error!='')
      alert("Erreur survenue : "+this.error)
    else
      alert("Suppression réussie ! ")
    this.unRouteur.navigate(['/accueil']);


  }

  modifier(id_frais: number) :void{
    this.unRouteur.navigate(['/modifierFrais/'+id_frais]);
  }

}
