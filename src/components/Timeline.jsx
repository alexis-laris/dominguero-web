import { Youtube, TrendingUp, Users, Globe, Star, Crown, ChevronDown } from 'lucide-react'

const MILESTONES = [
  {
    year: '2018',
    icon: Youtube,
    text: 'Comienza en YouTube compartiendo su pasión por los coches, finanzas y estilo de vida.',
  },
  {
    year: '2019',
    icon: TrendingUp,
    text: 'El contenido conecta y la comunidad crece rápidamente. Empieza a diversificar temas y formatos.',
  },
  {
    year: '2020',
    icon: Users,
    text: 'Expande su alcance a nivel internacional y consolida una audiencia comprometida en múltiples plataformas.',
  },
  {
    year: '2021',
    icon: Globe,
    text: 'Colaboraciones con marcas globales y creación de contenido con mayor impacto y propósito.',
  },
  {
    year: '2022 - 2024',
    icon: Star,
    text: 'Consolidación como referente en habla hispana. Nuevos proyectos, inversiones y un enfoque más estratégico.',
  },
  {
    year: '2026',
    icon: Crown,
    text: 'Cambio a un rumbo más corporativo, serio y empresarial, enfocado en construir legado y escalar impacto.',
  },
]

export default function Timeline() {
  return (
    <section id="trayectoria" className="py-14 border-t border-line">
      <div className="flex items-center gap-3 mb-10">
        <span className="eyebrow-line" />
        <h2 className="font-display text-2xl sm:text-3xl tracking-wide text-gold-light">
          SU TRAYECTORIA
        </h2>
      </div>

      <div className="relative">
        <div className="hidden lg:block absolute top-6 left-0 right-0 h-px bg-gold-dark/50" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4">
          {MILESTONES.map(({ year, icon: Icon, text }, i) => (
            <div
              key={year}
              className="group relative flex flex-col items-center text-center p-4 rounded-lg border border-transparent transition-all duration-300 hover:border-gold/60 hover:-translate-y-1 hover:shadow-[0_8px_30px_-8px_rgba(229,179,76,0.35)] cursor-pointer"
            >
              <span className="w-12 h-12 rounded-full border-2 border-gold bg-bg flex items-center justify-center text-gold z-10 transition-all duration-300 group-hover:border-gold-light group-hover:text-gold-light group-hover:scale-110 group-hover:shadow-[0_0_16px_-2px_rgba(229,179,76,0.6)]">
                <Icon size={20} />
              </span>
              <p className="font-display text-lg text-gold-light tracking-wide mt-3 transition-colors duration-300 group-hover:text-white">
                {year}
              </p>
              <p className="text-sm text-white/60 leading-relaxed mt-2 lg:max-w-[180px] transition-colors duration-300 group-hover:text-white/80">
                {text}
              </p>

              {i < MILESTONES.length - 1 && (
                <ChevronDown size={22} className="block lg:hidden text-gold-dark/60 mt-6" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}