import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div 
          className="h-full w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/hero-fishing.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="max-w-2xl">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Rogzitsd minden fogasodat egy helyen
          </h1>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground/90 sm:text-xl">
            A FishLog segitsegevel egyszeruen nyomon kovetheted horgaszkalandjaidat. 
            Kepek, lokacio, sulyok - minden egy alkalmazasban.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="gap-2">
              Kezdd el most
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/40 bg-transparent text-muted-foreground hover:bg-white/10 hover:text-white">
              Tudj meg tobbet
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
