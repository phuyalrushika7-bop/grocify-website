import Heading from './Heading'
import Button from './Button'
import { FaLeaf, FaTruckFast } from 'react-icons/fa6'
import { FiShield } from 'react-icons/fi'
import { GiFruitBowl } from 'react-icons/gi'

const stats = [
  { label: 'Fresh Products', value: '100+' },
  { label: 'Local Partners', value: '25' },
  { label: 'Happy Families', value: '10k+' },
]

const values = [
  {
    icon: <FaLeaf />,
    title: 'Farm Fresh Quality',
    text: 'We choose produce and pantry staples that are rich in flavor and carefully sourced.',
  },
  {
    icon: <FiShield />,
    title: 'Trusted Standards',
    text: 'Every item is handled with care so our customers can shop with confidence.',
  },
  {
    icon: <FaTruckFast />,
    title: 'Fast Delivery',
    text: 'We keep our delivery process smooth, timely, and dependable from checkout to doorstep.',
  },
]

const AboutPage = () => {
  return (
    <section id='about' className='min-h-screen bg-zinc-50'>
      <div className='mx-auto max-w-[1400px] px-4 py-24 pt-36 md:px-10'>
        <div className='rounded-[2rem] bg-white p-8 shadow-xl shadow-zinc-200/70 ring-1 ring-zinc-100 md:p-12'>
          <div className='grid gap-10 lg:grid-cols-[1.05fr_0.95fr]'>
            <div>
              <Heading highlight='About' heading='Us' />
              <p className='mt-6 text-lg leading-8 text-zinc-600'>
                Grocify brings fresh groceries, pantry essentials, and everyday comfort to your home with a modern shopping experience.
              </p>
              <p className='mt-4 text-lg leading-8 text-zinc-600'>
                Our mission is simple: make everyday essentials easy to discover, trustworthy to buy, and quick to receive.
              </p>
              <div className='mt-8 flex flex-wrap gap-4'>
                <Button content='Explore Products' />
                <a
                  href='#contact'
                  className='inline-flex rounded-lg border border-zinc-300 px-8 py-3 font-semibold text-zinc-700 transition-all duration-300 hover:border-orange-500 hover:text-orange-500'
                >
                  Contact Us
                </a>
              </div>
            </div>

            <div className='rounded-[1.5rem] bg-gradient-to-br from-orange-500 via-orange-400 to-orange-300 p-8 text-white shadow-lg'>
              <div className='flex h-16 w-16 items-center justify-center rounded-full bg-white/20 text-3xl'>
                <GiFruitBowl />
              </div>
              <h3 className='mt-6 text-2xl font-semibold'>Freshly selected for your table</h3>
              <p className='mt-4 text-base leading-7 text-orange-50'>
                We combine quality, convenience, and friendly service to create a grocery experience that feels personal and reliable.
              </p>
              <div className='mt-8 grid gap-4 sm:grid-cols-2'>
                {stats.map((item) => (
                  <div key={item.label} className='rounded-2xl bg-white/20 p-4 backdrop-blur-sm'>
                    <p className='text-2xl font-bold'>{item.value}</p>
                    <p className='mt-1 text-sm text-orange-50'>{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className='mt-12 grid gap-6 md:grid-cols-3'>
            {values.map((item) => (
              <div key={item.title} className='rounded-2xl border border-zinc-100 bg-zinc-50 p-6'>
                <div className='flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-b from-orange-400 to-orange-500 text-xl text-white shadow-md'>
                  {item.icon}
                </div>
                <h4 className='mt-4 text-xl font-semibold text-zinc-800'>{item.title}</h4>
                <p className='mt-2 text-base leading-7 text-zinc-600'>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPage
