import Image from "next/image"
import Link from "next/link"

const features = [
  {
    title: "Our Beliefs",
    description: "Worry Ends When Faith Begins. The Magnificent Story of a Life-Changing Journey to God.",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-11%205.34.23%20PM-Bt7GqqVRHInuxfO0K1dA2A86foAiDY.png",
  },
  {
    title: "Our Church",
    description: "Worry Ends When Faith Begins. The Magnificent Story of a Life-Changing Journey to God.",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-11%205.34.23%20PM-Bt7GqqVRHInuxfO0K1dA2A86foAiDY.png",
  },
  {
    title: "Our Mission",
    description: "Worry Ends When Faith Begins. The Magnificent Story of a Life-Changing Journey to God.",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-11%205.34.23%20PM-Bt7GqqVRHInuxfO0K1dA2A86foAiDY.png",
  },
]

export default function WhoWeAre() {
  return (
    <section className="py-32 px-8 bg-white">
      <h2
        className="text-center font-serif text-sm font-normal text-gray-600 uppercase tracking-widest mb-12"
        data-aos="fade-down"
      >
        Who we are
      </h2>
      <div className="grid md:grid-cols-3 gap-16 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="text-center flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <Image
              src={feature.icon || "/placeholder.svg"}
              alt={feature.title}
              width={120}
              height={120}
              className="mb-8"
            />
            <h3 className="font-serif text-2xl font-normal mb-6 text-gray-900">{feature.title}</h3>
            <p className="text-base leading-relaxed text-gray-600 mb-6">{feature.description}</p>
            <Link href="#" className="text-[#9B2B3A] hover:text-[#8a2533] text-sm inline-flex items-center gap-2">
              <span className="text-lg">+</span> Read more
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

