import { useState } from 'react'
import Home from './component/Home'

function App() {
  const [page, setPage] = useState('home')
  const [cartItems, setCartItems] = useState([])
  const [isNewUser, setIsNewUser] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const handleNavigate = (nextPage) => {
    setPage(nextPage)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleAddToCart = (product, newUserStatus, nextPage = 'cart') => {
    setCartItems((items) => {
      const existingItem = items.find((item) => item.id === product.id)

      if (existingItem) {
        return items.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }

      return [...items, { ...product, quantity: 1 }]
    })
    setIsNewUser(newUserStatus)
    if (nextPage) {
      handleNavigate(nextPage)
    }
  }

  const handleQuantityChange = (productId, quantity) => {
    setCartItems((items) => {
      if (quantity <= 0) {
        return items.filter((item) => item.id !== productId)
      }

      return items.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    })
  }

  const handleSearch = (query) => {
    setSearchQuery(query)
    setSelectedCategory('All')
    handleNavigate('home')
  }

  const handleCategorySelect = (category) => {
    setSearchQuery('')
    setSelectedCategory(category)
    handleNavigate('home')

    window.setTimeout(() => {
      document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <Home
      activePage={page}
      cartItems={cartItems}
      isNewUser={isNewUser}
      onAddToCart={handleAddToCart}
      onCategorySelect={handleCategorySelect}
      onNavigate={handleNavigate}
      onQuantityChange={handleQuantityChange}
      onSearch={handleSearch}
      searchQuery={searchQuery}
      selectedCategory={selectedCategory}
      setIsNewUser={setIsNewUser}
    />
  )
}

export default App
