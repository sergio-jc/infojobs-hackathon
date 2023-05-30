/* eslint-disable @next/next/no-img-element */
import OfferCard from '@/components/OfferCard'
import OffersToAnalize from '@/components/OffersToAnalize'
import { AnalizeProvider } from '@/contexts/analize-context'
import { getInfoJobsOffers } from '@/services/getOffers'
import React from 'react'

export default async function Jobs ({
  children
}: {
  children: React.ReactNode
}) {
  const offerts = await getInfoJobsOffers()

  return (
    <AnalizeProvider>
      <section className='flex flex-row max-w-[1500px] px-4 mx-auto pb-24 gap-6'>
        {/* <ul className='flex flex-col gap-3 max-w-[728px]'> */}
        <ul className='flex flex-col gap-3 max-w-[560px]'>
          {offerts.map((offer) => (
            <li key={offer.id}>
              <OfferCard offer={offer} />
            </li>
          ))}
        </ul>
        <section className='max-w-[400px]'>{children}</section>
        <section className='max-w-[320px]'>
          <OffersToAnalize />
        </section>
      </section>
    </AnalizeProvider>
  )
}
