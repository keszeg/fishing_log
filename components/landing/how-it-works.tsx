import { Card, CardContent } from "@/components/ui/card"
import { Camera, MapPin, FileText, Fish } from "lucide-react"

const steps = [
  {
    icon: Camera,
    title: "Keszits kepet",
    description: "Fotozd le a fogasodat kozvetlenul az alkalmazasbol vagy valassz a galeribol.",
  },
  {
    icon: MapPin,
    title: "Add meg a lokaciot",
    description: "Jelold meg a horgaszhelyet a terkepen vagy hasznald az automatikus helymeghatározast.",
  },
  {
    icon: FileText,
    title: "Ird le a reszleteket",
    description: "Add meg a sulyt, meretet es irj leirast a fogasrol es a korulmenyekrol.",
  },
  {
    icon: Fish,
    title: "Valaszd ki a halfajt",
    description: "Valassz a halfajok listajabol vagy adj hozza uj fajt a sajat gyujtemenyedhez.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-muted/50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Hogyan mukodik a fogasfeltoltes?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            Negy egyszeru lepes es a fogasod mar rogzitve is van
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Card key={step.title} className="relative border-border bg-card">
              <CardContent className="pt-8">
                <div className="absolute -top-5 left-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary shadow-md">
                    <step.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
                <span className="absolute right-6 top-4 text-5xl font-bold text-muted/80">
                  {index + 1}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
