import { ObraSocial } from '@/models/obraSocial.model';

export const getObrasSociales = async () => {
  const response = await fetch('/api/obraSocial');
  const obrasSociales = await response.json();

  const obrasSocialesArray = obrasSociales.map((obraSocial: any) => {
    return new ObraSocial(obraSocial.nombre);
  });

  return obrasSocialesArray;
};
