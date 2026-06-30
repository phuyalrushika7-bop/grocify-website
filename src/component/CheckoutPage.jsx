import Button from './Button'

const CheckoutPage = ({ onNavigate }) => {
  return (
    <section className='min-h-screen bg-zinc-50'>
      <div className='mx-auto max-w-[1400px] px-4 py-24 pt-36 md:px-10'>
        <div className='rounded-[2rem] bg-white p-8 shadow-xl shadow-zinc-200/70 ring-1 ring-zinc-100 md:p-12'>
          <h2 className='text-4xl font-bold text-zinc-900'>Checkout</h2>
          <p className='mt-4 text-zinc-600'>Your order has been confirmed and will be delivered in less than 30 minutes.</p>
          <div className='mt-8 flex flex-col gap-4 sm:flex-row'>
            <Button content='Go Back Home' small onClick={() => onNavigate('home')} />
            <button
              type='button'
              onClick={() => onNavigate('cart')}
              className='rounded-lg border border-zinc-300 px-5 py-2 text-sm font-semibold text-zinc-700 transition-all duration-300 hover:border-orange-500 hover:text-orange-500'
            >
              Back to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CheckoutPage
