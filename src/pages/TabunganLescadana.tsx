import Hero from '../components/Hero'
import imgCard from '../assets/images/img-card.png'
import imgHp from '../assets/images/img-hp.png'
import { HiTag } from 'react-icons/hi2'
import { MdOutlineSafetyCheck, MdPayment  } from "react-icons/md";
import { TbRosetteDiscountFilled } from "react-icons/tb";
function TabunganLescadana() {
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
                  className="relative bg-white p-6 md:p-8 rounded-[20px] shadow-card-advantage border-[#D9D9D9] border-[0.5px] transition-transform hover:scale-[1.01]"
                >
                  {/* Floating Icon Container */}
                  <div className="absolute -top-6 -left-4 md:-left-8 w-14 h-14 md:w-20 md:h-20 flex items-center justify-center">
                    <div className="text-brand-gold drop-shadow-sm">
                      {index === 0 && <MdOutlineSafetyCheck className="w-10 h-10 md:w-14 md:h-14" />}
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
    </div>
  )
}

export default TabunganLescadana
