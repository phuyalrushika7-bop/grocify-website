import Heading from './Heading'
import { FaHeart, FaLeaf, FaShieldAlt, FaSeedling } from 'react-icons/fa'
import Basket from '../assets/basket-full-vegetables.png'
const Values = () => {
  const LeftValues= values.slice(0, 2).map(item=>{
    return(
      <div key={item.id} className='flex flex-1 flex-row-reverse items-center gap-7'>
        <div>
          <span className='flex justify-center items-center text-3xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full flex items-center justify-center text-white text-2xl'>{item.icon}</span>
        </div>
        <div className='md:text-left'>
            <h3 className='text-zinc-800 text-3xl font-bold'>{item.title}</h3>
            <p className='text-zinc-600 mt-2'>
              {item.para}
            </p>
        </div>
      </div>
    )
  })

   const rightValues= values.slice(2).map(item=>{
    return(
      <div key={item.id} className='flex items-center gap-7'>
        <div>
          <span className='flex justify-center items-center text-3xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full flex items-center justify-center text-white text-2xl'>{item.icon}</span>
        </div>
        <div>
            <h3 className='text-zinc-800 text-3xl text-2xl font-bold'>{item.title}</h3>
            <p className='text-zinc-600 mt-2'>
              {item.para}
            </p>
        </div>
      </div>
    )
  })
  return (
   <section>
    <div className='max-w-[1400px] mx-auto px-10 py-20'>
        <Heading highlight="Our" heading='Values'/>
        <div className='flex md:flex-row flex-col gap-15 md:gap-5 mt-15'>
          {/* Left values */}
          <div className='md:min-h-100 flex flex-col gap-15 justify-between'>
            {LeftValues}
          </div>
          <div className='md:flex w-1/2 hidden'>
            <img src={Basket} />
          </div>
          {/*Right values */}
          <div className='min-h-100 flex flex-col justify-between'>
            {rightValues}
          </div>
        </div>
    </div>
    
   </section>
  )
}

export default Values


const values = [
  {
    id: 1,
    title: "Trust",
    para:"It is a long established fact that a reader will be distracted by the readable",
    icon: <FaHeart/>
  },
  {
    id: 2,
    title: "Always Fresh",
    para: "It is a long established fact that a reader will be distracted by the readable.",
    icon: <FaLeaf/>
  },
  {
    id: 3,
    title: "Food Safety",



    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    icon: <FaShieldAlt/>
  },
   {
    id: 4,
    title: "100% Organic",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: <FaSeedling/>
  },
];
