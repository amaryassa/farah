import { Membre } from './membre.model';
export class Application {
  id: string;
  nom: string;
  besoin: Question[];
  architecte: Membre[];
}

export interface Question {
  question: string;
  reponse: string;
}
