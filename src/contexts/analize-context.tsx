'use client'
import { Offer } from '@/app/types'
import React, { createContext, useState, useContext } from 'react'

// Definir el tipo para el valor del contexto

export type Offers = Record<string, Offer>

interface ContextValue {
  offers: Offers
  addOfferToAnalize: (offer: Offer) => void
  removeOfferToAnalize: (offer: Offer) => void
}

// Crear el contexto
const AnalizeOfferContext = createContext<ContextValue | undefined>(undefined)

// Props types
interface Props {
  children: JSX.Element
}

// Crear el proveedor del contexto
export const AnalizeProvider: React.FC<Props> = ({ children }) => {
  const [offers, setOffers] = useState<Offers>({})

  const addOfferToAnalize = async (offer: Offer) => {
    if (Object.keys(offers).length >= 3) return
    setOffers((prevOffers) => {
      return { ...prevOffers, [offer.id]: offer }
    })
  }

  const removeOfferToAnalize = (offer: Offer) => {
    const { id } = offer
    setOffers((prevOffers) => {
      const keys = Object.keys(prevOffers)
      const filteredOffers: Offers = {}
      keys.forEach((key) => {
        if (key !== id) {
          filteredOffers[key] = prevOffers[key]
        }
      })
      return filteredOffers
    })
  }

  return (
    <AnalizeOfferContext.Provider value={{ offers, addOfferToAnalize, removeOfferToAnalize }}>
      {children}
    </AnalizeOfferContext.Provider>
  )
}

// Crear un hook personalizado para acceder al contexto
export const useAnalizeOffers = () => {
  const { offers, addOfferToAnalize, removeOfferToAnalize } = useContext(AnalizeOfferContext) as ContextValue
  if (offers == null) {
    throw new Error(
      'useMiContexto debe ser utilizado dentro de un MiContextoProvider'
    )
  }
  return { offers, addOfferToAnalize, removeOfferToAnalize }
}
