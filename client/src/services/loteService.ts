import { API_URL } from '../utils/constants';

export interface ILote {
  id: number,
  mes: number,
  cantidad: number,
  odontologoId: number,
  odontologo: {
    id: number,
    matricula: number,
    nombre: string,
    apellido: string,
    dni: number
  }
  obraSocialId: number
  obraSocial: {
    id: number,
    nombre: string
  }
}

export const saveLote = async (lote: ILote) => {
  try {
    const response = await fetch(`${API_URL}/API/Lote/PostLotes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        
      },
      body: JSON.stringify(lote)
    });

    if (!response.ok) {
      throw new Error('Failed to save lote.');
    }
    return null;

  } catch (error) {
    console.error('Error saving lote:', error);
    throw error;
  }
};