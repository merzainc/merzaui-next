import { Button } from '@/components/Button'
import { ImCodepen } from 'react-icons/im'

const IndexPage = () => {
  return (
    <main className='mx-auto max-w-7xl px-4 pt-8 sm:px-6'>
      <div className='mb-4 flex items-center gap-2.5'>
        <Button suffix={<ImCodepen className='size-4' />} variant='danger'>
          Primary
        </Button>
        <Button variant='secondary'>Secondary</Button>
      </div>
      <h1>Taxing Laughter: The Joke Tax Chronicles</h1>
      <h2>The People of the Kingdom</h2>
      <h3>The Joke Tax</h3>
      <h4>People stopped telling jokes</h4>
    </main>
  )
}

export default IndexPage
