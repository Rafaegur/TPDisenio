'use client';

import closeSvg from '../../../public/x-symbol-svgrepo-com.svg';
import newItemSvg from '../../../public/new-svgrepo-com.svg';
import Image from 'next/image';
import { Entry } from '@/models/entry.model';
import { SelectAndCreate } from '@/components/selectAndCreate/SelectAndCreate';
import { useEffect, useState, useRef } from 'react';
import { getObrasSociales } from '@/services/obraSocialService';
import { getOdontologos } from '@/services/odontologoService';
import { ObraSocial } from '@/models/obraSocial.model';
import { Odontologo } from '@/models/odontologo.model';
import { saveLote, ILote } from '@/services/loteService';
import toast, { Toaster } from 'react-hot-toast';


export default function AltaLote() {
  const [odontologos, setOdontologos] = useState<Odontologo[]>([]);
  const [odontologosArr, setOdontologosArr] = useState<string[]>([])
  const [obrasSociales, setObrasSociales] = useState<ObraSocial[]>([]);
  const [obrasSocialesArr, setObrasSocialesArr] = useState<string[]>([]);

  const [entries, setEntries] = useState<Entry[]>([]);
  const [selectedOdontologo, setSelectedOdontologo] = useState<Odontologo>({} as Odontologo);
  const [selectedObraSocial, setSelectedObraSocial] = useState<ObraSocial>({} as ObraSocial);
  const bonosAmount = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const loadData = async () => {
      Promise.all([getObrasSociales(), getOdontologos()]).then((values) => {
        const obras = values[0];
        const odontologos = values[1];
      
        setObrasSociales(obras);
        setObrasSocialesArr(obras.map((obra: ObraSocial) => obra.nombre))
        setOdontologos(odontologos);
        setOdontologosArr(odontologos.map((odontologo: ObraSocial) => odontologo.nombre))

        return values;
      }).catch(() => {
        return {}
      })
    };
    loadData();
  },[])

  const setOdontologo = (nombre: string) => {
    const selectedOdont = odontologos.find((odontologo: Odontologo) => odontologo.nombre === nombre) || {} as Odontologo;
    setSelectedOdontologo(selectedOdont);
  }

  const setObraSocial = (nombre: string) => {
    const selectedObraSocial = obrasSociales.find((obraSocial: ObraSocial) => obraSocial.nombre === nombre) || {} as ObraSocial;
    setSelectedObraSocial(selectedObraSocial);
  }

  const handleAddEntry = () => {
    if(bonosAmount.current == null) return;
    if(entries.find((entry) => {
      return entry.obraSocial.nombre === selectedObraSocial.nombre
    }) != null){
      toast.error("Ya se agrego la obra social.");
      return;
    }
    const newEntry = new Entry(selectedObraSocial, Number(bonosAmount.current?.value))
    setEntries([...entries, newEntry])
  }

  const handleRemoveEntry = (indexToRemove: number) => {
    setEntries(entries.filter((_: Entry, index: number) => {
      return index !== indexToRemove;
    }))
  }

  const save = (e: React.SyntheticEvent) => {
    e.preventDefault();

    // TODO!: Add DTO's in the backend.
    entries.forEach((entry) => {
      const lote: ILote = {
        id: 0,
        mes: new Date().getMonth() + 1,
        cantidad: entry.cantidad,
        odontologoId: selectedOdontologo.id,
        odontologo: {
          id: 0,
          matricula: 0,
          nombre: '',
          apellido: '',
          dni: 0
        },
        obraSocialId: entry.obraSocial.id,
        obraSocial:{
          id: 0,
          nombre: '',
        }
      }
      saveLote(lote)
    })
    setEntries([]);
  }

  return (
    <div className='flex w-full h-screen items-center justify-center'>
      <Toaster />
      <div className='flex flex-col xl:w-1/3 h-full items-center gap-2'>
        <form onSubmit={save}>
        <h1 className='text-2xl w-full pt-12 font-bold'>Alta Lote</h1>
        <div className='divider bg-white h-[1px]'></div>
        <div className='flex gap-2 w-full'>
          <SelectAndCreate
            newItemImg={newItemSvg}
            options={odontologosArr}
            defaultOptionName='Seleccionar odontologo...'
            onSelect={setOdontologo}
          ></SelectAndCreate>
        </div>
        <div className='flex gap-4 w-full items-center flex-col xl:flex-row'>
          <div className='flex gap-2 flex-col w-full'>
            <label>Obra social</label>
            <SelectAndCreate
              newItemImg={newItemSvg}
              options={obrasSocialesArr}
              defaultOptionName='Seleccionar obra social...'
              onSelect={setObraSocial}
            ></SelectAndCreate>
          </div>
          <div className='flex w-full'>
            <div className='flex flex-col gap-2'>
              <label>Cantidad</label>
              <div className='flex gap-2'>
                <input
                  ref={bonosAmount}
                  required
                  className='input flex grow w-auto max-w-48'
                  type='number'
                ></input>
                <button className='btn' type='button' onClick={handleAddEntry}>Agregar</button>
              </div>
            </div>
          </div>
        </div>
        <h2 className='w-full mt-10 text-xl font-semibold'>
          Bonos por obra social
        </h2>
        <div className='w-full overflow-y-auto h-96'>
          <table className='table table-pin-rows'>
            <thead>
              <tr>
                <th>#</th>
                <th>Obra social</th>
                <th>Cantidad</th>
                <th className='w-24'>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry: Entry, index: number) => {
                return (
                  <tr key={index}>
                    <td>{index}</td>
                    <td>{entry.obraSocial.nombre}</td>
                    <td>{entry.cantidad}</td>
                    <td className='flex justify-center'>
                      <button type='button' onClick={() => handleRemoveEntry(index)} className='btn btn-sm btn-square btn-neutral'>
                        <Image src={closeSvg} width={12} alt='delete'></Image>
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        <div className='flex flex-row-reverse w-full gap-2'>
          <button className='btn'>Cancelar</button>
          <button type='submit' className='btn'>Aceptar</button>
        </div>
        </form>
      </div>
    </div>
  );
}
