import React from 'react'
import ImageWithFallback from './ImageWithFallback'
import { ItemsWithSeparetor } from './ItemsWithSeparator'
import { Offer } from '@/app/types'
import { processDate } from '@/helpers/processDate'
import ActionsOfferCard from './ActionsOfferCard'

export default function OfferCard ({ offer }: { offer: Offer }) {
  const { title, logo, author, province, published, contractType, workDay, salary } = offer
  return (
    <article className='w-full rounded-md flex flex-row gap-4 bg-white p-4 relative'>
      <div className='bg-main-gray w-[56px] h-[56px] md:w-[72px] md:h-[72px] shadow-sm rounded border border-main-gray overflow-hidden'>
        <ImageWithFallback
          className='w-full h-full aspect-square object-cover'
          src={logo}
          alt={author}
        />
      </div>
      <div className='flex flex-col gap-3'>
        <header>
          <h3 className='text-lg text-gray-950 font-medium truncate w-72 sm:w-96'>
            {title}
          </h3>
          <p className='text-main-color text-sm'>{author}</p>
        </header>
        <div className='flex flex-col gap-4'>
          <ItemsWithSeparetor
            data={[
              { title: province },
              {
                title: processDate(published ?? ''),
                className: 'text-[#00A550] text-xs'
              }
            ]}
          />
          <ItemsWithSeparetor
            data={[
              { title: `Contrato ${contractType ?? ''}` },
              { title: `Jornada ${workDay ?? ''}` },
              { title: salary ?? '' }
            ]}
          />
        </div>
      </div>
      <ActionsOfferCard offer={offer} />
    </article>
  )
}
