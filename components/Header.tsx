import Image from "next/image"
import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image src="VopLog1.svg" alt="VoP Logo" width={40} height={40} />
          <span className="ml-2 text-2xl font-bold text-gray-800">V&O.P</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            {/* <li>
              <Link href="#home" className="text-gray-600 hover:text-gray-800">
                Головна
              </Link>
            </li> */}
            {/* <li>
              <Link href="#benefits" className="text-gray-600 hover:text-gray-800">
                Переваги
              </Link>
            </li> */}
            <li>
              <Link href="#vacancies" className="text-gray-600 hover:text-gray-800">
                Вакансії
              </Link>
            </li>
            <li>
              <Link href="#requirements" className="text-gray-600 hover:text-gray-800">
                Вимоги
              </Link>
            </li>
            <li>
              <Link href="#contacts" className="text-gray-600 hover:text-gray-800">
                Контакти
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

