import { Button } from './Button'
import heroImage from '../assets/images/3d-money.png'

function Hero() {
  return (
    <section className="mx-auto max-w-8xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid items-center gap-8 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold tracking-tight text-brand-text sm:text-5xl md:text-6xl">
            Mari Wujudkan Kesuksesan Bersama Kami
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Dengan pelayanan yang profesional, solusi keuangan yang inovatif, dan
            tim yang berdedikasi, kami siap menjadi mitra Anda dalam perjalanan
            menuju kesuksesan finansial. Kami memahami kebutuhan unik setiap
            nasabah dan menyediakan beragam produk dan layanan yang dirancang
            khusus untuk memenuhi kebutuhan Anda.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
            <Button
              className="border-2 border-white bg-[#AA8549] text-white shadow-custom-gold"
            >
              Mulai Tabungan Lescadana
            </Button>
          </div>
        </div>
        <div className="flex justify-center max-lg:justify-center">
          <img
            src={heroImage}
            alt="3D Money Illustration"
            className="w-full max-w-md lg:max-w-none"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
