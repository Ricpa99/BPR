import { CalendarDays, ArrowRight } from 'lucide-react'
import newsImage1 from '../assets/images/home-img1.jpg'
import newsImage2 from '../assets/images/home-img2.jpg'
import newsImage3 from '../assets/images/home-img3.jpg'

const newsItems = [
  {
    date: '3 May 2024',
    title:
      'Grand Opening Gemilang BPR Lescadana Batam Membuka Lembaran Baru dalam Dunia Perbankan',
    description:
      'Kota Batam, pada Kamis tanggal 2 Mei 2024, menyaksikan momen bersejarah dalam peresmian kantor baru Bank Perkreditan Rakyat (BPR) Lescadana di Komplek Nagoya Thamrin City, Lubukbaja.',
    image: newsImage1,
  },
  {
    date: '22 September 2024',
    title:
      'Mengapa Bank Lescadana Batam Adalah Mitra Perbankan Terbaik Untuk Kredit Batam',
    description:
      'Dalam era ketidakpastian ekonomi saat ini, memilih mitra perbankan yang tepat untuk kebutuhan finansial Anda sangatlah penting. Di tengah berbagai pilihan bank yang tersedia, Bank ini menonjol sebagai mitra perbankan terbaik yang siap tumbuh kuat bersama Anda di Batam.',
    image: newsImage2,
  },
  {
    date: '15 Juni 2025',
    title: 'Mengapa Investasi di Deposito Penting Untuk Masa Depan Keuangan Anda',
    description:
      'Investasi adalah kunci untuk mencapai kestabilan keuangan jangka panjang. Salah satu bentuk investasi yang populer dan aman adalah deposito. Deposito adalah cara yang efektif untuk mengalokasikan dana Anda dengan bijaksana.',
    image: newsImage3,
  },
]

function News() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-brand-text">
            Berita Terbaik dari Tim Lescadana Batam
          </h2>
          <p className="mt-2 text-gray-600">
            Kami menyajikan informasi menarik terupdate mengenai ekonomi,
            Perbankan serta seputar Bank Lescadana Batam
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {newsItems.map((item) => (
            <div
              key={item.title}
              className="overflow-hidden rounded-lg border-2 border-white bg-card-background shadow-card-shadow"
            >
              {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-56 w-full object-cover"
                />
              )}
              <div className="flex flex-col p-6">
                <div className="flex-grow">
                  <div className="flex items-center text-sm text-gray-500">
                    <CalendarDays className="mr-2 h-4 w-4" />
                    <span>{item.date}</span>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-brand-text">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {item.description}
                  </p>
                </div>
                <a
                  href="#"
                  className="mt-6 inline-flex items-center self-start rounded-md bg-brand-gold px-4 py-2 text-sm font-semibold text-white"
                >
                  Read
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default News
