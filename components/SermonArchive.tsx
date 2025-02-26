import { Button } from "@/components/ui/button"
import { Play, Download } from "lucide-react"

const sermons = [
  { title: "Finding Peace in Troubled Times", speaker: "Pastor John Doe", date: "June 15, 2025" },
  { title: "The Power of Forgiveness", speaker: "Pastor Jane Smith", date: "June 8, 2025" },
  { title: "Walking in Faith", speaker: "Guest Speaker Dr. Michael Johnson", date: "June 1, 2025" },
]

export default function SermonArchive() {
  return (
    <section className="py-24 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center font-serif text-4xl font-normal mb-16 text-gray-900" data-aos="fade-down">
          Recent Sermons
        </h2>
        <div className="grid gap-8">
          {sermons.map((sermon, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 flex flex-col md:flex-row justify-between items-center"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div>
                <h3 className="font-serif text-xl font-semibold mb-2">{sermon.title}</h3>
                <p className="text-gray-600 mb-2">{sermon.speaker}</p>
                <p className="text-gray-500 text-sm">{sermon.date}</p>
              </div>
              <div className="flex gap-4 mt-4 md:mt-0">
                <Button variant="outline" className="flex items-center gap-2">
                  <Play className="h-4 w-4" />
                  Listen
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Download
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button className="bg-[#9B2B3A] hover:bg-[#8a2533] text-white px-8 py-6 text-lg">View All Sermons</Button>
        </div>
      </div>
    </section>
  )
}

