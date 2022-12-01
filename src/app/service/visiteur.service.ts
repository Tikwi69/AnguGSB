import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Visiteur} from "../metier/visiteur";
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class VisiteurService {

  private headers= new Headers({'content-type': 'application/json'});
  private ClientUrl: string='a';

  constructor(private httpClient: HttpClient) {

    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });
  }

  getLogin(unV: Visiteur): Observable<any> {
    this.ClientUrl = environment.ENDPOINT + 'api/getConnexion';
    return this.httpClient.post(this.ClientUrl, JSON.stringify(unV));
  }

  private handleError (error:Response | any){
    let errMsg: string;
    if(error instanceof Response) {
      const body = error.json()|| '';
      const err= JSON.stringify(body);
      errMsg = "${error.status} - ${error.statusText || ''} ${err}";
    } else {
      errMsg = error.message ? error.message: error.toString();
    }
    console.error(errMsg);
    return Promise.reject(error.message || error);
  }
}
