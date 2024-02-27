import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='z-10 max-w-5xl w-full items-center flex flex-col gap-2 font-mono text-sm'>
        Bienvenido a AOBA!
        <Link
          className='border-[1px] border-white rounded-md p-1'
          href='/altaLote'
        >
          Alta Lote
        </Link>
      </div>
    </main>
  );
}
