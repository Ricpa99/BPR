import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, Menu, X } from 'lucide-react'
import logoBpr from '../assets/images/logo-BPR.png'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProdukOpen, setIsProdukOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleProduk = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsProdukOpen(!isProdukOpen)
  }

  const produkSubmenu = [
    { name: 'Tabungan Lescadana', href: '/tabungan-lescadana' },
    { name: 'Deposito', href: '/deposito' },
    { name: 'KPM', href: '/kpm' },
    { name: 'KPR', href: '/kpr' },
    { name: 'Riplay', href: '/riplay' },
  ]

  return (
    <header className="relative bg-white shadow-md z-50">
      <div className="mx-auto flex max-w-8xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link to="/">
            <img
              src={logoBpr}
              alt="Bank Lescadana"
              className="h-10 w-auto sm:h-12 md:h-16"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 text-sm font-medium text-brand-text lg:flex">
          <div className="relative group">
            <button 
              onClick={toggleProduk}
              className="inline-flex items-center gap-1 hover:text-brand-gold transition-colors"
            >
              <span>Produk Kami</span>
              <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isProdukOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Desktop Dropdown */}
            {isProdukOpen && (
              <div className="absolute left-0 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  {produkSubmenu.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-brand-gold"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link to="#" className="inline-flex items-center gap-1">
            <span>Kredit</span>
            <ChevronDown className="h-4 w-4" />
          </Link>
          <Link to="#" className="inline-flex items-center gap-1">
            <span>Laporan</span>
            <ChevronDown className="h-4 w-4" />
          </Link>
          <Link to="#" className="inline-flex items-center gap-1">
            <span>Hubungi Kami</span>
            <ChevronDown className="h-4 w-4" />
          </Link>
          <Link to="#">Library</Link>
        </nav>

        {/* Hamburger Button */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-brand-text focus:outline-none"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`absolute left-0 w-full bg-white shadow-md lg:hidden ${
          isMenuOpen
            ? 'opacity-100 visible translate-y-0'
            : 'opacity-0 invisible -translate-y-2'
        } transition-all duration-300 ease-in-out`}
      >
        <div className="flex flex-col gap-4 px-4 pb-4 pt-2 text-sm font-medium text-brand-text">
          <div>
            <button 
              onClick={toggleProduk}
              className="flex w-full items-center justify-between"
            >
              <span>Produk Kami</span>
              <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isProdukOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Mobile Dropdown */}
            {isProdukOpen && (
              <div className="mt-2 flex flex-col gap-2 pl-4">
                {produkSubmenu.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="py-2 text-gray-600 hover:text-brand-gold"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link to="#" className="inline-flex items-center justify-between">
            <span>Kredit</span>
            <ChevronDown className="h-4 w-4" />
          </Link>
          <Link to="#" className="inline-flex items-center justify-between">
            <span>Laporan</span>
            <ChevronDown className="h-4 w-4" />
          </Link>
          <Link to="#" className="inline-flex items-center justify-between">
            <span>Hubungi Kami</span>
            <ChevronDown className="h-4 w-4" />
          </Link>
          <Link to="#">Library</Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
