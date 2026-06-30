import { useState } from 'react'
import { GoHeartFill } from 'react-icons/go'
import { HiMiniShoppingBag } from 'react-icons/hi2'
import { IoMdSearch } from 'react-icons/io'
import { TbMenu2 } from 'react-icons/tb'
import { AiOutlineClose } from 'react-icons/ai'

const Navbar = ({ onNavigate, onSearch }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const navLinks = [
    { label: 'Home', page: 'home' },
    { label: 'About Us', page: 'about' },
    { label: 'Contact Us', page: 'contact' },
  ]

  return (
    <header className='fixed top-0 right-0 left-0 z-50 bg-white shadow-sm'>
      <nav className='max-w-[1400px] mx-auto px-4 md:px-10 md:h-[14vh] h-[12vh] flex justify-between items-center bg-white'>
        <a href='#' className='text-3xl font-bold'>
          Gr<span className='text-orange-500 uppercase'>o</span>cify
        </a>

        <ul className='hidden md:flex items-center gap-x-14'>
          {navLinks.map((link) => (
            <li key={link.label}>
              <button
                type='button'
                onClick={() => onNavigate(link.page)}
                className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className='flex items-center gap-x-4'>
          <form
            className='hidden md:flex p-1 border-2 border-orange-500 rounded-full'
            onSubmit={(event) => {
              event.preventDefault()
              if (searchTerm.trim()) {
                onSearch?.(searchTerm.trim())
              }
            }}
          >
            <input
              type='text'
              name='search'
              id='search'
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder='Search...'
              autoComplete='off'
              className='flex-1 h-[5vh] px-3 focus:outline-none'
            />
            <button
              type='submit'
              className='bg-gradient-to-b from-orange-400 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl'
            >
              <IoMdSearch />
            </button>
          </form>

          <a href='#' className='text-zinc-800 text-2xl'>
            <GoHeartFill />
          </a>

          <button
            type='button'
            onClick={() => onNavigate('cart')}
            className='text-zinc-800 text-2xl'
            aria-label='Open cart'
          >
            <HiMiniShoppingBag />
          </button>

          <button
            type='button'
            onClick={() => setIsMobileOpen((prev) => !prev)}
            className='text-zinc-800 text-3xl md:hidden focus:outline-none'
            aria-expanded={isMobileOpen}
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          >
            {isMobileOpen ? <AiOutlineClose /> : <TbMenu2 />}
          </button>
        </div>
      </nav>

      <div className={`md:hidden overflow-hidden bg-white transition-all duration-300 ${isMobileOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <ul className='flex flex-col gap-y-4 px-6 py-4 border-t border-zinc-200'>
          {navLinks.map((link) => (
            <li key={link.label}>
              <button
                type='button'
                onClick={() => {
                  onNavigate(link.page)
                  setIsMobileOpen(false)
                }}
                className='block w-full text-left font-semibold tracking-wider text-zinc-800 hover:text-orange-500'
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
