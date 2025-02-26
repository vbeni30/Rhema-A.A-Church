import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Bell } from "lucide-react"

export default function SermonSubscribe() {
  return (
    <section className="py-24 px-8 bg-[#9B2B3A]">
      <div className="max-w-4xl mx-auto text-center text-white">
        <Bell className="h-16 w-16 mx-auto mb-8" />
        <h2 className="font-serif text-4xl font-normal mb-6">Never Miss a Sermon</h2>
        <p className="text-xl mb-12 opacity-90">
          Subscribe to receive notifications about new sermons, study materials, and special series.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
          />
          <Button className="bg-white text-[#9B2B3A] hover:bg-gray-100 whitespace-nowrap">Subscribe Now</Button>
        </form>
        <p className="mt-4 text-sm opacity-75">We respect your privacy. Unsubscribe at any time.</p>
      </div>
    </section>
  )
}

