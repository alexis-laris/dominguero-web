import { Car, TrendingUp, Plane, UserRound, Rocket, Handshake, Compass, Flame, Award } from 'lucide-react'

import beach1 from '../assets/imgs/person/beach1.png'
import beach2 from '../assets/imgs/person/beach2.png'

import signature from '../assets/imgs/person/signature.png'

const ACTIVITIES = [
    { icon: Car, title: 'Automoción', text: 'Contenido sobre coches, experiencias y estilo de vida relacionado con el mundo motor.' },
    { icon: TrendingUp, title: 'Finanzas e Inversiones', text: 'Educación financiera, inversiones, trading y estrategias para generar ingresos online.' },
    { icon: Plane, title: 'Viajes y Lifestyle', text: 'Viajes, lugares increíbles y experiencias que inspiran a salir de la zona de confort.' },
    { icon: UserRound, title: 'Desarrollo Personal', text: 'Hábitos, mentalidad, disciplina y todo lo que lo ayuda a ser su versión más completa.' },
    { icon: Rocket, title: 'Emprendimiento', text: 'Negocios, mentalidad emprendedora y estrategias para crear proyectos con propósito.' },
    { icon: Handshake, title: 'Colaboraciones', text: 'Crea alianzas estratégicas con marcas que comparten sus valores y buscan hacer las cosas diferente.' },
]

const PILLARS = [
    { icon: Compass, title: 'Autenticidad', text: 'Comparte su vida y experiencias reales, sin filtros ni guiones.' },
    { icon: Flame, title: 'Constancia', text: 'Más de 8 años creando contenido sin parar, incluso en los momentos difíciles.' },
    { icon: Award, title: 'Resultados', text: 'Cada proyecto que lidera busca un impacto medible en su audiencia.' },
]

function SectionNumber({ n }) {
    return (
        <div className="flex items-center gap-3 mb-3">
            <span className="text-gold font-display text-sm tracking-[0.2em]">{n}</span>
            <span className="h-px flex-1 max-w-[40px] bg-line" />
        </div>
    )
}

function QuoteBar({ children }) {
    return (
        <div className="relative mt-10 overflow-hidden rounded-xl border border-line min-h-[210px] flex items-center">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#111111] to-[#181818]" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
            <div className="absolute -top-10 left-4 select-none pointer-events-none">
                <span className="font-serif text-[220px] sm:text-[280px] lg:text-[330px] leading-none text-gold-light/20">
                    "
                </span>
            </div>
            <div className="relative z-10 w-full px-8 sm:px-14 py-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
                {children}
            </div>
        </div>
    )
}

function PillarsBar() {
    return (
        <div
            className="
                flex lg:grid lg:grid-cols-3 gap-4
                overflow-x-auto lg:overflow-visible
                pb-4 -mx-4 px-4 lg:mx-0 lg:px-0 lg:pb-0
                [&::-webkit-scrollbar]:h-1.5
                [&::-webkit-scrollbar-track]:bg-transparent
                [&::-webkit-scrollbar-thumb]:bg-gold-dark/40
                [&::-webkit-scrollbar-thumb]:rounded-full
            "
        >
            {PILLARS.map(({ icon: Icon, title, text }) => (
                <div
                    key={title}
                    className="group card-panel p-6 flex flex-col items-center text-center border border-transparent transition-all duration-300 hover:border-gold/60 hover:-translate-y-1 hover:shadow-[0_8px_30px_-8px_rgba(229,179,76,0.35)] cursor-pointer shrink-0 w-[240px] lg:w-auto"
                >
                    <span className="w-12 h-12 rounded-full border border-gold flex items-center justify-center text-gold mb-4 transition-all duration-300 group-hover:bg-gold group-hover:text-black group-hover:scale-110">
                        <Icon size={22} strokeWidth={1.75} />
                    </span>
                    <h3 className="font-display text-xl tracking-wide mb-2 leading-snug text-gold-light transition-colors duration-300 group-hover:text-white">
                        {title.toUpperCase()}
                    </h3>
                    <p className="font-Poppins text-sm text-white/60 leading-relaxed transition-colors duration-300 group-hover:text-white/80">
                        {text}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default function Journey() {
    return (
        <div className="space-y-16">

            <div id="sobre-mi" className="scroll-mt-24">
                <SectionNumber n="01" />
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-12 items-center">
                    <div>
                        <h2 className="font-display text-3xl sm:text-4xl tracking-wide leading-tight">
                            ¿QUIÉN ES<br />
                            <span className="text-gold-light">DOMINGUERO?</span>
                        </h2>

                        <p className="text-white/70 leading-relaxed mt-6 font-Poppins text-sm">
                            Juan Domingo es emprendedor, inversionista y creador de contenido.
                        </p>
                        <p className="text-white/70 leading-relaxed mt-4 font-Poppins text-sm">
                            Lleva más de 10 años creando contenido que entretiene, educa e inspira a millones de
                            personas en todo el mundo.
                        </p>
                        <p className="text-white/70 leading-relaxed mt-4 font-Poppins text-sm">
                            Comenzó compartiendo su pasión por los coches y el estilo de vida, y con el tiempo su
                            contenido evolucionó hacia un enfoque más amplio: inversiones, negocios, desarrollo
                            personal, viajes y hábitos.
                        </p>
                        <p className="text-white/70 leading-relaxed mt-4 font-Poppins text-sm ">
                            Vive entre Dubái y distintos países del mundo, rodeado de empresarios, inversores y
                            creadores que lo desafían a pensar más grande y a seguir creciendo.
                        </p>
                        <QuoteBar>
                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display leading-[1.2] tracking-wide text-white max-w-3xl">
                                No habla desde la teoría. Habla desde la{' '}
                                <span className="text-gold-light font-semibold">experiencia</span>.
                            </h3>

                            <img
                                src={signature}
                                alt="Firma de Dominguero"
                                className="h-14 sm:h-20 w-auto opacity-90 shrink-0 self-end"
                            />
                        </QuoteBar>
                    </div>

                    <div className="relative aspect-[4/3] rounded-md overflow-hidden border border-line bg-bg-card">
                        <img
                            src={beach1}
                            alt="Dominguero trabajando de noche frente a gráficos financieros en su oficina"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>

            <PillarsBar />

            <div id="colaboraciones" className="scroll-mt-24">
                <SectionNumber n="02" />
                <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.2fr] gap-8 lg:gap-12 items-start">
                    <div className="relative aspect-[3/4] lg:aspect-auto lg:h-full rounded-md overflow-hidden border border-line bg-bg-card">
                        <img
                            src={beach2}
                            alt="Dominguero de espaldas observando el skyline de Dubái junto a un auto deportivo"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div>
                        <h2 className="font-display text-3xl sm:text-4xl tracking-wide leading-tight">
                            ¿A QUÉ SE DEDICA<br />
                            <span className="text-gold-light">DOMINGUERO?</span>
                        </h2>

                        <p className="text-white/70 leading-relaxed mt-6 max-w-xl font-Poppins text-sm">
                            Es inversor y emprendedor, apasionado por los negocios y las nuevas oportunidades. A través de su contenido,
                            combina entretenimiento, educación y motivación para inspirar a su comunidad.
                        </p>
                        <p className="text-white/70 leading-relaxed mt-4 max-w-xl font-Poppins text-sm">
                            Su objetivo es ayudar a las personas a mejorar su vida a través de información real,
                            experiencias y herramientas prácticas.
                        </p>
                        <p className="text-white/70 leading-relaxed mt-4 max-w-xl font-Poppins text-sm">
                            Trabaja con marcas de diferentes industrias para crear campañas auténticas que
                            conectan con su audiencia y generan resultados reales para ambas partes.
                        </p>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
                            {ACTIVITIES.map(({ icon: Icon, title, text }) => (
                                <div
                                    key={title}
                                    className="group card-panel p-5 flex flex-col items-center text-center border border-transparent transition-all duration-300 hover:border-gold/60 hover:-translate-y-1 hover:shadow-[0_8px_30px_-8px_rgba(229,179,76,0.35)] cursor-pointer"
                                >
                                    <Icon
                                        size={32}
                                        className="text-gold mb-3 transition-all duration-300 group-hover:text-gold-light group-hover:scale-110"
                                        strokeWidth={1.75}
                                    />
                                    <h3 className="font-display text-xl tracking-wide mb-1.5 leading-snug transition-colors duration-300 group-hover:text-white">
                                        {title.toUpperCase()}
                                    </h3>
                                    <p className="font-Poppins text-sm text-white/55 leading-relaxed transition-colors duration-300 group-hover:text-white/75">
                                        {text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <QuoteBar>
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display leading-[1.2] tracking-wide text-white max-w-3xl">
                            Su misión es simple: <span className="text-gold-light font-semibold">inspirar, aportar valor real y ayudar</span> a las personas a tomar el
                            control de su vida para que puedan alcanzar la <span className="text-gold-light font-semibold">libertad que merecen.</span>
                        </h3>

                        <img
                            src={signature}
                            alt="Firma de Dominguero"
                            className="h-14 sm:h-20 w-auto opacity-90 shrink-0 self-end"
                        />
                    </QuoteBar>
                </div>
            </div>

        </div>
    )
}