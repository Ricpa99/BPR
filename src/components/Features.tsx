import { AreaChart, HandCoins, Landmark } from 'lucide-react'

const features = [
  {
    name: 'Kredit Pinjaman',
    description: 'Tersedia layanan pinjaman dengan bunga mulai 8%',
    icon: HandCoins,
  },
  {
    name: 'Deposit',
    description: 'Investasi paling aman dengan bunga deposito paling menarik',
    icon: AreaChart,
  },
  {
    name: 'Tabungan',
    description: 'Menabung dengan aman dan dijamin oleh LPS',
    icon: Landmark,
  },
]

export function Features() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-8xl">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name} className="flex flex-col items-center">
              <feature.icon className="h-12 w-12 text-brand-gold" />
              <h3 className="mt-6 text-lg font-semibold text-brand-text">
                {feature.name}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-text sm:text-4xl">
            Solusi Sempurna Untuk Semua Kebutuhan Keuangan Anda
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-gray-600">
            Kami menyediakan jajaran layanan perbankan inovatif dan terpercaya
            yang dirancang khusus untuk memenuhi kebutuhan individu dan bisnis.
            Dengan tim yang berdedikasi, teknologi canggih, dan komitmen terhadap
            kepuasan pelanggan, kami berdedikasi untuk memberikan pengalaman
            perbankan yang luar biasa.
          </p>
        </div>
      </div>
    </section>
  )
}
