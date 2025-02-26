import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function EventRegistration() {
  return (
    <section className="py-24 px-8 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-center font-serif text-4xl font-normal mb-16 text-gray-900">Event Registration</h2>
        <form className="bg-white p-8 rounded-lg shadow-md">
          <div className="grid gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <Input type="text" id="name" name="name" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <Input type="email" id="email" name="email" required />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <Input type="tel" id="phone" name="phone" />
            </div>
            <div>
              <label htmlFor="event" className="block text-sm font-medium text-gray-700 mb-1">
                Event
              </label>
              <select
                id="event"
                name="event"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-[#9B2B3A] focus:border-[#9B2B3A] sm:text-sm rounded-md"
              >
                <option>Summer Youth Camp</option>
                <option>Community Outreach Day</option>
                <option>Fall Revival Services</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Additional Information
              </label>
              <Textarea id="message" name="message" rows={4} />
            </div>
            <Button type="submit" className="bg-[#9B2B3A] hover:bg-[#8a2533] text-white">
              Register for Event
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}

