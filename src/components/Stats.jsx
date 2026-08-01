import { Users, Youtube, Eye, ArrowRight } from 'lucide-react'

const STAT_ITEMS = [
  { icon: Users, value: '+15,000,000', label: 'Seguidores Totales' },
  { icon: Youtube, value: '+1,000,000,000', label: 'Vistas Totales' },
  { icon: Eye, value: '+300,000', label: 'Vistas Promedio Diarias' },
]

export default function Stats({ layout = 'sidebar', className = '' }) {
  const isRow = layout === 'row'

  return (
    <div className={className}>
      <div className={isRow ? 'grid grid-cols-1 sm:grid-cols-3 gap-4' : 'flex flex-col gap-4'}>
        {STAT_ITEMS.map(({ icon: Icon, value, label }) => (
          <div
            key={label}
            className="card-panel flex items-center gap-4 p-5 border border-transparent transition-all duration-300 hover:border-gold/60 hover:-translate-y-1 hover:shadow-[0_8px_30px_-8px_rgba(229,179,76,0.35)] group cursor-pointer"
          >
            <span className="shrink-0 w-11 h-11 rounded-full border border-gold flex items-center justify-center text-white transition-all duration-300 group-hover:bg-gold group-hover:text-black group-hover:scale-110">
              <Icon size={20} />
            </span>
            <div>
              <p className="font-display text-3xl leading-none text-gold-light tracking-wide transition-colors duration-300 group-hover:text-white">{value}</p>
              <p className="text-xs font-semibold tracking-wide text-white/60 mt-1 transition-colors duration-300 group-hover:text-white/80">{label}</p>
            </div>
          </div>
        ))}
      </div>

      {!isRow && (
        <a href="#resultados" className="btn-gold w-full justify-center mt-4">
          Ver Estadísticas Completas
          <ArrowRight size={16} />
        </a>
      )}
    </div>
  )
}