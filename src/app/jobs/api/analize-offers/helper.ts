import { Offer } from '@/app/types'

const infoJobsToken = process.env.INFOJOBS_TOKEN ?? ''

export async function getOfferDescriptionById (id: string) {
  const res = await fetch(`https://api.infojobs.net/api/7/offer/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${infoJobsToken}`
    }
  })

  const { description } = await res.json()

  return { description, id }
}

export async function getOffersDescriptions (offers: Offer[]) {
  const offersDescription = offers.map(
    async (offer) => await getOfferDescriptionById(offer.id)
  )
  const resolveOffers = (await Promise.allSettled(offersDescription))
    .filter((res) => res.status !== 'rejected')
    .map((resolved: any) => resolved.value)
  return resolveOffers
}
