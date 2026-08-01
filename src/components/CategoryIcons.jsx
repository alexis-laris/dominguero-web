import { TrendingUp, CircleDollarSign, Car, Plane, Dumbbell, UserRound, Lightbulb } from 'lucide-react'

const CATEGORIES = [
  { icon: TrendingUp, label: 'Finanzas' },
  { icon: CircleDollarSign, label: 'Inversiones' },
  { icon: Car, label: 'Automoción' },
  { icon: Plane, label: 'Viajes' },
  { icon: Dumbbell, label: 'Hábitos' },
  { icon: UserRound, label: 'Desarrollo Personal' },
  { icon: Lightbulb, label: 'Consejos Prácticos' },
]

export default function CategoryIcons() {
  return (
    <div className="font-Poppins grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-y-8 gap-x-4 py-10 border-t border-line">
      {CATEGORIES.map(({ icon: Icon, label }) => (
        <div
          key={label}
          className={`group flex flex-col items-center gap-3 text-center p-3 rounded-lg border border-transparent transition-all duration-300 hover:border-gold/60 hover:-translate-y-1 hover:shadow-[0_8px_30px_-8px_rgba(229,179,76,0.35)] cursor-pointer ${label === 'Consejos Prácticos' ? 'hidden lg:flex' : 'flex'
            }`}
        >
          <Icon
            size={46}
            className="text-gold transition-all duration-300 group-hover:text-gold-light group-hover:scale-110"
            strokeWidth={1.75}
          />
          <span className="text-sm font-bold tracking-wide text-white/80 transition-colors duration-300 group-hover:text-white">
            {label}
          </span>
        </div>
      ))}
    </div>
  )
}