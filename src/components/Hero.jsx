import { ArrowRight } from 'lucide-react'
import Stats from './Stats.jsx'

import main1 from '../assets/imgs/person/main1.png'
import main2 from '../assets/imgs/person/main2.png'

import signature from '../assets/imgs/person/signature2.png'

export default function Hero() {
  return (
    <section id="inicio" className="pt-12 lg:pt-16">
      <div className="relative rounded-md overflow-hidden border border-line min-h-[480px] sm:min-h-[520px] lg:min-h-[560px]">

        <div className="absolute inset-0">
          <picture>
            <source media="(min-width: 1024px)" srcSet={main1} />
            <img
              src={main2}
              alt="Dominguero retratado con un fondo de lujo: auto deportivo, jet privado, gráficos financieros y una playa paradisíaca"
              className="w-full h-full object-cover object-center lg:object-[65%_center]"
            />
          </picture>

          <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/90 sm:via-bg/15 to-bg/10" />

          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" />
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-8 items-center px-6 py-10 sm:px-10 sm:py-14 lg:py-20 h-full">
          <div>
            <h1 className="font-display leading-[0.95] tracking-wide">
              <span className="block text-3xl sm:text-4xl text-white/90">CONTENIDO DIFERENTE.</span>
              <span className="block text-4xl sm:text-5xl text-gold-light">IMPACTO REAL.</span>
            </h1>
            <img
              src={signature}
              alt="Firma de Dominguero"
              className="mt-5 h-12 sm:h-14 lg:h-16 w-auto opacity-95 select-none"
            />

            <p className="font-Poppins font-light tracking-normal text-white/70 leading-relaxed mt-4 max-w-md text-base sm:text-md">
              Dominguero crea contenido que inspira, motiva y enseña a millones de personas a
              superarse y tomar el control de su vida. Habla de lo que realmente importa:{' '}
              <span className="text-gold-light">hábitos</span>,{' '}
              <span className="text-gold-light">finanzas</span>,{' '}
              <span className="text-gold-light">automoción</span>,{' '}
              <span className="text-gold-light">viajes</span> y{' '}
              <span className="text-gold-light">mentalidad</span>.
            </p>

            <a href="#sobre-mi" className="btn-gold  tracking-wide mt-8">
              Conoce Más Sobre Él
              <ArrowRight size={16} />
            </a>
          </div>

          <Stats layout="sidebar" className="hidden lg:block" />
        </div>
      </div>
    </section>
  )
}