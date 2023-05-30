/* eslint-disable @next/next/no-img-element */
import { getSingleInfoJobsOffer } from '@/services/getOffers'
import React from 'react'

export default async function Job ({ params }: any) {
  const { id } = params
  const { title } = await getSingleInfoJobsOffer({ offerId: id })
  return (
    <main className='max-w-4xl mx-auto px-4 py-8'>
      <div className='bg-white shadow-lg rounded-lg overflow-hidden'>
        <div className='p-6'>
          <h1 className='text-2xl font-bold text-gray-800'>{title}</h1>
          <p className='text-gray-600 mt-2'>Descripción del trabajo</p>
          <div className='flex items-center mt-4'>
            <img className='h-8 w-8 rounded-full object-cover' src='logo.jpg' alt='Logo de la empresa' />
            <span className='ml-2 text-gray-700'>Nombre de la empresa</span>
          </div>
          <div className='flex justify-between items-center mt-4'>
            <span className='text-gray-600'>Ciudad</span>
            <span className='text-gray-600'>Fecha de publicación</span>
          </div>
        </div>
        <div className='bg-gray-100 px-6 py-4'>
          <h2 className='text-lg font-bold text-gray-800'>Detalles adicionales</h2>
          <p className='text-gray-600 mt-2'>Aquí puedes agregar detalles adicionales sobre la oferta de trabajo.</p>
        </div>
      </div>
    </main>
  )
}
