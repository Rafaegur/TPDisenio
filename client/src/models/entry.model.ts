import { ObraSocial } from "./obraSocial.model";

export class Entry {
    obraSocial: ObraSocial;
    cantidad: number;
    constructor(obraSoc: ObraSocial, cant: number){
      this.obraSocial = obraSoc;
      this.cantidad = cant;
    }
  }
  