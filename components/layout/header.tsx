import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Fish } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <Fish className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-semibold text-foreground">FishLog</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="#features" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Funkciok
          </Link>
          <Link href="#how-it-works" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Hogyan mukodik
          </Link>
        </nav>
        <Button>Bejelentkezes</Button>
      </div>
    </header>
  )
}
