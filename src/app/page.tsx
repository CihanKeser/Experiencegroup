
import Link from "next/link";
import { Zap, Wrench, Droplet, Phone, MapPin, Clock } from "lucide-react";
import { Navigation } from "@/components/Navigation";

export default function Home() {
  const services = [
    {
      icon: Zap,
      title: "Elektrik Malzemeleri",
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
    {
      icon: Droplet,
      title: "Su Tedariği",
      description: "Bardak, şişe ve damacana su tedariği",
      color: "text-orange-500",
      details: "Temiz ve hijyenik su ürünleri",
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
              Experince Group
            </h1>
            <p className="text-xl md:text-2xl text-orange-400 mb-6 drop-shadow-md">
              Elektrik • Lastik & Jant • Su Tedariği
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
      <section id="hizmetler" className="py-20 px-4 bg-white">
        <div className="max-w-full mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Hizmetlerimiz
            </h2>
            <p className="text-gray-600 text-lg">
              Uzman ekibimizle işletmenizin tüm ihtiyaçlarını karşılamak için hazırız
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={i}
                  className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-orange-500 hover:shadow-2xl transition duration-300 group"
                >
                  <div className="bg-orange-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-500 transition">
                    <Icon className={`${service.color} w-8 h-8 group-hover:text-white transition`} />
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <p className="text-gray-500 text-sm">{service.details}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-full mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="bg-white p-6 rounded-lg text-center shadow-md">
                <div className="text-5xl mb-3">{feature.icon}</div>
                <h3 className="text-lg font-bold text-black mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 px-4 bg-black text-white">
        <div className="max-w-full mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex items-start gap-4">
              <Phone className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-2">Telefon</h3>
                <p className="text-gray-300">+90 xxx xxx xx xx</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-2">Adres</h3>
                <p className="text-gray-300">Cevizli, Denizer Cd. no:4/A, 34865 Kartal/İstanbul</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-2">Çalışma Saatleri</h3>
                <p className="text-gray-300">Pzt-Cum: 09:00 - 18:00</p>
              </div>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-gray-700">
            <Link
              href="/iletisim"
              className="inline-block bg-orange-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
            >
              İletişime Geçin
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4">
        <div className="max-w-full mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-3">Experince Group</h3>
              <p className="text-sm">Elektrik, lastik-jant ve su tedariği konusunda güvenilir ortağınız</p>
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
            <p>&copy; 2026 Experince Group. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
