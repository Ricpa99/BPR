import womanImage from '../assets/images/image-4.png'

function Reason() {
  const reasons = [
    {
      title: 'Produk Lengkap',
      description:
        'Layanan beragam termasuk tabungan, deposito, berbagai jenis kredit dan pembelian emas yang mudah, semua produk kami dapat memenuhi kebutuhan Anda dan mengembangkan usaha Anda',
    },
    {
      title: 'Terus Berenovasi',
      description:
        'Kami selalu mencari peluang baru dan mencoba untuk memberikan anda produk dan layanan yang paling bermanfaat dan menguntungkan mengikuti perkem zaman',
    },
    {
      title: 'Tim Berdedikasi',
      description:
        'Tim selalu berdedikasi untuk melayani dengan ramah profesional dan selalu mengutamakan bebutuhan dan kepuasan nasabah',
    },
    {
      title: 'Layanan Terbaik',
      description:
        'Bank Lescadana ingin bekerja sama dengan anda sekaligus memberikan ke untungan yang maksimal kami memberikan penawaran yang kompetetif dengan persyaratan kredit mudah dan jelas',
    },
  ]

  return (
    <section className="mx-auto bg-white max-w-8xl px-4 pt-1 sm:px-6 lg:px-8">
      <h2 className="mb-8 text-center text-3xl font-bold text-brand-text">
        Alasan memilih Lescadana Batam
      </h2>
      <div className="grid items-center gap-8 lg:grid-cols-3">
        <div className="space-y-8 lg:space-y-0 lg:flex lg:flex-col lg:gap-8">
          <div className="rounded-xl bg-brand-gold p-2 text-white lg:rounded-none lg:rounded-br-3xl lg:rounded-tl-3xl lg:rounded-bl-md lg:rounded-tr-md lg:p-3 text-center">
            <h3 className="mb-2 text-xl font-bold">{reasons[0].title}</h3>
            <p>{reasons[0].description}</p>
          </div>
          <div className="rounded-xl bg-brand-gold p-2 text-white lg:rounded-none lg:rounded-br-3xl lg:rounded-tl-3xl lg:rounded-bl-md lg:rounded-tr-md lg:p-3 text-center">
            <h3 className="mb-2 text-xl font-bold">{reasons[2].title}</h3>
            <p>{reasons[2].description}</p>
          </div>
        </div>
        <div className="flex justify-center lg:order-none order-last self-end">
          <img
            src={womanImage}
            alt="Woman with credit card and phone"
            className="w-full max-w-sm"
          />
        </div>
        <div className="space-y-8 lg:space-y-0 lg:flex lg:flex-col lg:gap-8">
          <div className="rounded-xl bg-brand-gold p-2 text-white lg:rounded-none lg:rounded-bl-3xl lg:rounded-tr-3xl lg:rounded-br-md lg:rounded-tl-md lg:p-3 text-center">
            <h3 className="mb-2 text-xl font-bold">{reasons[1].title}</h3>
            <p>{reasons[1].description}</p>
          </div>
          <div className="rounded-xl bg-brand-gold p-2 text-white lg:rounded-none lg:rounded-bl-3xl lg:rounded-tr-3xl lg:rounded-br-md lg:rounded-tl-md lg:p-3 text-center">
            <h3 className="mb-2 text-xl font-bold">{reasons[3].title}</h3>
            <p>{reasons[3].description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reason
