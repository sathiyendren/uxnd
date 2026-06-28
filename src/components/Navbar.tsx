import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { nav, person } from '../config/siteConfig'

export default function Navbar() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-line">
      <div className="page-container flex items-center justify-between h-16">
        <Link to="/" onClick={() => setOpen(false)}>
          <img src={person.logo} alt={person.shortName} className="h-10 w-auto object-contain" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${pathname.startsWith(item.path) ? 'nav-link-active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/resume" className="btn-primary text-xs py-2 px-5">
            Resume
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-gray-700 transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-0.5 w-6 bg-gray-700 transition-all ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-gray-700 transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-line bg-white px-6 py-4 flex flex-col gap-4">
          {nav.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link text-base ${pathname.startsWith(item.path) ? 'nav-link-active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/resume" className="btn-primary text-sm self-start" onClick={() => setOpen(false)}>
            Resume
          </Link>
        </div>
      )}
    </nav>
  )
}
