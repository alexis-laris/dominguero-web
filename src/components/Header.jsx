import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio', id: 'inicio' },
  { label: 'Sobre Mí', href: '#sobre-mi', id: 'sobre-mi' },
  { label: 'Audiencia', href: '#audiencia', id: 'audiencia' },
  { label: 'Resultados', href: '#resultados', id: 'resultados' },
  { label: 'Colaboraciones', href: '#colaboraciones', id: 'colaboraciones' },
  { label: 'Contacto', href: '#contacto', id: 'contacto' },
]

import telegram from '../assets/imgs/person/logo.png'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeId, setActiveId] = useState('inicio')

  return (
    <header className="sticky top-0 z-50 bg-bg/95 backdrop-blur border-b border-line font-Poppins">
      <div className="container-px max-w-[1400px] mx-auto flex items-center justify-between h-20">
        <a
          href="#inicio"
          onClick={() => setActiveId('inicio')}
          className="flex items-center gap-2"
        >
          <img
            src={telegram}
            alt="Logo Dominguero"
            className="w-10 h-10 object-cover"
          />
          <span className="font-display text-2xl tracking-wide">DOMINGUERO</span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = activeId === link.id
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setActiveId(link.id)}
                className={`relative py-2 text-sm tracking-wide transition ${isActive ? 'text-gold' : 'text-white/80 hover:text-gold'
                  }`}
              >
                {link.label}
                <span
                  className={`absolute left-0 -bottom-[1px]  bg-gold rounded-full transition-all duration-300 ${isActive ? 'w-full' : 'w-0'
                    }`}
                />
              </a>
            )
          })}
        </nav>

        <a href="#contacto" onClick={() => setActiveId('contacto')} className="hidden lg:inline-flex btn-gold font-Poppins">
          Trabaja Con Dominguero
        </a>

        <button
          className="lg:hidden relative w-8 h-8 text-white"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isMenuOpen}
        >
          <Menu
            size={28}
            className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'
              }`}
          />
          <X
            size={28}
            className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'
              }`}
          />
        </button>
      </div>

      {/* Menú mobile: posicionado absolute para NO empujar el layout ni alterar la altura del header al abrir/cerrar */}
      <nav
        className={`lg:hidden absolute top-full left-0 right-0 overflow-hidden border-t border-line bg-bg-soft transition-all duration-300 ease-out ${isMenuOpen ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
          }`}
      >
        <div className="container-px max-w-[1400px] mx-auto flex flex-col py-4">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => {
                setActiveId(link.id)
                setIsMenuOpen(false)
              }}
              style={{ transitionDelay: isMenuOpen ? `${i * 40}ms` : '0ms' }}
              className={`py-3 text-sm tracking-wide transition-all duration-300 border-b border-line/60 last:border-0 ${activeId === link.id ? 'text-gold' : 'text-white/80 hover:text-gold'
                } ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => {
              setActiveId('contacto')
              setIsMenuOpen(false)
            }}
            style={{ transitionDelay: isMenuOpen ? `${NAV_LINKS.length * 40}ms` : '0ms' }}
            className={`btn-gold mt-4 justify-center transition-all duration-300 ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
              }`}
          >
            Trabaja Con Dominguero
          </a>
        </div>
      </nav>
    </header>
  )
}