import binance from '../assets/imgs/brands/binance.png'
import bingx from '../assets/imgs/brands/bingx.png'
import bybit from '../assets/imgs/brands/bybit.png'
import crypto from '../assets/imgs/brands/crypto.png'
import kukoin from '../assets/imgs/brands/kukoin.webp'
import okx from '../assets/imgs/brands/okx.png'
import primexbt from '../assets/imgs/brands/primexbt.webp'

const BRANDS = [
  { name: 'Binance', logo: binance },
  { name: 'Bybit', logo: bybit },
  { name: 'KuCoin', logo: kukoin },
  { name: 'PrimeXBT', logo: primexbt },
  { name: 'BingX', logo: bingx },
  { name: 'OKX', logo: okx },
  { name: 'Crypto.com', logo: crypto },
]

export default function Brands() {
  return (
    <section id="marcas" className="py-14 border-t border-line text-center">
      <h2 className="font-display text-2xl tracking-wide text-gold-light mb-10">
        MARCAS CON LAS QUE HA TRABAJADO
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-4">
        {BRANDS.map(({ name, logo }) => (
          <div
            key={name}
            className="group flex items-center justify-center px-6 py-4 rounded-lg border border-transparent transition-all duration-300 hover:border-gold/60 hover:-translate-y-1 hover:shadow-[0_8px_30px_-8px_rgba(229,179,76,0.35)] cursor-pointer"
          >
            <img
              src={logo}
              alt={name}
              className="h-6 sm:h-7 w-auto object-contain transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
            />
          </div>
        ))}
      </div>
    </section>
  )
}