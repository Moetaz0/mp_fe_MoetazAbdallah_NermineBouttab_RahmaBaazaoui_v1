import { Reglement } from "../reglement/reglement";
import { Facture } from "./facture";

export class ReglementFacture {
  idrf: any;
  facture: Facture;
  reglement: Reglement;
  mp: number;

  constructor() {
    this.facture = new Facture();
    this.reglement = new Reglement();
    this.mp = 0; // Initialize mp to some default value, or set it based on your requirements
  }
}