import Heading from './Heading'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'

const testimonials = [
  {
    name: 'Alicia M.',
    role: 'Regular Customer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80',
    rating: 5,
    text: 'The delivery was fast and the fresh produce was excellent. I love shopping here every week.',
  },
  {
    name: 'James T.',
    role: 'Busy Parent',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    rating: 4,
    text: 'Everything feels organized and trustworthy. It saves me so much time during my weekly shop.',
  },
  {
    name: 'Nora P.',
    role: 'Health Enthusiast',
    image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=300&q=80',
    rating: 5,
    text: 'I always find quality ingredients and thoughtful packaging. The experience feels premium.',
  },
]

const Testimonials = () => {
  return (
    <section className='bg-zinc-50 py-20'>
      <div className='mx-auto max-w-[1400px] px-10'>
        <Heading highlight='Customer' heading='Saying' />
        <div className='mt-12 grid gap-6 md:grid-cols-3'>
          {testimonials.map((item) => (
            <div key={item.name} className='rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm'>
              <div className='flex items-center gap-4'>
                <img src={item.image} alt={item.name} className='h-14 w-14 rounded-full object-cover' />
                <div>
                  <h4 className='font-semibold text-zinc-800'>{item.name}</h4>
                  <p className='text-sm text-zinc-500'>{item.role}</p>
                </div>
              </div>
              <div className='mt-4 flex items-center gap-1 text-orange-500 text-sm'>
                {Array.from({ length: item.rating }).map((_, index) => (
                  <FaStar key={index} />
                ))}
              </div>
              <div className='mt-4 text-xl text-orange-500'>
                <FaQuoteLeft />
              </div>
              <p className='mt-3 text-base leading-7 text-zinc-600'>“{item.text}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
