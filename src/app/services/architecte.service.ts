import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ArchitecteService {
  architectes = [
    { id: '1', nom: 'yassa', prenom: 'amar', email: 'amaryassa@amaryassa.fr' },

    { id: '2', nom: 'mahrez', prenom: 'farah', email: 'farah@farah.fr' },
    { id: '3', nom: 'jsk', prenom: 'imazighen', email: 'jsk@jsk.fr' },
  ];

  constructor() {}
}
