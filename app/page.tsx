import Header from "../components/Header"
import HeroSection from "../components/HeroSection"
import Benefits from "../components/Benefits"
import Vacancies from "../components/Vacancies"
import RegistrationForm from "../components/RegistrationForm"
import Requirements from "../components/Requirements"
import AboutCompany from "../components/AboutCompany"
import Contacts from "../components/Contacts"
import FAQ from "../components/FAQ"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <Benefits />
      <Vacancies />
      <RegistrationForm />
      <Requirements />
      <AboutCompany />
      <Contacts />
      <FAQ />
      <Footer />
    </div>
  )
}

