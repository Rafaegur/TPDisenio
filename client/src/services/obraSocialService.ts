
import { ObraSocial } from '@/models/obraSocial.model';
import { API_URL } from '../utils/constants';

export const getObrasSociales = async () => {
  const response = await fetch(`https://localhost:7182/API/ObraSocial/GetObraSociales`);
  const obrasSociales = await response.json();

  console.log('obrasSociales: ', obrasSociales);

  
  const obrasSocialesArray = obrasSociales.map((obraSocial: any) => {
    return new ObraSocial(obraSocial.nombre);
  });
  
  return obrasSocialesArray;
};

