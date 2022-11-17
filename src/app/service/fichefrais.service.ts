import {Injectable} from "@angular/core";
import {Fichefrais} from "../metier/fichefrais";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class FicheFraisService {

  private headers = new Headers({'content-type': 'application/json'});
  private ClientUrl: string;

  private unFrais: Fichefrais;

  constructor(private httpClient: HttpClient) {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });
  }

  getFicheFraisListe(id: number): Observable<any> {
    this.ClientUrl = ENDPOINT + 'api/frais/listefrais/' + id;
    return this.httpClient.get(this.ClientUrl);
  }
}
