import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { images } from '../../data/images'

const links = [
  { to: '/', label: 'Početna' },
  { to: '/blog', label: 'KUUM Blog' },
  { to: '/podcast', label: 'KUP - Kulturno-Umetnički Podcast' },
  { to: '/dogadjaji', label: 'Događaji' },
  { to: '/projekti', label: 'Projekti' },
  { to: '/ljudi', label: 'Ljudi KUUM-A' },
  { to: '/kontakt', label: 'Kontakt' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Glavna navigacija">
        <Link className="brand" to="/" onClick={closeMenu}>
          <img src={images.logo} alt="KUUM logo" />
          <span>KUUM</span>
        </Link>
        <button
          className="menu-toggle"
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="primary-navigation"
          aria-label={open ? 'Zatvori navigaciju' : 'Otvori navigaciju'}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div id="primary-navigation" className={`nav-links ${open ? 'nav-links--open' : ''}`}>
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={({ isActive }) => (isActive ? 'active' : undefined)} end={link.to === '/'} onClick={closeMenu}>
              {link.label}
            </NavLink>
          ))}
        </div>
        <button className={`nav-backdrop ${open ? 'nav-backdrop--open' : ''}`} type="button" aria-label="Zatvori navigaciju" onClick={closeMenu} />
      </nav>
    </header>
  )
}
