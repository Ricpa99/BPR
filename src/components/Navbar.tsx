import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, X } from 'lucide-react'
import logoBpr from '../assets/images/logo-BPR.png'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProdukOpen, setIsProdukOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleProduk = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsProdukOpen(!isProdukOpen)
  }

  const produkSubmenu = [
    { name: '', href: '/' },
    { name: 'Tabungan Lescadana', href: '/tabungan-lescadana' },
    { name: 'Deposito', href: '/deposito' },
    { name: 'KPM', href: '/kpm' },
    { name: 'KPR', href: '/kpr' },
    { name: 'Riplay', href: '/riplay' },
  ]

  const isProdukActive = produkSubmenu.some(item => location.pathname === item.href)

  const NavItem = ({ href, children, hasChevron = true }: { href: string; children: React.ReactNode; hasChevron?: boolean }) => {
    const active = location.pathname === href
    return (
      <Link 
        to={href} 
        className={`relative inline-flex items-center gap-1 py-2 hover:text-brand-gold transition-colors ${active ? 'text-brand-gold' : ''}`}
      >
        <span>{children}</span>
        {hasChevron && <ChevronDown className="h-4 w-4" />}
        {active && (
          <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-brand-gold rounded-full" />
        )}
      </Link>
    )
  }

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
              className={`relative inline-flex items-center gap-1 py-2 hover:text-brand-gold transition-colors ${isProdukActive ? 'text-brand-gold' : ''}`}
            >
              <span>Produk Kami</span>
              <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isProdukOpen ? 'rotate-180' : ''}`} />
              {isProdukActive && (
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-brand-gold rounded-full" />
              )}
            </button>
            
            {/* Desktop Dropdown */}
            {isProdukOpen && (
              <div className="absolute left-0 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  {produkSubmenu.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`block px-4 py-2 text-sm hover:bg-gray-100 hover:text-brand-gold ${location.pathname === item.href ? 'text-brand-gold bg-gray-50' : 'text-gray-700'}`}
                      onClick={() => setIsProdukOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <NavItem href="/kredit">Kredit</NavItem>
          <NavItem href="/laporan">Laporan</NavItem>
          <NavItem href="/hubungi-kami">Hubungi Kami</NavItem>
          <NavItem href="/library" hasChevron={false}>Library</NavItem>
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
              className={`flex w-full items-center justify-between py-2 ${isProdukActive ? 'text-brand-gold' : ''}`}
            >
              <span className="relative">
                Produk Kami
                {isProdukActive && (
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-brand-gold rounded-full" />
                )}
              </span>
              <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isProdukOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Mobile Dropdown */}
            {isProdukOpen && (
              <div className="mt-2 flex flex-col gap-2 pl-4 border-l-2 border-gray-100">
                {produkSubmenu.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`py-2 hover:text-brand-gold ${location.pathname === item.href ? 'text-brand-gold font-semibold' : 'text-gray-600'}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {[
            { name: 'Kredit', href: '/kredit', hasChevron: true },
            { name: 'Laporan', href: '/laporan', hasChevron: true },
            { name: 'Hubungi Kami', href: '/hubungi-kami', hasChevron: true },
            { name: 'Library', href: '/library', hasChevron: false },
          ].map((item) => (
            <Link 
              key={item.name}
              to={item.href} 
              className={`flex items-center justify-between py-2 ${location.pathname === item.href ? 'text-brand-gold' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="relative">
                {item.name}
                {location.pathname === item.href && (
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-brand-gold rounded-full" />
                )}
              </span>
              {item.hasChevron && <ChevronDown className="h-4 w-4" />}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
