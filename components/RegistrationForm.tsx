"use client"

import { useState } from "react"
import emailjs from "@emailjs/browser"

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    experience: "",
    desiredPosition: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
    
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!
    const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
           // Замініть на свій Public Key (User ID)

    // Параметри, які передаються у шаблон EmailJS
    const templateParams = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      experience: formData.experience,
      desiredPosition: formData.desiredPosition,
    }

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text)
        alert("Дякуємо за заявку! Наш менеджер зв'яжеться з вами протягом 24 годин.")
        // Можна також скинути форму після успішної відправки
        setFormData({
          name: "",
          phone: "",
          email: "",
          experience: "",
          desiredPosition: "",
        })
      })
      .catch((error) => {
        console.error("Email send failed:", error)
        alert("Виникла помилка при надсиланні заявки. Будь ласка, спробуйте пізніше.")
      })
  }

  return (
    <section id="registration" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Заповніть анкету та отримайте роботу за кордоном</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              Ім'я та прізвище
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
              Номер телефону
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="experience" className="block text-gray-700 font-bold mb-2">
              Досвід роботи
            </label>
            <select
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Оберіть...</option>
              <option value="no-experience">Без досвіду</option>
              <option value="1-3-years">1-3 роки</option>
              <option value="3-5-years">3-5 років</option>
              <option value="5+-years">Більше 5 років</option>
            </select>
          </div>
          <div className="mb-6">
            <label htmlFor="desiredPosition" className="block text-gray-700 font-bold mb-2">
              Бажана вакансія
            </label>
            <input
              type="text"
              id="desiredPosition"
              name="desiredPosition"
              value={formData.desiredPosition}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Подати заявку
            
          </button>
        </form>
        <p className="text-center mt-4 text-gray-600">Наш менеджер зв'яжеться з вами протягом 24 годин</p>
      </div>
    </section>
  )
}

