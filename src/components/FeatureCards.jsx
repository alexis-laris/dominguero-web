import { Star, Trophy, Target, Handshake } from 'lucide-react'

const FEATURES = [
  {
    icon: Star,
    title: 'Top Tier YouTuber',
    text: 'Uno de los youtubers de habla hispana con mayor influencia y alcance en múltiples nichos.',
  },
  {
    icon: Trophy,
    title: 'Impacto Que Transforma',
    text: 'Contenido que impulsa a millones de personas a mejorar su mentalidad, hábitos y situación financiera.',
  },
  {
    icon: Target,
    title: 'Educa Y Entretiene',
    text: 'Combina entretenimiento con valor real: finanzas, hábitos, consejos, coches, viajes y superación personal.',
  },
  {
    icon: Handshake,
    title: 'Alianzas Que Suman',
    text: 'Trabaja con marcas líderes que comparten sus valores y buscan impactar audiencias reales.',
  },
]

export default function FeatureCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {FEATURES.map(({ icon: Icon, title, text }) => (
        <div key={title} className="card-panel p-6">
          <Icon size={28} className="text-gold mb-4" strokeWidth={1.75} />
          <h3 className="font-display text-lg tracking-wide mb-2">{title.toUpperCase()}</h3>
          <p className="text-sm text-white/60 leading-relaxed">{text}</p>
        </div>
      ))}
    </div>
  )
}
