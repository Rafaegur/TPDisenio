import { ObraSocial } from './obraSocial.model';
import { Odontologo } from './odontologo.model';

export class Lote {
  mes: number = 0;
  obraSocial: ObraSocial;
  cantidad: number = 0;
  odontontologo: Odontologo;
  bono: undefined;
  constructor(
    mes: number,
    obraSocial: ObraSocial,
    cantidad: number,
    odontontologo: Odontologo,
    bono: undefined
  ) {
    this.mes = mes;
    this.obraSocial = obraSocial;
    this.cantidad = cantidad;
    this.odontontologo = odontontologo;
    this.bono = bono;
  }
}
