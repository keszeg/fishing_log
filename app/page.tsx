import { Hero } from "@/components/landing/hero"
import { HowItWorks } from "@/components/landing/how-it-works"

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <main>
        <Hero />
        <HowItWorks />
      </main>
    </div>
  )
}
