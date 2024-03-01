
import { ObraSocial } from '@/models/obraSocial.model';
import { API_URL } from '../utils/constants';

export const getObrasSociales = async () => {
  const response = await fetch(`${API_URL}/API/ObraSocial/GetObraSociales`);
  const obrasSociales = await response.json();
  const obrasSocialesArray = obrasSociales.map((obraSocial: {id: number, nombre: string}) => {
    return new ObraSocial(obraSocial.id, obraSocial.nombre);
  });
  
  return obrasSocialesArray;
};

