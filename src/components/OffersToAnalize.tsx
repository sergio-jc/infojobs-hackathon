/* eslint-disable @typescript-eslint/strict-boolean-expressions */
'use client'
import React, { useState } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { Offers, useAnalizeOffers } from '@/contexts/analize-context'
import { TrendingUpIcon, XIcon } from '@heroicons/react/solid'
import { Button, Callout } from '@tremor/react'

export default function OffersToAnalize () {
  const { offers, removeOfferToAnalize } = useAnalizeOffers()
  const [analizeResponse, setAnalizeResponse] = useState(null)
  const [loading, setLoading] = useState(false)
  const [parent] = useAutoAnimate(/* optional config */)
  const handleClick = async (offers: Offers) => {
    setLoading(true)
    const res = await fetch('/jobs/api/analize-offers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(Object.values(offers))
    })
    const json = await res.json()
    setAnalizeResponse(json)
    setLoading(false)
  }

  return (
    <section className='sticky top-5'>
      <ul ref={parent} className='flex flex-col gap-3'>
        {Object.entries(offers).map(([id, offer]) => (
          <li key={id}>
            <article className='w-full rounded-md flex flex-col bg-white p-3 pr-9 relative'>
              <h3 className='text-sm text-gray-950 font-medium truncate w-64'>
                {offer.title}
              </h3>
              <p className='text-main-color text-xs'>{offer.author}</p>
              <button
                onClick={() => removeOfferToAnalize(offer)}
                className='absolute right-2 text-red-600'
              >
                <XIcon className='w-4' />
              </button>
            </article>
          </li>
        ))}
      </ul>
      <div className='flex flex-col gap-2'>
        <div className='h-1 rounded-sm w-full mt-4 bg-gray-600' />
        <div className='flex justify-between items-center mt-1'>
          <p className='text-xl'>{Object.keys(offers).length}/3</p>
          {Object.keys(offers).length >= 3 && (
            <Button
              loading={loading}
              disabled={Boolean(analizeResponse)}
              loadingText='Revisando...'
              onClick={async (event) => {
                event.stopPropagation()
                await handleClick(offers)
              }}
              size='xs'
              variant='secondary'
              color='gray'
            >
              Analizar ofertas
            </Button>
          )}
        </div>
        {analizeResponse && (
          <Callout
            title='Resultado del análisis'
            icon={TrendingUpIcon}
            color='emerald'
          >
            {analizeResponse?.description ?? ''}
          </Callout>
        )}
      </div>
    </section>
  )
}
