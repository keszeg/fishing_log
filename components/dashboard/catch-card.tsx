import { Card, CardContent } from "@/components/ui/card"
import { Fish } from "lucide-react"

interface CatchCardProps {
  species: string
  weight: string
  date: string
  location?: string
}

export function CatchCard({ species, weight, date, location }: CatchCardProps) {
  return (
    <Card className="group border-border/50 transition-colors hover:border-primary/30">
      <CardContent className="p-4">
        <div className="flex gap-4">
          <div className="flex size-16 shrink-0 items-center justify-center rounded-lg bg-secondary">
            <Fish className="size-8 text-muted-foreground" />
          </div>
          <div className="flex flex-1 flex-col justify-center gap-1">
            <h3 className="font-semibold text-foreground">{species}</h3>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
              <span className="font-medium text-primary">{weight}</span>
              <span>{date}</span>
              {location && (
                <>
                  <span className="hidden sm:inline">|</span>
                  <span className="hidden sm:inline">{location}</span>
                </>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
