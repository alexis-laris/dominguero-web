import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import telegram from '../assets/imgs/person/logo.png'

const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio', id: 'inicio' },
  { label: 'Sobre Mí', href: '#sobre-mi', id: 'sobre-mi' },
  { label: 'Audiencia', href: '#audiencia', id: 'audiencia' },
  { label: 'Resultados', href: '#resultados', id: 'resultados' },
  { label: 'Colaboraciones', href: '#colaboraciones', id: 'colaboraciones' },
  { label: 'Contacto', href: '#contacto', id: 'contacto' },
]

const IDIOMAS = [
  { code: 'es', label: 'ES' },
  { code: 'en', label: 'EN' },
]

function SelectorIdioma({ idioma, className = '' }) {
  const cambiar = (code) => {
    if (code !== idioma) window.cambiarIdioma?.(code)
  }

  return (
    <div
      translate="no"
      className={`notranslate flex items-center border border-line rounded overflow-hidden text-xs font-semibold ${className}`}
    >
      {IDIOMAS.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => cambiar(code)}
          aria-label={code === 'es' ? 'Cambiar a español' : 'Switch to English'}
          className={`px-3 py-1.5 transition ${idioma === code ? 'bg-gold text-black' : 'text-white/70 hover:text-gold'
            }`}
        >
          {label}
        </button>
      ))}
    </div>
  )
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeId, setActiveId] = useState('inicio')
  const [idioma, setIdioma] = useState(() => window.idiomaActual || 'es')

  useEffect(() => {
    const actualizar = (e) => setIdioma(e.detail)
    window.addEventListener('idioma', actualizar)
    return () => window.removeEventListener('idioma', actualizar)
  }, [])

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
            className="w-14 h-14 object-cover"
          />
          <span translate="no" className="notranslate font-display text-2xl tracking-wide">
            DOMINGUERO
          </span>
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
                  className={`absolute left-0 -bottom-[1px] bg-gold rounded-full transition-all duration-300 ${isActive ? 'w-full' : 'w-0'
                    }`}
                />
              </a>
            )
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <SelectorIdioma idioma={idioma} />
          <a
            href="#contacto"
            onClick={() => setActiveId('contacto')}
            className="inline-flex btn-gold font-Poppins"
          >
            Trabaja Con Dominguero
          </a>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <SelectorIdioma idioma={idioma} />
          <button
            className="relative w-8 h-8 text-white"
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
      </div>


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