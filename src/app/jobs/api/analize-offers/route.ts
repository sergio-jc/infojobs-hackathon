import { Offer } from '@/app/types'
import { NextResponse } from 'next/server'
import {
  Configuration,
  ChatCompletionRequestMessageRoleEnum,
  OpenAIApi
} from 'openai'

const infoJobsToken = process.env.INFOJOBS_TOKEN ?? ''
const openaiToken = process.env.OPENAI_TOKEN ?? ''

const configuration = new Configuration({ apiKey: openaiToken })
const openai = new OpenAIApi(configuration)

const INITIAL_MESSAGES = [
  {
    role: ChatCompletionRequestMessageRoleEnum.System,
    content: `Quiero que cuando te pase un grupo de descripciones, en el formato de {description, id} me des una respuesta, Se conciso, estricto y directo. Analiza las decripciones
     y evalua la mejor oferta de acuerdo a la especificidad de sus descripción, comparando si dan beneficiós , oportunidades de creciemiento laboral ,todo lo que concideres que ayude
      a evaluar un grupo de ofertas de trabajo, elige solo uno y elige el mejor explica el porque de la eleción, y dale la respuesta en este formato,
       {score, id: /* id de la oferta que elegiste*/, description : /* las razones por las cuales diste el puntaje y por que es la mejor opción*/} Por ejemplo:
    
    {
      "score": 8,
      "id": "/*aqui debe de ir el id de la oferta que elegiste*/",
      "description": "Esta oferta ofrese una mayor descripción y claridad sobre los beneficios de tabajar con ellos y los retos profesionales que ofrece sobre las demas ofertas, los
      puntos más fuertes de esta oferta son /*sigues con la descripción con un mensaje no mayor a los 300 caracteres*/
      "
    }`
  }
]

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

export async function POST (request: Request) {
  const data = await request?.json()

  if (data == null) return new Response('Missing offers', { status: 400 })

  const description = await getOffersDescriptions(data)
  const completion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    temperature: 0,
    messages: [
      ...INITIAL_MESSAGES,
      {
        role: ChatCompletionRequestMessageRoleEnum.User,
        content: JSON.stringify(description)
      }
    ]
  })

  const responseAi = completion.data.choices[0].message?.content ?? ''
  let json

  try {
    json = JSON.parse(responseAi)
    return NextResponse.json(json)
  } catch {
    return new Response('No se ha podido transformar el JSON', { status: 500 })
  }
}
