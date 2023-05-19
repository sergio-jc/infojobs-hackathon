import { ListOfOffers } from './components/ListOfOffers'
import { getInfoJobsOffers } from './services/getOffers'

export default async function Home () {
  const listOfOffers = await getInfoJobsOffers()
  console.log('🚀 ~ file: page.tsx:6 ~ Home ~ offerts:', listOfOffers)
  return (
    <main className='max-w-[1500px] px-4 mx-auto pb-24'>
      <ListOfOffers offers={listOfOffers} />
    </main>
  )
}
