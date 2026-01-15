import { Instagram, Mail, MapPin, Phone, Globe } from "lucide-react";
import type { SVGProps } from "react";
import AyoKeBank from "../assets/images/Ayo-ke-bank.png";
import Bpr from "../assets/images/BPR.png";
import Reliance from "../assets/images/reliance-logo.png";
import Sinarmas from "../assets/images/sinarmas-logo.png";

const TikTokIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.05-4.86-.95-6.69-2.81-1.75-1.76-2.59-4.22-2.6-6.65.01-2.39 1.02-4.78 2.73-6.51 1.96-1.99 4.76-2.96 7.44-2.91v4.03c-1.44.05-2.89.35-4.2.97-.57-.26-1.1.59-1.62-.93-.01 2.92.01 5.84-.02 8.75.08 1.4.54 2.79 1.35 3.94 1.31 1.92 3.58 3.17 5.91 3.21 2.43.05 4.86-.95 6.69-2.81 1.75-1.76 2.59-4.22-2.6-6.65Z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-[#3B3A4C] text-white">
      <div className="mx-auto max-w-8xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 sm:items-start">
          {/* Hubungi Kami & Lokasi */}
          <div className="space-y-8 mr-14 max-md:mr-2">
            <div>
              <h3 className="text-xl font-bold">Hubungi Kami</h3>
              <p className="mt-2 text-sm text-gray-300">
                Temukan Cara Terbaik untuk Menghubungi Tim Kami dan Dapatkan
                Bantuan dalam menemukan layanan Perbankan yang tepat bagi
                bisnis anda
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Lokasi BPR Lescadana</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="flex items-start">
                  <MapPin className="mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                  <span>
                    Komplek Ruko Nagoya Thamrin City Blok D 5 - 6, Lubuk Baja,
                    Kota Batam 29444 - Indonesia
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone className="mr-2 h-5 w-5 flex-shrink-0" />
                  <span>(0778) 489 1999</span>
                </li>
                <li className="flex items-center">
                  <Phone className="mr-2 h-5 w-5 flex-shrink-0" />
                  <span>+62 822-8989-1999 (Layanan Pengaduan)</span>
                </li>
                <li className="flex items-center">
                  <Mail className="mr-2 h-5 w-5 flex-shrink-0" />
                  <span>info@bprlescadanabatam.co.id</span>
                </li>
                <li className="flex items-center">
                  <Phone className="mr-2 h-5 w-5 flex-shrink-0" />
                  <span>Call Center : (0778) 489 1999</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Sosial Media */}
          <div>
            <h3 className="text-xl font-bold">Sosial Media BPR Lescadana</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-center">
                <TikTokIcon className="mr-2 h-5 w-5 flex-shrink-0" />
                <span>@bprbatam</span>
              </li>
              <li className="flex items-center">
                <Globe className="mr-2 h-5 w-5 flex-shrink-0" />
                <span>BPRBatam.co.id</span>
              </li>
              <li className="flex items-center">
                <Instagram className="mr-2 h-5 w-5 flex-shrink-0" />
                <span>@BPRlescadana</span>
              </li>
            </ul>
          </div>

          {/* Mitra Asuransi */}
          <div>
            <h3 className="text-xl font-bold">Mitra Asuransi</h3>
            <div className="mt-4 grid grid-cols-2 max-md:grid-cols-1 max-md:justify-items-center max-md:gap-3 gap-[9rem] space-y-4">
              <img
                src={Sinarmas}
                alt="Sinarmas"
                className="h-18 w-auto max-w-[150px] object-contain"
              />
              <img
                src={Reliance}
                alt="Reliance Life"
                className="h-18 w-auto max-w-[150px] object-contain"
              />
            <img
              src={AyoKeBank}
              alt="Ayo ke Bank"
              className="h-16 w-auto max-w-[180px] object-contain"
            />
            <img
              src={Bpr}
              alt="BPR"
              className="h-24 w-auto max-w-[180px] object-contain"
            />
            </div>
          </div>
          {/* <div className="flex flex-col items-start  space-y-6">
          </div> */}
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 py-4">
        <div className="mx-auto max-w-6xl px-4 text-center text-sm text-gray-400 sm:px-6 lg:px-8">
          <p>
            Bank Lescadana Batam sudah Berizin dan di Awasi Oleh Otoritas Jasa
            Keuangan & Merupakan Peserta Program Penjaminan Simpanan
          </p>
          <p className="mt-2">
            Copyright © 2020 - {new Date().getFullYear()} PT BPR Lesca Dana Batam
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
