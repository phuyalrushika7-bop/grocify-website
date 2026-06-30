import Navbar from './Navbar'
import Hero from './Hero'
import Category from './Category'
import Values from './Values'
import Products from './Products'
import Discount from './Discount'
import Process from './Process'
import Testimonials from './Testimonials'
import AboutPage from './AboutPage'
import ContactPage from './ContactPage'
import CartPage from './CartPage'
import CheckoutPage from './CheckoutPage'
import Footer from './Footer'

const Home = ({
  activePage,
  onNavigate,
  cartItems,
  onAddToCart,
  onCategorySelect,
  onQuantityChange,
  isNewUser,
  setIsNewUser,
  searchQuery,
  selectedCategory,
  onSearch,
}) => {
  return (
    <div id='home'>
      <Navbar onNavigate={onNavigate} onSearch={onSearch} />
      {activePage === 'home' && (
        <>
          <Hero />
          <Category onCategorySelect={onCategorySelect} />
          <Values />
          <Products
            onAddToCart={onAddToCart}
            onCategorySelect={onCategorySelect}
            onNavigate={onNavigate}
            searchQuery={searchQuery}
            selectedCategory={selectedCategory}
          />
          <Discount />
          <Process />
          <Testimonials />
        </>
      )}
      {activePage === 'about' && <AboutPage onNavigate={onNavigate} />}
      {activePage === 'contact' && <ContactPage onNavigate={onNavigate} />}
      {activePage === 'cart' && (
        <CartPage
          cartItems={cartItems}
          isNewUser={isNewUser}
          setIsNewUser={setIsNewUser}
          onQuantityChange={onQuantityChange}
          onNavigate={onNavigate}
        />
      )}
      {activePage === 'checkout' && <CheckoutPage onNavigate={onNavigate} />}
      <Footer />
    </div>
  )
}

export default Home
