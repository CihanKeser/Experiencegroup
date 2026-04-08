
import Link from "next/link";
import { Zap, Wrench, Droplet, Phone, MapPin, Clock } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Map } from "../components/Map";

export default function Home() {
  const services = [
    {
      icon: Zap,
      title: "Elektrik & Hırdavat Malzemeleri",
      description: "Yüksek kaliteli ve orijinal elektrik malzemeleri tedariği",
      color: "text-orange-500",
      details: "Kablolar, şaltolar, kutular ve tüm elektrik malzemeleri",
    },
    {
      icon: Wrench,
      title: "Lastik & Jant Servisi",
      description: "Bakım, tamir, satım ve değişim hizmetleri",
      color: "text-orange-500",
      details: "Profesyonel bakım ve tamir hizmetleri",
    },

  ];
  const features = [
    { icon: "🎯", title: "Kaliteli Ürünler", desc: "Orijinal ve sertifikeli ürünler" },
    { icon: "⚡", title: "Hızlı Teslimat", desc: "Kısa zamanda teslimat" },
    { icon: "💰", title: "Uygun Fiyat", desc: "Rekabetçi fiyatlandırma" },
    { icon: "🤝", title: "Profesyonel Hizmet", desc: "Deneyimli ekip desteği" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Hero Hero Section */}
      <section
        className="relative bg-auto bg-center bg-no-repeat h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url('/images/1.jpg')`,
          backgroundSize: "100% 110%",
        }}
      >
        {/* <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <div className="max-w-full mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              Experience Group
            </h1>
            <p className="text-xl md:text-2xl text-orange-400 mb-6 drop-shadow-md">
              Elektrik • Lastik & Jant 
            </p>
            <Link
              href="/iletisim"
              className="inline-block bg-orange-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
            >
              Hemen İletişime Geçin
            </Link>
          </div>
        </div> */}
      </section>

      {/* Services Section */}  
      <section id="hizmetler" className="py-12 px-6 bg-gray-50">
         <div className="w-full max-w-screen-2xl mx-auto">

    {/* Başlık */}
    <div className="text-center mb-10">
      <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
        Hizmetlerimiz
      </h2>
    </div>

    {/* Grid */}
    <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-2 gap-8">

      {services.map((service, i) => {
        const Icon = service.icon;

        return (
          <div
            key={i}
            className="group bg-white border border-gray-200 rounded-xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >

            {/* Icon */}
            <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-lg bg-orange-100 group-hover:bg-orange-500 transition">
              <Icon className="w-8 h-8 text-orange-500 group-hover:text-white transition" />
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-black mb-3">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 mb-4 leading-relaxed">
              {service.description}
            </p>

            {/* Details */}
            <p className="text-gray-500 text-sm">
              {service.details}
            </p>

            {/* Alt hover çizgi */}
            <div className="mt-6 h-1 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full rounded"></div>

          </div>
        );
      })}

    </div>
  </div>
        <div className="flex grid-cols-2 px-4 gap-4  mx-auto">
          <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
            <div className="relative p-2.5 h-96 overflow-hidden rounded-xl bg-clip-border">
              <img
                src="https://tr.xzforgedwheels.com/uploads/202022056/forged-wheel-rims26484275296.jpg"
                alt="card-image"
                className="h-full w-full object-cover rounded-md transition-transform duration-500 hover:scale-140"
              />
            </div>
            <div className="p-4">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-slate-800 text-xl font-semibold">
                  TAKIM JANT
                </p>
                <p className="text-cyan-600 text-xl font-semibold">
                  ₺
                </p>
              </div>
              <p className="text-slate-600 leading-normal font-light">
                4 adet 18 inç takım jant. Yüksek kaliteli malzemelerden üretilmiş. Aracınıza mükemmel uyum sağlar ve sürüş deneyiminizi artırır.
              </p>
              <button className="rounded-md w-full mt-6 bg-cyan-600 py-2 px-4 text-white transition-all hover:bg-cyan-700">
                Experience Group'tan Satın Alın
              </button>
            </div>
          </div>
          <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
            <div className="relative p-2.5 h-96 overflow-hidden rounded-xl bg-clip-border">
              <img
                src="https://jantdunyasi.com/cdn/shop/files/emr-g691-01-6-0x14-4x100-et35-67-1-silver-jant-4-adet-4401901.jpg?v=1761641091"
                alt="card-image"
                className="h-full w-full object-cover rounded-md transition-transform duration-500 hover:scale-140"
              />
            </div>
            <div className="p-4">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-slate-800 text-xl font-semibold">
                  TAKIM JANT
                </p>
                <p className="text-cyan-600 text-xl font-semibold">
                  ₺
                </p>
              </div>
              <p className="text-slate-600 leading-normal font-light">
                4 adet 18 inç takım jant. Yüksek kaliteli malzemelerden üretilmiş. Aracınıza mükemmel uyum sağlar ve sürüş deneyiminizi artırır.
              </p>
              <button className="rounded-md w-full mt-6 bg-cyan-600 py-2 px-4 text-white transition-all hover:bg-cyan-700">
                Experience Group'tan Satın Alın
              </button>
            </div>
          </div>
          <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
            <div className="relative p-2.5 h-96 overflow-hidden rounded-xl bg-clip-border">
              <img
                src="https://png.pngtree.com/thumb_back/fh260/background/20230720/pngtree-3d-rendered-alloy-wheel-for-cars-against-black-background-image_3703427.jpg"
                alt="card-image"
                className="h-full w-full object-cover rounded-md transition-transform duration-500 hover:scale-120"
              />
            </div>
            <div className="p-4">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-slate-800 text-xl font-semibold">
                  TAKIM JANT
                </p>
                <p className="text-cyan-600 text-xl font-semibold">
                  ₺
                </p>
              </div>
              <p className="text-slate-600 leading-normal font-light">
                4 adet 18 inç takım jant. Yüksek kaliteli malzemelerden üretilmiş. Aracınıza mükemmel uyum sağlar ve sürüş deneyiminizi artırır.
              </p>
              <button className="rounded-md w-full mt-6 bg-cyan-600 py-2 px-4 text-white transition-all hover:bg-cyan-700">
                Experience Group'tan Satın Alın
              </button>
            </div>
          </div>
          <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
            <div className="relative p-2.5 h-96 overflow-hidden rounded-xl bg-clip-border">
              <img
                src="https://jantdunyasi.com/cdn/shop/files/emr-165-06-6-0x14-4x100-et35-67-1-black-polished-jant-4-adet-216083.jpg?v=1692856425"
                alt="card-image"
                className="h-full w-full object-cover rounded-md transition-transform duration-500 hover:scale-140"
              />
            </div>
            <div className="p-4">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-slate-800 text-xl font-semibold">
                  TAKIM JANT
                </p>
                <p className="text-cyan-600 text-xl font-semibold">
                  ₺
                </p>
              </div>
              <p className="text-slate-600 leading-normal font-light">
                4 adet 18 inç takım jant. Yüksek kaliteli malzemelerden üretilmiş. Aracınıza mükemmel uyum sağlar ve sürüş deneyiminizi artırır.
              </p>
              <button className="rounded-md w-full mt-6 bg-cyan-600 py-2 px-4 text-white transition-all hover:bg-cyan-700">
                Experience Group'tan Satın Alın
              </button>
            </div>
          </div>
          <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
            <div className="relative p-2.5 h-96 overflow-hidden rounded-xl bg-clip-border">
              <img
                src="https://tr.xzforgedwheels.com/uploads/202022056/forged-wheel-rims26484275296.jpg"
                alt="card-image"
                className="h-full w-full object-cover rounded-md transition-transform duration-500 hover:scale-140"
              />
            </div>
            <div className="p-4">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-slate-800 text-xl font-semibold">
                  TAKIM JANT
                </p>
                <p className="text-cyan-600 text-xl font-semibold">
                  ₺
                </p>
              </div>
              <p className="text-slate-600 leading-normal font-light">
                4 adet 18 inç takım jant. Yüksek kaliteli malzemelerden üretilmiş. Aracınıza mükemmel uyum sağlar ve sürüş deneyiminizi artırır.
              </p>
              <button className="rounded-md w-full mt-6 bg-cyan-600 py-2 px-4 text-white transition-all hover:bg-cyan-700">
                Experience Group'tan Satın Alın
              </button>
            </div>
          </div>
        </div>
      </section>

     <section className="py-12 px-6 bg-gray-50">
  <div className="w-full max-w-screen-2xl mx-auto">

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

      {features.map((feature, i) => (
        <div
          key={i}
          className="group relative bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
        >

          {/* İkon */}
          <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-orange-100 text-orange-500 text-3xl transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
            {feature.icon}
          </div>

          {/* Başlık */}
          <h3 className="text-lg font-bold text-black mb-2 text-center">
            {feature.title}
          </h3>

          {/* Açıklama */}
          <p className="text-gray-600 text-sm leading-relaxed text-center">
            {feature.desc}
          </p>

          {/* Alt çizgi hover efekti */}
          <div className="absolute bottom-0 left-0 w-0 h-1 bg-orange-500 transition-all duration-300 group-hover:w-full rounded-b-xl"></div>

        </div>
      ))}

    </div>

  </div>
</section>

      {/* Contact Info Section */}
      <div className="max-w-full mx-auto">
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-black text-center">İletişim Bilgilerimiz</h2>
            <div className="text-center pt-4 border-t border-gray-700">
            </div>
            <div>
              <div>
                <div className="grid grid-cols-2 items-center max-w-3xl mx-auto">
                  {/* Sol */}
                  <div className="flex items-center gap-1 justify-center">
                    <Clock className="w-8 h-8 text-orange-500 flex-shrink-0" />
                    <h3 className="font-bold text-black">Çalışma Saati:</h3>
                    <p className="font-bold text-black">Pzt-Cmt: 09:00-18:00</p>
                  </div>
                  {/* Sağ */}
                  <div className="flex items-center gap-1 justify-center">
                    <Phone className="w-8 h-8 text-orange-500 flex-shrink-0" />
                    <h3 className="font-bold text-black">Telefon:</h3>
                    <p className="font-bold text-black">0216 371 48 66</p>
                  </div>
                </div>
              </div>
            </div>
            <Map
              latitude={40.8732}
              longitude={29.3043}
              title="Experience Group"
              address="Cevizli, Denizer Cd. no:4/A, 34865 Kartal, İstanbul"
            />
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4">
        <div className="max-w-full mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-3">Experience Group</h3>
              <p className="text-sm">Elektrik, lastik-jant konusunda güvenilir ortağınız</p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-3">Hızlı Linkler</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/#hizmetler" className="hover:text-orange-500">Hizmetler</Link></li>
                <li><Link href="/hakkinda" className="hover:text-orange-500">Hakkında</Link></li>
                <li><Link href="/iletisim" className="hover:text-orange-500">İletişim</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-3">Dış Bağlantılar</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-orange-500">Facebook</a></li>
                <li><a href="#" className="hover:text-orange-500">Instagram</a></li>
                <li><a href="#" className="hover:text-orange-500">Telefon</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center text-sm pt-8 border-t border-gray-700">
            <p>&copy; 2026 Experience Group. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
