import Link from "next/link"
import { Fish } from "lucide-react"

const navigation = {
  product: [
    { name: "Funkciok", href: "#features" },
    { name: "Hogyan mukodik", href: "#how-it-works" },
    { name: "Araink", href: "#pricing" },
  ],
  support: [
    { name: "Kapcsolat", href: "#contact" },
    { name: "GYIK", href: "#faq" },
    { name: "Sugo", href: "#help" },
  ],
  legal: [
    { name: "Adatvedelmi iranyelvek", href: "#privacy" },
    { name: "Felhasznalasi feltetelek", href: "#terms" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Fish className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-semibold text-foreground">FishLog</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              A legjobb alkalmazas horgaszkalandjaid rogzitesehez es nyomon kovetesehez.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-8 lg:col-span-3">
            <div>
              <h3 className="text-sm font-semibold text-foreground">Termek</h3>
              <ul className="mt-4 space-y-3">
                {navigation.product.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground">Tamogatas</h3>
              <ul className="mt-4 space-y-3">
                {navigation.support.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground">Jogi</h3>
              <ul className="mt-4 space-y-3">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} FishLog. Minden jog fenntartva.
          </p>
        </div>
      </div>
    </footer>
  )
}
