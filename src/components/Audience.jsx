import { Users, Star } from 'lucide-react'

import mexico from '../assets/imgs/flags/mexico.webp'
import usa from '../assets/imgs/flags/usa.webp'
import colombia from '../assets/imgs/flags/colombia.webp'
import españa from '../assets/imgs/flags/españa.webp'
import argentina from '../assets/imgs/flags/argentina.webp'

import instagram from '../assets/imgs/icons/instagram.svg'
import facebook from '../assets/imgs/icons/facebook.webp'
import tiktok from '../assets/imgs/icons/tiktok.svg'
import youtube from '../assets/imgs/icons/youtube.webp'
import telegram from '../assets/imgs/icons/telegram.svg'


import bg1 from '../assets/imgs/person/bg1.png'
import bg2 from '../assets/imgs/person/bg2.png'
import signature from '../assets/imgs/person/signature.png'




const STATS = [
    { icon: Users, value: '15,000,000+', label: 'Seguidores Totales' },
    { icon: Users, value: '1,000,000,000+', label: 'Vistas Totales' },
    { icon: Users, value: '300,000+', label: 'Vistas Promedio Diarias' },
]

const AGE_RANGES = [
    { label: '13-17', pct: 3 },
    { label: '18-24', pct: 27 },
    { label: '25-34', pct: 36 },
    { label: '35-44', pct: 18 },
    { label: '45-54', pct: 9 },
    { label: '55-64', pct: 4 },
    { label: '65+', pct: 3 },
]

const COUNTRIES = [
    { label: 'México', pct: 45, color: '#E5B34C', flag: mexico },
    { label: 'USA', pct: 21, color: '#8A8A8A', flag: usa },
    { label: 'España', pct: 15, color: '#5C4A2A', flag: españa },
    { label: 'Colombia', pct: 12, color: '#C9C9C9', flag: colombia },
    { label: 'Argentina', pct: 7, color: '#3A3A3A', flag: argentina },
]

const SOCIALS = [
    { icon: youtube, name: 'YouTube', value: '4M+', suffix: 'Seguidores', color: '#FF0000', href: 'https://www.youtube.com/@dominguero/videos' },
    { icon: instagram, name: 'Instagram', value: '2M+', suffix: 'Seguidores', color: '#E1306C', href: 'https://www.instagram.com/dominguero/?hl=es-la' },
    { icon: tiktok, name: 'TikTok', value: '3.5M+', suffix: 'Seguidores', color: '#25F4EE', href: 'https://www.tiktok.com/@domingueroficial?lang=es' },
    { icon: facebook, name: 'Facebook', value: '5M+', suffix: 'Seguidores', color: '#1877F2', href: 'https://www.facebook.com/Dominguero/?locale=es_LA' },
    { icon: telegram, name: 'Telegram', value: '60K+', suffix: 'Suscriptores', color: '#29A9EA', href: '#' }, // ⚠️ pendiente: falta la URL de Telegram
]

function Donut({ segments, size = 176, thickness = 26 }) {
    let acc = 0
    const stops = segments
        .map((s) => {
            const start = acc
            acc += s.pct
            return `${s.color} ${start}% ${acc}%`
        })
        .join(', ')

    return (
        <div
            className="relative rounded-full shrink-0"
            style={{ width: size, height: size, background: `conic-gradient(${stops})` }}
        >
            <div className="absolute rounded-full bg-bg" style={{ inset: thickness }} />
        </div>
    )
}

function ChartBlock({ title, children, className = '' }) {
    return (
        <div className={`py-8 ${className}`}>
            <h3 className="font-display text-lg tracking-wide mb-6">{title}</h3>
            {children}
        </div>
    )
}

export default function Audience() {
    return (
        <div id="audiencia" className="scroll-mt-24">
            <p className="text-gold text-xs font-bold tracking-[0.2em] mb-3">AUDIENCIA</p>
            <h2 className="font-display text-3xl sm:text-4xl tracking-wide leading-tight max-w-2xl">
                COMUNIDAD REAL,<br />
                <span className="text-gold-light">ORGÁNICA Y COMPROMETIDA.</span>
            </h2>
            <p className="text-white/70 leading-relaxed mt-5 max-w-2xl">
                Más de 15 millones de personas siguen su contenido porque les aporta valor, entretenimiento
                e inspiración para mejorar su vida. Estos son los datos de su audiencia en{' '}
                <a href="#" className="text-gold-light underline underline-offset-2">todas las plataformas</a>.
            </p>


            <div id="resultados" className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10 scroll-mt-24">
                {STATS.map(({ icon: Icon, value, label }) => (
                    <div
                        key={label}
                        className="group card-panel p-6 flex flex-col items-center text-center border border-transparent transition-all duration-300 hover:border-gold/60 hover:-translate-y-1 hover:shadow-[0_8px_30px_-8px_rgba(229,179,76,0.35)] cursor-pointer"
                    >
                        <Icon
                            size={26}
                            className="text-gold mb-3 transition-all duration-300 group-hover:text-gold-light group-hover:scale-110"
                            strokeWidth={1.75}
                        />
                        <span className="font-display text-4xl text-gold-light transition-colors duration-300 group-hover:text-white">
                            {value}
                        </span>
                        <span className="text-xs text-white/60 tracking-wide uppercase mt-1 transition-colors duration-300 group-hover:text-white/80">
                            {label}
                        </span>
                    </div>
                ))}
            </div>


            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 border-t border-line mt-4">
                <ChartBlock title="GÉNERO" className="lg:border-r lg:border-line lg:pr-10">
                    <div className="flex flex-col sm:flex-row items-center gap-8">
                        <Donut segments={[{ pct: 81, color: '#E5B34C' }, { pct: 19, color: '#2A2A2A' }]} size={200} thickness={30} />
                        <div className="flex flex-row sm:flex-col gap-8 w-full sm:w-auto justify-center sm:justify-start">
                            <div>
                                <span className="font-display text-4xl sm:text-5xl text-gold-light block">81%</span>
                                <span className="text-sm text-white/60 uppercase tracking-wide">Hombres</span>
                            </div>
                            <div>
                                <span className="font-display text-4xl sm:text-5xl text-white/80 block">19%</span>
                                <span className="text-sm text-white/60 uppercase tracking-wide">Mujeres</span>
                            </div>
                        </div>
                    </div>
                </ChartBlock>

                <ChartBlock title="RANGO DE EDAD">
                    <div className="space-y-4">
                        {AGE_RANGES.map(({ label, pct }) => (
                            <div key={label} className="flex items-center gap-4">
                                <span className="text-sm text-white/60 w-12 shrink-0">{label}</span>
                                <div className="flex-1 h-2.5 rounded-full bg-white/10 overflow-hidden">
                                    <div
                                        className="h-full rounded-full bg-gradient-to-r from-gold to-gold-light"
                                        style={{ width: `${pct}%` }}
                                    />
                                </div>
                                <span className="text-sm text-white/70 w-10 text-right shrink-0">{pct}%</span>
                            </div>
                        ))}
                    </div>
                </ChartBlock>
            </div>


            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 border-t border-line">
                <ChartBlock title="PRINCIPALES PAÍSES" className="lg:border-r lg:border-line lg:pr-10">
                    <div className="flex flex-col sm:flex-row items-center gap-8">
                        <Donut segments={COUNTRIES} size={200} thickness={30} />
                        <ul className="w-full flex-1 space-y-4 min-w-0">
                            {COUNTRIES.map(({ label, pct, flag, color }) => (
                                <li key={label} className="flex items-center gap-3">
                                    <img src={flag} alt={label} className="w-7 h-5 object-cover rounded-sm shrink-0" />
                                    <span className="text-sm text-white/70 w-16 sm:w-20 shrink-0 truncate">{label}</span>
                                    <div className="flex-1 min-w-0 h-2.5 rounded-full bg-white/10 overflow-hidden">
                                        <div
                                            className="h-full rounded-full"
                                            style={{ width: `${pct}%`, backgroundColor: color }}
                                        />
                                    </div>
                                    <span className="text-sm text-white/90 font-semibold w-9 text-right shrink-0">{pct}%</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </ChartBlock>



                <ChartBlock title="SUS REDES SOCIALES">
                    <div className="space-y-3">
                        {SOCIALS.map(({ icon, name, value, suffix, color, href }) => (
                            <a
                                key={name}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ '--brand': color, '--brand-glow': `${color}59` }}
                                className="group card-panel px-5 py-4 flex items-center gap-4 border border-transparent transition-all duration-300 hover:border-[color:var(--brand)] hover:-translate-y-1 hover:shadow-[0_8px_30px_-8px_var(--brand-glow)] cursor-pointer"
                            >
                                <span
                                    className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                                    style={{ backgroundColor: `${color}22` }}
                                >
                                    <img src={icon} alt={name} className="w-7 h-7 object-contain" />
                                </span>
                                <span className="text-sm font-bold uppercase tracking-wide text-white/90 w-24 sm:w-28 shrink-0 transition-colors duration-300 group-hover:text-white">
                                    {name}
                                </span>
                                <div className="flex-1 flex items-center justify-center gap-2">
                                    <span className="font-display text-3xl sm:text-4xl leading-none text-gold-light transition-colors duration-300 group-hover:text-[color:var(--brand)]">
                                        {value}
                                    </span>
                                    <span className="text-xs text-white/50 uppercase tracking-wide transition-colors duration-300 group-hover:text-white/70">
                                        {suffix}
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>
                </ChartBlock>
            </div >


            <div className="mt-12 relative overflow-hidden rounded-xl border border-line min-h-[360px] lg:min-h-[430px] flex items-center">

                <div className="absolute inset-0">
                    <img
                        src={bg2}
                        alt="Dubai Skyline"
                        className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/25" />
                    <div className="absolute inset-0 bg-black/10" />
                </div>


                <div className="relative z-10 w-full max-w-5xl px-8 sm:px-14 sm:pr-52 lg:pr-64 py-16">


                    <div className="absolute -top-8 left-3 select-none pointer-events-none">
                        <span className="font-serif text-[180px] sm:text-[240px] lg:text-[290px] leading-none text-gold-light/25">
                            "
                        </span>
                    </div>

                    <h3 className="relative text-2xl sm:text-3xl lg:text-4xl font-display leading-[1.15] tracking-wide text-white max-w-xl sm:max-w-2xl lg:max-w-2xl">
                        El objetivo no es solo ganar dinero en los mercados;
                        <br />
                        es construir{" "}
                        <span className="text-gold-light">
                            libertad
                        </span>
                        , generar{" "}
                        <span className="text-gold-light">
                            impacto
                        </span>{" "}
                        y tomar el control de tu{" "}
                        <span className="text-gold-light">
                            futuro financiero.
                        </span>
                    </h3>

                </div>

                <img
                    src={signature}
                    alt="Firma de Dominguero"
                    className="hidden sm:block absolute right-6 lg:right-14 top-1/2 -translate-y-1/2 h-16 lg:h-24 xl:h-28 w-auto opacity-90 z-10"
                />
            </div>


            <div className="mt-10 rounded-xl overflow-hidden border border-line relative min-h-[210px] flex items-center">
                <div className="absolute inset-0">
                    <img
                        src={bg1}
                        alt="Dominguero trabajando en su laptop en un ambiente cálido de oficina"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/85 to-bg/20" />
                </div>

                <div className="absolute -top-10 right-6 sm:right-10 select-none pointer-events-none">
                    <Star size={260} className="text-gold-light/10 sm:w-[320px] sm:h-[320px]" strokeWidth={1} fill="currentColor" />
                </div>

                <div className="relative z-10 flex items-center gap-4 px-8 sm:px-14 py-10 max-w-xl">
                    <Star size={28} className="text-gold shrink-0" strokeWidth={1.75} />
                    <div>
                        <h3 className="font-display text-xl sm:text-2xl tracking-wide leading-tight">
                            AUDIENCIA REAL, ORGÁNICA<br className="hidden sm:block" /> Y COMPROMETIDA.
                        </h3>
                        <p className="text-white/70 leading-relaxed mt-3 text-sm sm:text-base">
                            Una comunidad que confía, se inspira y participa cada día en el contenido.
                        </p>
                    </div>
                </div>
            </div>
        </div >
    )
}