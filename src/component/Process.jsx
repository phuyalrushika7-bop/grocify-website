import Heading from './Heading'
import { TbCircleNumber1, TbCircleNumber2, TbCircleNumber3, TbCircleNumber4 } from 'react-icons/tb'
import { PiPlant, PiFactory } from 'react-icons/pi'
import { SlBadge } from 'react-icons/sl'
import { BsTruck } from 'react-icons/bs'

const steps = [
  {
    id: 1,
    Number: <TbCircleNumber1 />,
    title: 'Sourcing',
    para: 'It is a long established fact that a reader',
    icons: <PiPlant />,
  },
  {
    id: 2,
    Number: <TbCircleNumber2 />,
    title: 'Manufacturing',
    para: 'It is a long established fact that a reader',
    icons: <PiFactory />,
  },
  {
    id: 3,
    Number: <TbCircleNumber3 />,
    title: 'Quality Control',
    para: 'It is a long established fact that a reader',
    icons: <SlBadge />,
  },
  {
    id: 4,
    Number: <TbCircleNumber4 />,
    title: 'Logistics',
    para: 'It is a long established fact that a reader',
    icons: <BsTruck />,
  },
]

const Process = () => {
  const renderSteps = steps.map((item) => (
    <div key={item.id} className={`w-full md:flex-1 md:basis-[300px] ${item.id === 3 ? 'md:ml-10' : ''} ${item.id % 2 === 0 ? 'md:-mt-50' : ''}`}>
      <span className='flex h-18 w-18 items-center justify-center rounded-full bg-zinc-800 text-8xl text-white outline-[3px] outline-offset-7 outline-dashed outline-zinc-800'>
        {item.Number}
      </span>
      <div className='mt-6 flex flex-1 items-center gap-4'>
        <div className='flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-orange-500 to-orange-400 p-2 text-3xl text-white shadow-lg'>{item.icons}</div>
        <div className='min-w-0 flex-1 text-left'>
          <h4 className='text-zinc-800 text-2xl font-bold'>{item.title}</h4>
          <p className='text-zinc-600 mt-2'>{item.para}</p>
        </div>
      </div>
    </div>
  ))

  return (
    <section>
      <div className='mx-auto max-w-[1400px] px-10 py-20'>
        <div className='mr-auto w-fit'>
          <Heading highlight='Our' heading='Process' />
        </div>
        <div className='flex items-center justify-center mt-20 pt-50'>{renderSteps}</div>
      </div>
    </section>
  )
}

export default Process