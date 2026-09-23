import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { images } from '../../data/images'

const links = [
  { to: '/', label: 'Početna' },
  { to: '/o-nama', label: 'O Nama' },
  { to: '/blog', label: 'KUUM Blog' },
  { to: '/podcast', label: 'KUP - Kulturno-Umetnički Podcast' },
  { to: '/dogadjaji', label: 'Događaji' },
  { to: '/projekti', label: 'Projekti' },
  { to: '/ljudi', label: 'Ljudi KUUM-A' },
  { to: '/kontakt', label: 'Kontakt' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Glavna navigacija">
        <Link className="brand" to="/">
          <img src={images.logo} alt="KUUM logo" />
          <span>KUUM</span>
        </Link>
        <button className="menu-toggle" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="primary-navigation">
          {open ? <X size={24} /> : <Menu size={24} />}
          <span className="sr-only">Otvori navigaciju</span>
        </button>
        <div id="primary-navigation" className={`nav-links ${open ? 'nav-links--open' : ''}`}>
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={({ isActive }) => (isActive ? 'active' : undefined)} end={link.to === '/'} onClick={() => setOpen(false)}>
              {link.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  )
}
