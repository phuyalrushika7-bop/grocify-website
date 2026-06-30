import Button from './Button'

const CartPage = ({
  cartItems,
  isNewUser,
  setIsNewUser,
  onQuantityChange,
  onNavigate,
}) => {
  const hasSelectedCustomerType = isNewUser !== null
  const total = cartItems.reduce((sum, item) => {
    const unitPrice = isNewUser ? item.price * 0.8 : item.price
    return sum + unitPrice * item.quantity
  }, 0)

  return (
    <section className='min-h-screen bg-zinc-50'>
      <div className='mx-auto max-w-[1400px] px-4 py-24 pt-36 md:px-10'>
        <div className='rounded-[2rem] bg-white p-8 shadow-xl shadow-zinc-200/70 ring-1 ring-zinc-100 md:p-12'>
          <div className='flex flex-col gap-6 md:flex-row md:items-center md:justify-between'>
            <div>
              <h2 className='text-4xl font-bold text-zinc-900'>Your Cart</h2>
              <p className='mt-3 text-zinc-600'>Review the items you want to shop and update quantities.</p>
            </div>
            <button
              type='button'
              onClick={() => onNavigate('home')}
              className='rounded-lg border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-700 transition-all duration-300 hover:border-orange-500 hover:text-orange-500'
            >
              Continue Shopping
            </button>
          </div>

          {cartItems.length === 0 ? (
            <div className='mt-12 rounded-3xl border border-zinc-200 bg-zinc-50 p-10 text-center'>
              <p className='text-xl font-semibold text-zinc-800'>Your cart is empty.</p>
              <p className='mt-3 text-zinc-600'>Add a product from the shop to start your order.</p>
            </div>
          ) : (
            <div className='mt-10 space-y-8'>
              {isNewUser === null && (
                <div className='rounded-2xl border border-orange-200 bg-orange-50 p-6'>
                  <p className='text-lg font-semibold text-orange-800'>Are you new to this website?</p>
                  <p className='mt-2 text-zinc-600'>New customers receive a 20% discount on all cart items.</p>
                  <div className='mt-4 flex flex-wrap gap-3'>
                    <Button content='Yes, apply 20% discount' small onClick={() => setIsNewUser(true)} />
                    <button
                      type='button'
                      onClick={() => setIsNewUser(false)}
                      className='rounded-lg border border-orange-300 bg-white px-5 py-2 text-sm font-semibold text-orange-700 transition-all duration-300 hover:border-orange-500 hover:text-orange-500'
                    >
                      Shop without discount
                    </button>
                  </div>
                </div>
              )}

              <div className='space-y-4'>
                {cartItems.map((item) => {
                  const unitPrice = isNewUser ? item.price * 0.8 : item.price
                  return (
                    <div key={item.id} className='grid gap-4 rounded-3xl border border-zinc-200 bg-zinc-50 p-6 md:grid-cols-[120px_1fr_180px]'>
                      <div className='flex items-center justify-center'>
                        <img src={item.image} alt={item.name} className='h-24 w-24 rounded-3xl object-contain' />
                      </div>
                      <div>
                        <h3 className='text-2xl font-semibold text-zinc-900'>{item.name}</h3>
                        {isNewUser ? (
                          <div className='mt-2 space-y-1 text-sm'>
                            <p className='text-zinc-500'>
                              Original price: <span className='line-through'>${item.price.toFixed(2)}</span>
                            </p>
                            <p className='font-semibold text-orange-600'>Discounted price: ${unitPrice.toFixed(2)}</p>
                            <p className='text-green-700'>20% discount applied</p>
                          </div>
                        ) : (
                          <div className='mt-2 space-y-1 text-sm'>
                            <p className='text-zinc-600'>Unit price: ${unitPrice.toFixed(2)}</p>
                            {isNewUser === false && (
                              <p className='text-zinc-500'>Shopping without discount at original price</p>
                            )}
                          </div>
                        )}
                      </div>
                      <div className='flex items-center justify-between gap-3 rounded-3xl bg-white p-4 shadow-sm'>
                        <button
                          type='button'
                          className='h-10 w-10 rounded-full border border-zinc-300 text-xl text-zinc-700'
                          onClick={() => onQuantityChange(item.id, item.quantity - 1)}
                        >
                          -
                        </button>
                        <span className='text-xl font-semibold'>{item.quantity}</span>
                        <button
                          type='button'
                          className='h-10 w-10 rounded-full border border-zinc-300 text-xl text-zinc-700'
                          onClick={() => onQuantityChange(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className='rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm'>
                <div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
                  <div>
                    <p className='text-sm uppercase tracking-[0.2em] text-zinc-500'>Total Price</p>
                    <p className='mt-2 text-3xl font-bold text-zinc-900'>${total.toFixed(2)}</p>
                  </div>
                  <div className='space-y-3'>
                    <p className='text-sm text-zinc-600'>
                      {hasSelectedCustomerType
                        ? 'Ready to complete your order?'
                        : 'Choose your customer type before checkout.'}
                    </p>
                    <Button
                      content={isNewUser ? 'Checkout with 20% Discount' : 'Shop without Discount'}
                      disabled={!hasSelectedCustomerType}
                      small
                      onClick={() => onNavigate('checkout')}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default CartPage
