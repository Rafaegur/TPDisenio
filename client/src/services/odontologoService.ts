import { Odontologo } from '@/models/odontologo.model';

export const getOdontologos = async () => {
  const response = await fetch('https://localhost:7182/API/Odontologo/GetOdontologos');
  const odontologos = await response.json();

  const odontologosArray = odontologos.map((odontologo: any) => {
    return new Odontologo(
      odontologo.id,
      odontologo.nombre,
      odontologo.apellido,
      odontologo.matricula,
      odontologo.dni
    );
  });

  return odontologosArray;
};
