import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail } from "lucide-react"

export default function ServiceLocation() {
  return (
    <section className="py-24 px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-4xl font-normal mb-6">Location & Contact</h2>
            <p className="text-gray-600 mb-8">
              We're conveniently located in the heart of the city. Join us for our next service or reach out if you have
              any questions.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-[#9B2B3A] mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Address</h3>
                  <p className="text-gray-600">
                    123 Faith Street
                    <br />
                    Heavenly City, HC 12345
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-[#9B2B3A] mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-[#9B2B3A] mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-gray-600">info@gospelchurch.com</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button size="lg" className="bg-[#9B2B3A] text-white hover:bg-[#8a2533]">
                Get Directions
              </Button>
            </div>
          </div>

          <div className="h-[400px] bg-gray-200 rounded-xl overflow-hidden">
            {/* Replace with actual map component or iframe */}
            <div className="w-full h-full bg-gray-300" />
          </div>
        </div>
      </div>
    </section>
  )
}

