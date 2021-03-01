import { Architecte } from './architecte.model';

export class Collecte {
  id: string;
  nom: string;
  status: string;
  architecte: Architecte;
  dateDebut: Date;
}
