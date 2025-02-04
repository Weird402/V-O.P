import { Check } from "lucide-react"

export default function Requirements() {
  const requirements = [
    "Вік 18-55 років.",
    "Медична довідка про відсутність протипоказань.",
    "Базові знання німецької або англійської (не обов'язково для всіх вакансій).",
    "Досвід у будівництві — перевага, але не обов'язково.",
  ]

  return (
    <section id="requirements" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Щоб працювати з V&O.P, вам потрібно:</h2>
        <ul className="max-w-2xl mx-auto">
          {requirements.map((requirement, index) => (
            <li key={index} className="flex items-center mb-4">
              <Check className="w-6 h-6 text-green-500 mr-2" />
              <span>{requirement}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

