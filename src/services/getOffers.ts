import { INFOJOBS_TOKEN } from '@confg'

interface APIResultOffer {
  id: string
  title: string
  province: Category
  city: string
  link: string
  category: Category
  contractType: Category
  subcategory: Category
  salaryMin: Category
  salaryMax: Category
  salaryPeriod: Category
  experienceMin: Category
  workDay: Category
  study: Category
  published: Date
  updated: Date
  author: Author
  requirementMin: string
  bold: boolean
  applications: string
  subSegment: number
  executive: boolean
  salaryDescription: string
  urgent: boolean
  color: boolean
  teleworking?: Category
}

interface Author {
  id: string
  name: string
  uri: string
  logoUrl: string
  corporateResponsive: boolean
  showCorporativeHeader: boolean
}

interface Category {
  id: number
  value: string
}

export async function getInfoJobsOffers () {
  const res = await fetch(
    'https://api.infojobs.net/api/7/offer?category=informatica-telecomunicaciones&page=1',
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${INFOJOBS_TOKEN}`
      }
    }
  )

  const { items }: { items: APIResultOffer[] } = await res.json()

  const listOfOffers = items.map((item) => {
    const {
      id,
      title,
      province,
      experienceMin,
      link,
      teleworking,
      author,
      published,
      contractType,
      workDay,
      salaryDescription
    } = item

    return {
      id,
      title,
      province: province.value,
      experienceMin: experienceMin.value,
      link,
      logo: author.logoUrl,
      author: author.name,
      teleworking: teleworking?.value ?? 'No especificado',
      published,
      contractType: contractType.value,
      workDay: workDay.value,
      salary: salaryDescription
    }
  })

  return listOfOffers
}

export async function getSingleInfoJobsOffer ({ offerId }: { offerId: string }) {
  const res = await fetch(`https://api.infojobs.net/api/7/offer/${offerId}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${INFOJOBS_TOKEN}`
    }
  })

  const offer: APIResultOffer = await res.json()

  return offer
}

export async function getOfferDescriptionById (id: string) {
  const res = await fetch(`https://api.infojobs.net/api/7/offer/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${INFOJOBS_TOKEN}`
    }
  })

  const { description } = await res.json()

  return description
}
