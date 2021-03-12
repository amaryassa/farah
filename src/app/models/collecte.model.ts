import { Membre } from './membre.model';
import { Application } from './application.model';

export class Collecte {
  id: string;
  nom: string;
  status: string;
  architecte: Membre;
  dateDebut: Date;
  projets: Application[];
}
