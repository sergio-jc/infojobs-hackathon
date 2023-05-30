import { NextResponse } from 'next/server'
import {
  Configuration,
  ChatCompletionRequestMessageRoleEnum,
  OpenAIApi
} from 'openai'
import { getOffersDescriptions } from './helper'

const openaiToken = process.env.OPENAI_TOKEN ?? ''

const configuration = new Configuration({ apiKey: openaiToken })
const openai = new OpenAIApi(configuration)

const INITIAL_MESSAGES = [
  {
    role: ChatCompletionRequestMessageRoleEnum.System,
    content: `Provide a concise response based on a group of descriptions 
    I will give you in the format {description, id}. Analyze the descriptions, evaluate the
     best offer. Choose only one offer and explain why it is the best option. Respond in the format:
       {score, id: /chosen offer's ID/, description: /why it's the best choice must have a maximum of 100 characters/}.
       and answer in spanish For example:
    {
      "score": 8,
      "id": "/*aqui debe de ir el id de la oferta que elegiste*/",
      "description": "{company} ofrece la mejor opción, porque..."
      "
    }`
  }
]

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
