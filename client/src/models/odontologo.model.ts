export class Odontologo {
  id: number = 0;
  nombre: string = '';
  apellido: string = '';
  matricula: string = '';
  dni: string = '';

  constructor(
    id: number,
    nombre: string,
    apellido: string,
    matricula: string,
    dni: string
  ) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.matricula = matricula;
    this.dni = dni;
  }
}
