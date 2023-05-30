import React from 'react'

export default function Page() {
  return (
    <section className='w-full rounded-md flex flex-col bg-white sticky top-5'>
      <section className='bg-white'>
        <div className='relative items-center w-full mx-auto max-w-7xl p-12'>
          <div>
            <div className='max-w-2xl'>
              <div className='text-2xl font-medium tracking-tight text-black sm:text-4xl'>
                <p>Infojobs Compere</p>
                <p className='text-xl'>
                  Potencia tu carrera con inteligencia artificial
                </p>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-12 mt-11'>
            <div className='flex flex-row items-center gap-3'>
              <div>
                <p className='text-lg font-base text-black'>Navega</p>
                <div className='text-base text-gray-500'>
                  Busca entre las miles de ofertas de empleos y empresas que
                  están esperando por ti.
                </div>
              </div>
            </div>
            <div className='flex flex-row items-center gap-3'>
              <div>
                <p className='text-lg font-base text-black'>Seleciona</p>
                <div className='text-base text-gray-500'>
                  Selecciona las ofertas que más te llamen la atención y
                  agregalas para luego analizarlas
                </div>
              </div>
            </div>
            <div className='flex flex-row items-center gap-3'>
              <div>
                <p className='text-lg font-base text-black'>Usa la IA</p>
                <div className='text-base text-gray-500'>
                  De la mano de la IA analiza tu futuro trabajo soñando,
                  otorgandote un punto de vista objetivo.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
