'use client'
import { Offer } from '@/app/types'
import { useAnalizeOffers } from '@/contexts/analize-context'
import { CheckIcon, PlusIcon } from '@heroicons/react/solid'
import React, { useMemo } from 'react'

export default function ActionsOfferCard ({ offer }: { offer: Offer }) {
  const { addOfferToAnalize, offers } = useAnalizeOffers()
  const handleClick = () => {
    addOfferToAnalize(offer)
  }

  const isSelected = useMemo(() => Boolean(offers[offer.id]), [offer.id, offers])
  return (
    <button
      onClick={handleClick}
      disabled={isSelected}
      className='absolute right-4 hover:text-main-color transition-colors'
    >
      {isSelected ? <CheckIcon className='w-5 text-[#00A550]' /> : <PlusIcon className='w-5' />}
    </button>
  )
}
