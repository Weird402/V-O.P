import { Phone, Mail, MapPin } from "lucide-react"

export default function Contacts() {
  return (
    <section id="contacts" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Контакти</h2>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <ul className="space-y-4">
              <li className="flex items-center">
                <MapPin className="w-6 h-6 text-blue-500 mr-2" />
                <span>Magdeburg</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-6 h-6 text-blue-500 mr-2" />
                <a href="tel:+491234567890" className="hover:underline">
                +49 160 91412896
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-6 h-6 text-blue-500 mr-2" />
                <a href="mailto:info@vop-construction.de" className="hover:underline">
                  v.o.polivanyi@gmail.com
                </a>
              </li>
            </ul>
            <div className="mt-6">
              {/* <a
                href="https://www.linkedin.com/company/vop-construction"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mr-4"
              >
                LinkedIn
              </a> */}
              <a
                href="https://www.facebook.com/vopconstruction"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Facebook
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156765.0578857355!2d11.477029349524642!3d52.126062024060026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a5f5ff55daea5b%3A0x4236659f8071060!2z0JzQsNCz0LTQtdCx0YPRgNCzLCDQk9C10YDQvNCw0L3QuNGP!5e0!3m2!1sru!2scz!4v1738170075827!5m2!1sru!2scz"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

