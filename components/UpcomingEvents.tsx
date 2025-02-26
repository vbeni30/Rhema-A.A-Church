import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CalendarDays, Clock, MapPin } from "lucide-react"

const events = [
  {
    title: "Summer Youth Camp",
    date: "July 15-20, 2025",
    time: "All Day",
    location: "Camp Wilderness",
    description: "A week-long adventure for teens to grow in faith and friendship.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Community Outreach Day",
    date: "August 5, 2025",
    time: "9:00 AM - 2:00 PM",
    location: "Various Locations",
    description: "Join us as we serve our community through various projects.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Fall Revival Services",
    date: "September 10-12, 2025",
    time: "7:00 PM - 9:00 PM",
    location: "Main Sanctuary",
    description: "Three nights of powerful worship and inspiring messages.",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function UpcomingEvents() {
  return (
    <section className="py-24 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center font-serif text-4xl font-normal mb-16 text-gray-900">Upcoming Events</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={event.image || "/placeholder.svg"}
                alt={event.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold mb-2">{event.title}</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <CalendarDays className="h-5 w-5 mr-2" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-2">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{event.location}</span>
                </div>
                <p className="text-gray-700 mb-4">{event.description}</p>
                <Button className="w-full bg-[#9B2B3A] hover:bg-[#8a2533] text-white">Learn More & Register</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

