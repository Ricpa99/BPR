import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import logoBpr from '../assets/images/logo-BPR.png'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="relative bg-white shadow-md">
      <div className="mx-auto flex max-w-8xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <a href="#">
            <img
              src={logoBpr}
              alt="Bank Lescadana"
              className="h-10 w-auto sm:h-12 md:h-16"
            />
          </a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 text-sm font-medium text-brand-text lg:flex">
          <a href="#" className="inline-flex items-center gap-1">
            <span>Produk Kami</span>
            <ChevronDown className="h-4 w-4" />
          </a>
          <a href="#" className="inline-flex items-center gap-1">
            <span>Kredit</span>
            <ChevronDown className="h-4 w-4" />
          </a>
          <a href="#" className="inline-flex items-center gap-1">
            <span>Laporan</span>
            <ChevronDown className="h-4 w-4" />
          </a>
          <a href="#" className="inline-flex items-center gap-1">
            <span>Hubungi Kami</span>
            <ChevronDown className="h-4 w-4" />
          </a>
          <a href="#">Library</a>
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
          <a href="#" className="inline-flex items-center justify-between">
            <span>Produk Kami</span>
            <ChevronDown className="h-4 w-4" />
          </a>
          <a href="#" className="inline-flex items-center justify-between">
            <span>Kredit</span>
            <ChevronDown className="h-4 w-4" />
          </a>
          <a href="#" className="inline-flex items-center justify-between">
            <span>Laporan</span>
            <ChevronDown className="h-4 w-4" />
          </a>
          <a href="#" className="inline-flex items-center justify-between">
            <span>Hubungi Kami</span>
            <ChevronDown className="h-4 w-4" />
          </a>
          <a href="#">Library</a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
