"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "Чи потрібно платити за працевлаштування?",
    answer: "Ні, всі послуги безкоштовні для працівників.",
  },
  {
    question: "Як довго триває процес оформлення?",
    answer: "Від 2 до 4 тижнів.",
  },
  {
    question: "Чи надаєте ви візову підтримку?",
    answer: "Так, ми допомагаємо з отриманням робочої візи.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Відповіді на популярні запитання</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full text-left font-semibold p-4 bg-white rounded-lg shadow-md"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                {openIndex === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              {openIndex === index && <div className="mt-2 p-4 bg-gray-50 rounded-lg">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

