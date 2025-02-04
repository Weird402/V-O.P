import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/privacy-policy" className="hover:underline mr-4">
              Політика конфіденційності
            </Link>
            <Link href="/terms-of-use" className="hover:underline">
              Умови використання
            </Link>
          </div>
          <div className="mb-4 md:mb-0">
            <p>Телефон: +49 160 91412896</p>
            <p>Email: v.o.polivanyi@gmail.com</p>
          </div>
          <div>
            <Link href="#registration" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Подати заявку
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 V&O.P GmbH. Усі права захищені.</p>
        </div>
      </div>
    </footer>
  )
}

