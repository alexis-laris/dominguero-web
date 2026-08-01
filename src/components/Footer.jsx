import { FaInstagram, FaYoutube, FaTiktok, FaTelegram } from 'react-icons/fa6'
import { Mail, ArrowRight } from 'lucide-react'

const SOCIALS = [
  {
    icon: FaInstagram,
    label: 'Síguelo en Instagram',
    value: '@dominguero',
    href: 'https://www.instagram.com/dominguero/?hl=es-la',
  },
  {
    icon: FaYoutube,
    label: 'Síguelo en YouTube',
    value: '/dominguero',
    href: 'https://www.youtube.com/@dominguero/videos',
  },
  {
    icon: FaTiktok,
    label: 'Síguelo en TikTok',
    value: '@domingueroficial',
    href: 'https://www.tiktok.com/@domingueroficial?lang=es',
  },
  {
    icon: FaTelegram,
    label: 'Síguelo en Telegram',
    value: '@Dominguero',
    href: '#', // ⚠️ pendiente: falta la URL de Telegram
  },
]

export default function Footer() {
  return (
    <footer id="contacto" className="border-t border-line py-8">
      <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:flex lg:flex-1 gap-6 lg:gap-10">
          {SOCIALS.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
            >
              <span className="w-11 h-11 shrink-0 rounded-full border border-gold flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition">
                <Icon size={18} />
              </span>

              <span>
                <span className="font-display block text-md  tracking-wide text-white/50 uppercase">
                  {label}
                </span>
                <span className="font-display tracking-wide block text-lg  text-white">
                  {value}
                </span>
              </span>
            </a>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-6 lg:gap-10">
          <a
            href="mailto:marketing@dominguero.com"
            className="flex items-center gap-3 group"
          >
            <span className="w-11 h-11 shrink-0 rounded-full border border-gold flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition">
              <Mail size={18} />
            </span>

            <span>
              <span className="font-display tracking-wide block text-md text-white/50 uppercase">
                Contacto Comercial
              </span>
              <span className="font-display tracking-wide block text-lg text-white">
                marketing@dominguero.com
              </span>
            </span>
          </a>

          <a
            href="mailto:marketing@dominguero.com"
            className="btn-gold justify-center"
          >
            Contactar
            <ArrowRight size={16} />
          </a>
        </div>
      </div>

      <p className="text-center text-xs text-white/30 mt-10">
        © {new Date().getFullYear()} Dominguero. Todos los derechos reservados.
      </p>
    </footer>
  )
}