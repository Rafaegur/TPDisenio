export default function AltaLote() {
  return (
    <div className='flex w-full h-screen items-center justify-center'>
      <div className='flex flex-col w-1/3 h-full items-center gap-2'>
        <h1 className='text-2xl w-full pt-3'>Alta Lote</h1>
        <div className='divider divider-accent'></div>
        <div className='flex gap-2 w-full'>
          <select className='select w-full'>
            <option value=''>Seleccionar odontologo...</option>
          </select>
          <button className='btn'>+</button>
        </div>
        <div className='flex gap-4 w-full items-center'>
          <div className='flex gap-2 flex-col w-full'>
            <label>Obra social</label>
            <div className='flex gap-2'>
              <select className='select w-full'>
                <option value=''>Seleccionar obra social...</option>
              </select>
              <button className='btn'>+</button>
            </div>
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
        <h2 className='w-full'>Bonos por obra social</h2>
        <table></table>
        <div className='flex flex-row-reverse w-full gap-2'>
          <button className='btn'>Cancelar</button>
          <button className='btn'>Aceptar</button>
        </div>
      </div>
    </div>
  );
}
