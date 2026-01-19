import { useState } from 'react'
import Hero from '../components/Hero'
import imgCard from '../assets/images/img-card.png'
import imgHp from '../assets/images/img-hp.png'
import { HiTag, HiChevronDown } from 'react-icons/hi2'
import { MdOutlineSafetyCheck, MdPayment  } from "react-icons/md";
import { TbRosetteDiscountFilled } from "react-icons/tb";


function TabunganLescadana() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const advantages = [
    {
      text: "Bank Lescadana tempat menaruh tabungan aman di masa depan Anda yang terjamin aman dengan bunga kompetitif dan persyaratan mudah untuk siapapun"
    },
    {
      text: "Nikmati kebebasan finansial yang sesungguhnya fleksibel dalam genggaman dan bisa dicairkan kapan saja tanpa drama."
    },
    {
      text: "Bunga harian, cair kapan saja. Kelola dana lebih fleksibel tanpa batasan waktu penarikan"
    }
  ]

  const faqs = [
    {
      question: "Apa keuntungan menabung di Bank Lescadana?",
      answer: "dana tabungan akan di jamin keamanannya dan bunga tabungan/deposito relatif lebih tinggi dari bank umum"
    },
    {
      question: "Berapa suku bunga untuk Tabungan?",
      answer: "suku bunga untuk tabungan adalah 2%"
    },
    {
      question: "Apa saja persyaratan untuk pembukaan rekening tabungan?",
      answer: "untuk perorangan dibutuhkan ktp dan npwp untukbadan hukum di butuhkan ktp dan npwp pengurus (direksi dan dewan komisaris) serta dokumen pendukung legalitas usaha lainnya"
    },
    {
      question: "Berapa setoran awal minimal pembukaan rekening di Bank Lescadana",
      answer: "Setoran awal pembukaan rekening perorangan minimal Rp.50.000 (lima puluh ribu rupiah) dan untuk badan hukum minimal Rp. 500.000 (lima ratus ribu rupiah."
    }
  ]

  return (
    <div className="min-h-screen bg-brand-background">
      <Hero 
        title="Tabungan Lescadana Batam"
        description="Penarikan dana kapan saja dan Lescadana siap mendukung Anda untuk mencapai cita-cita terbesar Anda"
        image={imgCard}
        buttonText="Buka Tabungan"
      />

      {/* Keunggulan Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-brand-text mb-16">
            Keunggulan Tabungan di Lescadana Batam
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side: Phone Image */}
            <div className="flex justify-center order-2 lg:order-1">
              <img 
                src={imgHp} 
                alt="Mobile App" 
                className="w-full max-w-[300px] md:max-w-md h-auto object-contain drop-shadow-xl"
              />
            </div>

            {/* Right side: Advantages List */}
            <div className="space-y-12 lg:space-y-10 order-1 lg:order-2 py-8">
              {advantages.map((item, index) => (
                <div 
                  key={index}
                  className="relative bg-white p-6 md:p-8 rounded-[20px] shadow-card-advantage border-[#D9D9D9] border-[1px] transition-transform hover:scale-[1.01]"
                >
                  {/* Floating Icon Container */}
                  <div className="absolute -top-6 -left-4 md:-left-8 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-white rounded-full z-10">
                    <div className="text-brand-gold drop-shadow-sm">
                      {index === 0 && <MdOutlineSafetyCheck className="w-10 h-10 md:w-14 md:h-14"/>}
                      {index === 1 && <MdPayment  className="w-10 h-10 md:w-14 md:h-14" />}
                      {index === 2 && <TbRosetteDiscountFilled className="w-10 h-10 md:w-14 md:h-14" />}
                    </div>
                  </div>
                  
                  <div className="pl-8 md:pl-10">
                    <p className="text-sm md:text-base text-brand-text leading-relaxed font-medium">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fasilitas Section */}
      <section className="bg-white py-16 md:py-24 border-t border-gray-100">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-text decoration-2 mb-4">
              Tabungan Dengan Ragam Fasilitas Terbaik
            </h2>
            <p className="text-lg text-brand-text font-medium">
              Hadir untuk Memberikan Yang Terbaik
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Di Rekomendasikan Untuk */}
            <div>
              <h3 className="text-xl font-bold text-brand-text mb-8 text-center md:text-left">
                Di Rekomendasikan Untuk
              </h3>
              <div className="flex flex-col gap-6 items-center md:items-start">
                <div className="bg-brand-gold px-8 py-4 rounded-full shadow-facility-shadow max-w-md text-center">
                  <p className="text-white text-sm md:text-base font-medium">
                    Nasabah yang ingin mulai usaha dari penghasilan pribadi
                  </p>
                </div>
                <div className="bg-brand-gold px-8 py-4 rounded-full shadow-facility-shadow max-w-md text-center">
                  <p className="text-white text-sm md:text-base font-medium">
                    Nasabah dengan jumlah uang cukup besar yang perlu diamankan untuk jaminan masa depan keluarga.
                  </p>
                </div>
                <div className="bg-brand-gold px-12 py-3 rounded-full shadow-facility-shadow inline-block">
                  <p className="text-white text-sm md:text-base font-medium">
                    Semua Kalangan
                  </p>
                </div>
              </div>
            </div>

            {/* Dokumen Persyaratan */}
            <div>
              <h3 className="text-xl font-bold text-brand-text mb-8 text-center md:text-left">
                Dokumen Persyaratan
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-brand-gold px-6 py-3 rounded-full shadow-facility-shadow text-center">
                  <p className="text-white text-sm font-medium">Kartu Tanda Penduduk</p>
                </div>
                <div className="bg-brand-gold px-6 py-3 rounded-full shadow-facility-shadow text-center">
                  <p className="text-white text-sm font-medium">NPW</p>
                </div>
                <div className="bg-brand-gold px-6 py-3 rounded-full shadow-facility-shadow text-center">
                  <p className="text-white text-sm font-medium">Kartu Keluarga</p>
                </div>
                <div className="bg-brand-gold px-6 py-3 rounded-full shadow-facility-shadow text-center">
                  <p className="text-white text-sm font-medium">Formulir Pendaftaran</p>
                </div>
              </div>
              <div className="flex justify-center md:justify-start">
                <div className="bg-brand-gold px-8 py-4 rounded-[30px] shadow-facility-shadow max-w-xs text-center">
                  <p className="text-white text-sm font-medium italic">
                    Hubungi tim Sales Lescadana untuk proses pembukaan rekening tabungan hari ini juga
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-brand-background py-16 md:py-24 overflow-hidden">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-brand-text mb-16">
            Apa Saja yang Ditanyakan
          </h2>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className={`
                  bg-card-background p-6 rounded-[15px] shadow-card-shadow border-white border-[0.67px] 
                  cursor-pointer transition-all duration-300 h-fit
                  ${index % 2 === 1 ? 'md:mt-12' : ''}
                `}
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <div className="flex justify-between items-center gap-4">
                  <p className="text-brand-text font-bold text-sm md:text-base">
                    {faq.question}
                  </p>
                  <HiChevronDown 
                    className={`
                      w-5 h-5 text-brand-text flex-shrink-0 transition-transform duration-300
                      ${openFaq === index ? 'rotate-180' : ''}
                    `}
                  />
                </div>
                
                <div 
                  className={`
                    overflow-hidden transition-all duration-300
                    ${openFaq === index ? 'max-h-40 mt-4' : 'max-h-0'}
                  `}
                >
                  <p className="text-brand-text text-sm md:text-base border-t border-gray-100 pt-4 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default TabunganLescadana
