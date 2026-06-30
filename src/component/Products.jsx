import Heading from './Heading'
import ProductList from './ProductList'
import Cards from './Cards'
import Button from './Button'
const Products = ({
  onAddToCart,
  onCategorySelect,
  onNavigate,
  searchQuery,
  selectedCategory = 'All',
}) => {
  const categories = ['All', 'Fruits & Vegetables', 'Fruits', 'Vegetables', 'Dairy', 'Meat & Seafood']
  const activeTab = selectedCategory

  const categoryMatches = (product) => {
    const productCategory = product.category.toLowerCase()

    if (activeTab === 'All') {
      return true
    }

    if (activeTab === 'Fruits & Vegetables') {
      return ['fruits', 'vegetables'].includes(productCategory)
    }

    if (activeTab === 'Meat & Seafood') {
      return ['meat', 'seafood'].includes(productCategory)
    }

    return productCategory === activeTab.toLowerCase()
  }

  const filteredItems = searchQuery && searchQuery.trim().length > 0
    ? ProductList.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : activeTab === 'All'
      ? ProductList
      : ProductList.filter(categoryMatches)

  const VISIBLE_COUNT = 8
  const visibleItems = activeTab === 'All' && !searchQuery
    ? filteredItems.slice(0, VISIBLE_COUNT)
    : filteredItems

  const renderCards = visibleItems.map((product) => (
    <Cards
      key={product.id}
      id={product.id}
      image={product.image}
      name={product.name}
      price={product.price}
      onAddToCart={onAddToCart}
      onNavigate={onNavigate}
    />
  ))

  return (
    <section id='products'>
      <div className='max-w-[1400px] mx-auto px-10 py-20'>
        <Heading highlight='Our' heading='Products' />
        {/* tabs */}
        <div className='flex flex-wrap gap-10 justify-center mt-10'>
          {categories.map((category, index) => (
            <button
              key={`${category}-${index}`}
              className={`rounded px-4 py-2 font-bold ${
                activeTab === category
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
              onClick={() => onCategorySelect(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-9 mt-20 '>
          {renderCards}
        </div>
        {searchQuery && (
          <div className='mt-6 text-center text-sm text-zinc-600'>
            {filteredItems.length > 0
              ? `Showing results for "${searchQuery}"`
              : `No products found for "${searchQuery}"`}
          </div>
        )}
        <div className='flex justify-center mt-15 mx-auto'>
          <Button content="View All" />
        </div>
      </div>
    </section>
  )
}

export default Products


