import { ArrowRight, Star, Trophy, Target, Handshake } from 'lucide-react'

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

export default function AboutMe() {
  return (
    <section id="sobre-mi" className="py-14 border-t border-line scroll-mt-20">
      <div className="flex items-center gap-3 mb-8">
        <span className="eyebrow-line" />
        <h2 className="font-display text-3xl tracking-wide">SOBRE DOMINGUERO</h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-8 items-start">

        <div className="w-full lg:w-[320px] shrink-0">
          <p className="text-white/70 leading-relaxed font-Poppins text-sm">
            Dominguero es emprendedor, inversionista y creador de contenido. Lleva más de 10 años
            creando contenido que entretiene, educa y motiva. Ha construido una comunidad leal y
            comprometida que busca mejorar su vida en todas las áreas.
          </p>
          <p className="text-white/70 leading-relaxed mt-4 font-Poppins text-sm">
            Su misión es simple: inspirar, aportar valor real y ayudar a las personas a tomar el
            control de su vida para que puedan alcanzar la libertad que merecen.
          </p>

          <a href="#trayectoria" className="btn-gold mt-8 font-Poppins">
            Más Sobre Su Historia
            <ArrowRight size={16} />
          </a>
        </div>


        <div className="flex flex-1 gap-5 w-full overflow-x-auto lg:overflow-visible">
          {FEATURES.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group card-panel p-6 flex-1 min-w-[180px] lg:min-w-0 flex flex-col items-center text-center border border-transparent transition-all duration-300 hover:border-gold/60 hover:-translate-y-1 hover:shadow-[0_8px_30px_-8px_rgba(229,179,76,0.35)] cursor-pointer"
            >
              <Icon
                size={26}
                className="text-gold mb-4 transition-all duration-300 group-hover:text-gold-light group-hover:scale-110"
                strokeWidth={1.75}
              />
              <h3 className="font-display text-2xl tracking-wide mb-2 leading-snug transition-colors duration-300 group-hover:text-white">
                {title.toUpperCase()}
              </h3>
              <p className=" text-white/60 leading-relaxed transition-colors duration-300 group-hover:text-white/80 font-Poppins text-sm">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}