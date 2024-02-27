'use client';

import closeSvg from '../../../public/x-symbol-svgrepo-com.svg';
import newItemSvg from '../../../public/new-svgrepo-com.svg';
import Image from 'next/image';
import { SelectAndCreate } from '@/components/selectAndCreate/SelectAndCreate';

export default function AltaLote() {
  return (
    <div className='flex w-full h-screen items-center justify-center'>
      <div className='flex flex-col w-1/3 h-full items-center gap-2'>
        <h1 className='text-2xl w-full pt-12 font-bold'>Alta Lote</h1>
        <div className='divider bg-white h-[1px]'></div>
        <div className='flex gap-2 w-full'>
          <SelectAndCreate
            newItemImg={newItemSvg}
            options={['Odontologo 1', 'Odontologo 2', 'Odontologo 3']}
            defaultOptionName='Seleccionar odontologo...'
            onSelect={() => {}}
          ></SelectAndCreate>
        </div>
        <div className='flex gap-4 w-full items-center'>
          <div className='flex gap-2 flex-col w-full'>
            <label>Obra social</label>
            <SelectAndCreate
              newItemImg={newItemSvg}
              options={['OSDE', 'Swiss Medical', 'Galeno']}
              defaultOptionName='Seleccionar obra social...'
              onSelect={() => {}}
            ></SelectAndCreate>
          </div>
          <div className='flex'>
            <div className='flex flex-col gap-2'>
              <label>Cantidad</label>
              <div className='flex gap-2'>
                <input className='input w-48' type='number'></input>
                <button className='btn'>Agregar</button>
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
              <tr>
                <td>1</td>
                <td>OSDE</td>
                <td>5</td>
                <td className='flex justify-center'>
                  <button className='btn btn-sm btn-square btn-error'>
                    <Image src={closeSvg} width={12} alt='delete'></Image>
                  </button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Swiss Medical</td>
                <td>3</td>
                <td className='flex justify-center'>
                  <button className='btn btn-sm btn-square btn-error'>
                    <Image src={closeSvg} width={12} alt='delete'></Image>
                  </button>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Swiss Medical</td>
                <td>3</td>
                <td className='flex justify-center'>
                  <button className='btn btn-sm btn-square btn-error'>
                    <Image src={closeSvg} width={12} alt='delete'></Image>
                  </button>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>Swiss Medical</td>
                <td>3</td>
                <td className='flex justify-center'>
                  <button className='btn btn-sm btn-square btn-error'>
                    <Image src={closeSvg} width={12} alt='delete'></Image>
                  </button>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>Swiss Medical</td>
                <td>3</td>
                <td className='flex justify-center'>
                  <button className='btn btn-sm btn-square btn-error'>
                    <Image src={closeSvg} width={12} alt='delete'></Image>
                  </button>
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>Swiss Medical</td>
                <td>3</td>
                <td className='flex justify-center'>
                  <button className='btn btn-sm btn-square btn-error'>
                    <Image src={closeSvg} width={12} alt='delete'></Image>
                  </button>
                </td>
              </tr>
              <tr>
                <td>7</td>
                <td>Swiss Medical</td>
                <td>3</td>
                <td className='flex justify-center'>
                  <button className='btn btn-sm btn-square btn-error'>
                    <Image src={closeSvg} width={12} alt='delete'></Image>
                  </button>
                </td>
              </tr>
              <tr>
                <td>8</td>
                <td>Swiss Medical</td>
                <td>3</td>
                <td className='flex justify-center'>
                  <button className='btn btn-sm btn-square btn-error'>
                    <Image src={closeSvg} width={12} alt='delete'></Image>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='flex flex-row-reverse w-full gap-2'>
          <button className='btn'>Cancelar</button>
          <button className='btn'>Aceptar</button>
        </div>
      </div>
    </div>
  );
}
