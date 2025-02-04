import Link from "next/link"

export default function HeroSection() {
  return (
    <section id="home" className="relative bg-gray-900 text-white py-32">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/construction-site.jpg')" }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Робота в Німеччині з V&O.P: стабільність, високі заробітки, легальна зайнятість
        </h1>
        <p className="text-xl mb-8">Знайдіть роботу на будівництві та почніть нове життя в Європі вже за 2 тижні</p>
        <Link href="#registration" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Подати заявку
        </Link>
      </div>
    </section>
  )
}

