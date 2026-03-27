import Link from "next/link";
import { Navigation } from "../../components/Navigation";

export default function Hakkinda() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Page Title */}
      

      {/* About Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-black">Biz Kimiz?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Experince Group, 2000'li yıllardan itibaren elektrik malzemeleri, lastik-jant servisleri 
                alanında hizmet veren köklü bir firmadır. Deneyimli ekibimiz ve kaliteli 
                ürünlerimizle müşterilerimizin güvenini kazanmıştır.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Her bir iş kolunda uzmanlaşmış personelimiz size en iyi hizmeti sunmak için 
                çalışmaktadır.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-black">Misyonumuz</h2>
              <p className="text-gray-600 leading-relaxed">
                Müşterilerimizin ihtiyacına göre en kaliteli ve etkili çözümler sunmak, 
                uzun vadeli iş ilişkileri kurmak ve müşteri memnuniyetini her zaman ön planda tutmaktır.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-black">Vizyonumuz</h2>
              <p className="text-gray-600 leading-relaxed">
                Sektörde öncü ve güvenilir bir marka olmak, teknolojik gelişmeleri takip etmek 
                ve müşteri beklentilerini aşan hizmetler sunmaktır.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-black">Neden Biz?</h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold">✓</span>
                  <span>Uzun yılların tecrübesi ve güvenilir hizmet</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold">✓</span>
                  <span>Yüksek kaliteli ürün ve malzeme</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold">✓</span>
                  <span>Profesyonel ve deneyimli ekip</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold">✓</span>
                  <span>Hızlı ve güvenilir teslimat</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold">✓</span>
                  <span>Uygun fiyat ve esnek ödeme seçenekleri</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-500 text-black py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">İş İlişkisi Kurmak İster Misiniz?</h2>
          <p className="text-lg mb-8">
            Bize ulaşın ve nasıl size yardımcı olabileceğimizi değerlendirelim
          </p>
          <Link
            href="/iletisim"
            className="inline-block bg-black text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition"
          >
            İletişime Geçin
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>&copy; 2026 Experince Group. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  );
}
