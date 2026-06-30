import Heading from './Heading'
import FruitsCat from '../assets/fruits-and-veggies.png'
import SeaFoodCat from '../assets/meat-and-seafood.png'
import DairyCat from '../assets/dairy-and-eggs.png'
import Button from './Button'
const Category = ({ onCategorySelect }) => {

        const renderCard = category.map(card=>{
            return(
                <div
                    key={card.id}
                    className='flex-1 rounded-xl overflow-hidden cursor-pointer'
                    role='button'
                    tabIndex={0}
                    onClick={() => onCategorySelect(card.filter)}
                    onKeyDown={(event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                            event.preventDefault()
                            onCategorySelect(card.filter)
                        }
                    }}
                >
                    
                    <div className='w-full min-h-[30vh] relative -mb-10'>
                        <img src={card.image} alt={card.title} className='absolute bottom-0' />
                    </div>
                  
                    <div className='bg-zinc-100 pt-17 p-8 rounded-xl'>
                        <h3 className='text-zinc-800 text-3xl font-bold'>{card.title}</h3>
                        <p className='text-zinc-600 mt-3 mb-9 '>{card.description}</p>
                        <Button
                            content='See All'
                            onClick={(event) => {
                                event.stopPropagation()
                                onCategorySelect(card.filter)
                            }}
                        />
                    </div>
                </div>
            )
        })
    return (
        <section>
            <div className='max-w-[1400px] mx-auto px-10 py-20'>
                <Heading highlight="Shop" heading=" by Category" />
                {/* Category cards */}
                <div className='flex flex-wrap gap-10 md:mt-15 mt-10'>
                    {renderCard}

                </div>
            </div>
        </section>
    )
}

export default Category

const category = [
    {
        id: 1,
        title: 'Fruits and veggies',
        description: 'Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.',
        image: FruitsCat,
        filter: 'Fruits & Vegetables'
    },
    {
        id: 2,
        title: 'Dairy & Eggs',
        description: 'Fresh, high-quality dairy products and eggs sourced from local farms. Explore a wide range of creamy cheeses, fresh milk, and free-range eggs.',
        image: DairyCat,
        filter: 'Dairy'
    },
    {
        id: 3,
        title: 'Meat & SeaFood',
        description: 'High-quality, fresh meat and seafood sourced from trusted suppliers. Explore a wide range of premium cuts and sustainable seafood options.',
        image: SeaFoodCat,
        filter: 'Meat & Seafood'
    },
]
