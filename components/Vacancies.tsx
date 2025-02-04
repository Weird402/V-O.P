import Link from "next/link"

export default function Vacancies() {
  const vacancies = [
    {
      title: "Працівник на внутрішню обробку",
      salary: "€2500-3000",
      location: "Магдебург",
      conditions: "Проживання та харчування включено",
    }
  ]

  return (
    <section id="vacancies" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Актуальні позиції на будівництві</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {vacancies.map((vacancy, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{vacancy.title}</h3>
              <p className="text-gray-600 mb-2">Зарплата: {vacancy.salary}</p>
              <p className="text-gray-600 mb-2">Місце роботи: {vacancy.location}</p>
              <p className="text-gray-600 mb-4">{vacancy.conditions}</p>
              <Link
                href="#registration"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-block"
              >
                Подати заявку
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

