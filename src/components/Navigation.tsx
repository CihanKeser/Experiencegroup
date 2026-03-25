import Link from "next/link";

export function Navigation() {
  return (
    <nav className="absolute top-0 left-0 w-full text-white z-50 ">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-3xl font-bold text-orange-500 pt-2">
            Experince Group
          </Link>
          <div className="hidden md:flex gap-4">
            <Link href="/#hizmetler" className="px-4 py-2 bg-black/90 border border-white/20 rounded-lg text-white font-medium hover:bg-orange-500 hover:border-orange-500 transition-all duration-300">
              Hizmetler
            </Link>
            <Link href="/iletisim" className="px-4 py-2 bg-black/90 border border-white/20 rounded-lg text-white font-medium hover:bg-orange-500 hover:border-orange-500 transition-all duration-300">
              İletişim
            </Link>
            <Link href="/hakkinda" className="px-4 py-2 bg-black/90 border border-white/20 rounded-lg text-white font-medium hover:bg-orange-500 hover:border-orange-500 transition-all duration-300">
              Hakkında
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
