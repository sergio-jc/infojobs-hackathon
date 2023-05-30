import { Button } from '@tremor/react'
import Link from 'next/link'
import React from 'react'

export default function Page () {
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
              <p className='max-w-2xl mt-4 text-lg tracking-tight text-gray-600'>
                Descubre el trabajo perfecto con Infojobs Compere. Compara
                ofertas de trabajo utilizando IA y ChatGPT para ayudarte a
                explorar, analizar y comparar múltiples oportunidades laborales
                en un solo lugar. Toma decisiones informadas, ahorra tiempo y
                encuentra tu próximo desafío profesional con Infojobs Compere.
              </p>
            </div>
          </div>
          <Link href='/jobs'>
            <Button className='mt-6'>Explorar</Button>
          </Link>
          <div className=''>
            <div className='max-w-xl py-12 mx-auto text-left lg:max-w-7xl'>
              <h2 className='sr-only'>Features.</h2>
              <div>
                <div className='grid grid-cols-2 gap-12 lg:grid-cols-3 lg:space-y-0'>
                  <div>
                    <div>
                      <div className='flex items-center justify-center w-12 h-12 text-black bg-gray-100 rounded-xl'>
                        ❖
                      </div>
                      <p className='mt-4 text-lg font-medium leading-6 text-black'>
                        Comparación de ofertas
                      </p>
                    </div>
                    <div className='mt-4 text-base text-gray-500'>
                      Compara múltiples ofertas de trabajo lado a lado,
                      proporcionando una visión general de sus características y
                      requisitos clave.
                    </div>
                  </div>
                  <div>
                    <div>
                      <div className='flex items-center justify-center w-12 h-12 text-black bg-gray-100 rounded-xl'>
                        ❖
                      </div>
                      <p className='mt-4 text-lg font-medium leading-6 text-black'>
                        Análisis con IA
                      </p>
                    </div>
                    <div className='mt-4 text-base text-gray-500'>
                      Evalua rápidamente las diferencias clave entre varias
                      ofertas de trabajo, evitando tener que revisar manualmente
                      cada una por separado, con ayuda de la IA.
                    </div>
                  </div>
                  <div>
                    <div>
                      <div className='flex items-center justify-center w-12 h-12 text-black bg-gray-100 rounded-xl'>
                        ❖
                      </div>
                      <p className='mt-4 text-lg font-medium leading-6 text-black'>
                        Toma de decisiones informadas
                      </p>
                    </div>
                    <div className='mt-4 text-base text-gray-500'>
                      Análisis automatizado, puedes tomar decisiones más
                      informadas al evaluar las diferentes opciones de trabajo
                      disponibles.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
