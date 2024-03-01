'use client';

import closeSvg from '../../../public/x-symbol-svgrepo-com.svg';
import newItemSvg from '../../../public/new-svgrepo-com.svg';
import Image from 'next/image';
import { SelectAndCreate } from '@/components/selectAndCreate/SelectAndCreate';
import { useEffect, useState, useRef } from 'react';
import { getObrasSociales } from '@/services/obraSocialService';
import { getOdontologos } from '@/services/odontologoService';
import { ObraSocial } from '@/models/obraSocial.model';
import { Odontologo } from '@/models/odontologo.model';

class Entry {
  obraSocial: string;
  cantidad: number;
  constructor(obraSoc: string, cant: number){
    this.obraSocial = obraSoc;
    this.cantidad = cant;
  }
}

export default function AltaLote() {
  const [odontologos, setOdontologos] = useState([]);
  const [obrasSociales, setObrasSociales] = useState([]);
  const [entries, setEntries] = useState<Entry[]>([]);
  const [selectedOdontologo, setSelectedOdontologo] = useState<string>('');
  const [selectedObraSocial, setSelectedObraSocial] = useState<string>('');
  const bonosAmount = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const loadData = async () => {
      Promise.all([getObrasSociales(), getOdontologos()]).then((values) => {
        const obras = values[0];
        const odontologos = values[1];
        const obrasArr = obras.map((obra: ObraSocial) => {
          return obra.nombre
        })
        const odontologosArr = odontologos.map((odontologo: Odontologo) => {
          return odontologo.nombre
        })
        setObrasSociales(obrasArr);
        setOdontologos(odontologosArr);
        return values;
      }).catch(() => {
        return {}
      })
    };
    loadData();
  },[])

  const handleAddEntry = () => {
    if(bonosAmount.current == null) return;
    const newEntry = new Entry(selectedObraSocial, Number(bonosAmount.current?.value))
    setEntries([...entries, newEntry])
  }

  const handleRemoveEntry = (indexToRemove: number) => {
    setEntries(entries.filter((_: Entry, index: number) => {
      return index !== indexToRemove;
    }))
  }

  const clearStates = () => {
    setEntries([]);
  }

  return (
    <div className='flex w-full h-screen items-center justify-center'>
      <div className='flex flex-col xl:w-1/3 h-full items-center gap-2'>
        <h1 className='text-2xl w-full pt-12 font-bold'>Alta Lote</h1>
        <div className='divider bg-white h-[1px]'></div>
        <div className='flex gap-2 w-full'>
          <SelectAndCreate
            newItemImg={newItemSvg}
            options={odontologos}
            defaultOptionName='Seleccionar odontologo...'
            onSelect={setSelectedOdontologo}
          ></SelectAndCreate>
        </div>
        <div className='flex gap-4 w-full items-center flex-col xl:flex-row'>
          <div className='flex gap-2 flex-col w-full'>
            <label>Obra social</label>
            <SelectAndCreate
              newItemImg={newItemSvg}
              options={obrasSociales}
              defaultOptionName='Seleccionar obra social...'
              onSelect={setSelectedObraSocial}
            ></SelectAndCreate>
          </div>
          <div className='flex w-full'>
            <div className='flex flex-col gap-2'>
              <label>Cantidad</label>
              <div className='flex gap-2'>
                <input
                  ref={bonosAmount}
                  className='input flex grow w-auto max-w-48'
                  type='number'
                ></input>
                <button className='btn' onClick={handleAddEntry}>Agregar</button>
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
                    <td>{entry.obraSocial}</td>
                    <td>{entry.cantidad}</td>
                    <td className='flex justify-center'>
                      <button onClick={() => handleRemoveEntry(index)} className='btn btn-sm btn-square btn-neutral'>
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
          <button onClick={clearStates} className='btn'>Aceptar</button>
        </div>
      </div>
    </div>
  );
}
