import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import GiveHero from "@/components/GiveHero"
import GivingOptions from "@/components/GivingOptions"
import ImpactAreas from "@/components/ImpactAreas"
import BankAccounts from "@/components/BankAccounts"
import GivingFAQ from "@/components/GivingFAQ"
import RecurringGiving from "@/components/RecurringGiving"
import OtherWaysToGive from "@/components/OtherWaysToGive"
import DonationForm from "@/components/DonationForm"

export default function GivePage() {
  return (
    <main className="bg-gray-50">
      <Navbar />
      <GiveHero />
      <GivingOptions />
      <ImpactAreas />
      <BankAccounts />
      <RecurringGiving />
      <DonationForm />
      <OtherWaysToGive />
      <GivingFAQ />
      <Footer />
    </main>
  )
}

