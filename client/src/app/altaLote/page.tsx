export default function AltaLote() {
  return (
    <div className='flex w-full items-center justify-center'>
      <div className='flex flex-col w-1/3 h-full items-center justify-center gap-2'>
        <h1 className='text-2xl w-full pt-3'>Alta Lote</h1>
        <div className='divider divider-accent'></div>
        <div className='flex gap-2 w-full'>
          <select className='w-full'>
            <option value=''>Seleccionar odontologo...</option>
          </select>
          <button>+</button>
        </div>
        <div className='flex w-full items-center'>
          <div className='flex flex-col w-full'>
            <label>Obra social</label>
            <div className='flex'>
              <select className='w-full'>
                <option value=''>Seleccionar obra social...</option>
              </select>
              <button>+</button>
            </div>
          </div>
          <div className='flex w-full'>
            <div>
              <label>Cantidad</label>
              <div>
                <input type='number'></input>
                <button className='border-[1px] border-white p-1'>
                  Agregar
                </button>
              </div>
            </div>
          </div>
        </div>
        <h2>Bonos por obra social</h2>
        <table></table>
        <div className='flex w-full gap-2'>
          <button>Aceptar</button>
          <button>Cancelar</button>
        </div>
      </div>
    </div>
  );
}
