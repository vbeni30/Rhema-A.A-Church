import { Button } from "@/components/ui/button"

export default function JoinUs() {
  return (
    <section className="py-24 px-8 bg-[#9B2B3A] text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-4xl font-normal mb-6">Join Our Community</h2>
        <p className="text-xl mb-12 opacity-90">
          We'd love to welcome you to our church family. Whether you're a long-time believer or just starting to explore
          faith, there's a place for you here.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-white text-[#9B2B3A] hover:bg-gray-100 px-8 py-6 text-lg font-semibold">
            Plan Your Visit
          </Button>
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  )
}

