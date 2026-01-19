import Hero from '../components/Hero'
import News from '../components/News'
import {Features} from '../components/Features'
import Reason from '../components/Reason'
import heroImage from '../assets/images/3d-money.png'

function HomePage() {
  return (
    <>
      <Hero 
        title="Mari Wujudkan Kesuksesan Bersama Kami"
        description="Dengan pelayanan yang profesional, solusi keuangan yang inovatif, dan tim yang berdedikasi, kami siap menjadi mitra Anda dalam perjalanan menuju kesuksesan finansial."
        image={heroImage}
        buttonText="Mulai Tabungan Lescadana"
      />
      <Features />
      <Reason />
      <News />
    </>
  )
}

export default HomePage
