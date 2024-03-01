import React,{ useState, useEffect } from 'react'; 
import { ObraSocial } from '@/models/obraSocial.model';
import axios from "axios";

export const getObrasSociales = async () => {
  const response = await fetch('/api/obraSocial');
  const obrasSociales = await response.json();

  const obrasSocialesArray = obrasSociales.map((obraSocial: any) => {
    return new ObraSocial(obraSocial.nombre);
  });

  return obrasSocialesArray;
};



const API_URL = "https://localhost:7182";

export async function GetMotivos() {
  try {
    const response = await axios.get(`${API_URL}/API/ObraSocial/GetObraSociales`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

