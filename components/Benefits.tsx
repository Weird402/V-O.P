import { Briefcase, Home, CreditCard, BookOpen } from "lucide-react"

export default function Benefits() {
  const benefits = [
    { icon: Briefcase, title: "Офіційне працевлаштування", description: "Контракт, соцпакет, пенсійні внески" },
    { icon: Home, title: "Допомога з проживанням", description: "Оренда житла або гуртожиток" },
    { icon: CreditCard, title: "Висока зарплата", description: "Від €2000/міс. після податків" },
    { icon: BookOpen, title: "Підтримка", description: "Підтримка на всіх етапах, допомога з документами" },
  ]

  return (
    <section id="benefits" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Чому обирають нас?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <benefit.icon className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

