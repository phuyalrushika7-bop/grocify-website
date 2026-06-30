import { useState } from 'react'
import { FaHeart, FaPlus } from 'react-icons/fa'
import Button from './Button'

const Cards = ({ id, image, name, price, onAddToCart, onNavigate }) => {
  const [cartStep, setCartStep] = useState('initial')

  return (
    <div className="bg-zinc-100 p-4">
      <div className="flex justify-between items-center">
        <span className="text-red-500">
          <FaHeart />
        </span>
        <button type="button" className="bg-orange-500 text-white px-3 py-2 rounded-full">
          <FaPlus />
        </button>
      </div>

      <div className="flex justify-center items-center h-48">
        <img src={image} alt={name} className="h-40 w-auto object-contain" />
      </div>

      <div>
        <h3 className='text-2xl font-semibold'>{name}</h3>
        <p className='text-2xl font-semibold mt-4 mb-3'>${price.toFixed(2)}</p>

        {cartStep === 'initial' && (
          <Button content="Shop Now" small onClick={() => setCartStep('readyToAdd')} />
        )}

        {cartStep === 'readyToAdd' && (
          <div className='space-y-3'>
            <p className='text-sm text-zinc-600'>Add this item to your cart?</p>
            <div className='flex flex-wrap gap-3'>
              <Button
                content='Add to Cart'
                small
                onClick={() => {
                  onAddToCart({ id, name, image, price }, null, null)
                  setCartStep('itemAdded')
                }}
              />
              <button
                type='button'
                className='rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 hover:border-orange-500 hover:text-orange-500'
                onClick={() => setCartStep('initial')}
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {cartStep === 'itemAdded' && (
          <div className='space-y-3'>
            <p className='text-sm text-zinc-600'>Item added to your cart.</p>
            <div className='flex flex-wrap gap-3'>
              <Button
                content='View Cart'
                small
                onClick={() => onNavigate('cart')}
              />
              <button
                type='button'
                className='rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 hover:border-orange-500 hover:text-orange-500'
                onClick={() => setCartStep('initial')}
              >
                Add Other Items
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default Cards
