import Image from "next/image"

export default function AboutCompany() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">V&O.P — ваш провідник до Німеччини</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <p className="text-lg mb-4">
              Наша компанія співпрацює з
              провідними німецькими будівельними компаніями, забезпечуючи стабільну та легальну зайнятість для наших
              клієнтів.
            </p>
            <p className="text-lg">
              Ми пишаємося тим, що надаємо не лише робочі місця, але й повну підтримку на всіх етапах - від оформлення
              документів до адаптації на новому місці.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image src="\images.jfif" alt="Команда VoP" width={500} height={300} className="rounded-lg shadow-md" />
          </div>
        </div>
      </div>
    </section>
  )
}

