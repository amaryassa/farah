import { Collecte } from './../models/collecte.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CollecteService {
  constructor(private http: HttpClient) {}

  /*  getCollectes(): Observable<Collecte[]> {
    return this.http
      .get<Collecte[]>('http://localhost:8083/collectes')
  }

    getCollecte(id): Observable<Collecte> {
    return this.http
      .get<Collecte>('http://localhost:8083/collecte/'+id)
  }  */

  /*  une fois que tu mets ton backend, décommente le
  code ci-dessus et efface tout ce qui est ci-dessous
  en changeant biensur l'url ton ton server
  */

  collectes: Collecte[] = [
    {
      id: '1',
      nom: 'devops',
      status: 'en cours',
      architecte: {
        id: '1',
        nom: 'yassa',
        prenom: 'amar',
        email: 'amaryassa@amaryassa.fr',
      },
      dateDebut: new Date(),
      projets: [],
    },
    {
      id: '2',
      nom: 'refont',
      status: 'terminer',
      architecte: {
        id: '1',
        nom: 'yassa',
        prenom: 'amar',
        email: 'amaryassa@amaryassa.fr',
      },
      dateDebut: new Date(),
      projets: [],
    },

    {
      id: '3',
      nom: 'test',
      status: 'terminer',
      architecte: {
        id: '2',
        nom: 'mahrez',
        prenom: 'farah',
        email: 'farah@farah.fr',
      },
      dateDebut: new Date(),
      projets: [],
    },
  ];

  getCollectes(): Observable<Collecte[]> {
    return new Observable((observer) => {
      observer.next(this.collectes);
      observer.complete();
    });
  }

  getCollecte(id): Observable<Collecte> {
    const collecteElement = this.collectes.filter((collecte) => {
      return collecte.id == id;
    });
    console.log('collecteElement', collecteElement);
    return new Observable((observer) => {
      observer.next(collecteElement[0]);
      observer.complete();
    });
  }
}
