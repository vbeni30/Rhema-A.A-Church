import Image from "next/image"
import { Button } from "@/components/ui/button"

const impactAreas = [
  {
    title: "Local Outreach",
    description: "Support our food bank, homeless ministry, and community programs",
    image: "/placeholder.svg?height=400&width=600",
    amount: "$25,000",
    goal: "$50,000",
    progress: 50,
  },
  {
    title: "Youth Ministry",
    description: "Help us nurture the next generation through programs and events",
    image: "/placeholder.svg?height=400&width=600",
    amount: "$15,000",
    goal: "$30,000",
    progress: 50,
  },
  {
    title: "Building Fund",
    description: "Contribute to maintaining and improving our facilities",
    image: "/placeholder.svg?height=400&width=600",
    amount: "$100,000",
    goal: "$250,000",
    progress: 40,
  },
]

export default function ImpactAreas() {
  return (
    <section className="py-24 px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-down">
          <h2 className="font-serif text-4xl font-normal mb-4">Your Impact</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See how your generous giving is making a difference in various areas of our ministry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {impactAreas.map((area, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative h-48">
                <Image src={area.image || "/placeholder.svg"} alt={area.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold mb-2">{area.title}</h3>
                <p className="text-gray-600 mb-4">{area.description}</p>
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Raised: {area.amount}</span>
                    <span className="text-gray-600">Goal: {area.goal}</span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#9B2B3A] transition-all duration-500"
                      style={{ width: `${area.progress}%` }}
                    />
                  </div>
                </div>
                <Button className="w-full bg-[#9B2B3A] text-white hover:bg-[#8a2533]">Give Now</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

