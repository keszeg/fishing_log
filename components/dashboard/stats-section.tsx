import { StatCard } from "./stat-card"
import { Fish, Trophy, Heart } from "lucide-react"

const stats = [
  {
    title: "Total Catches",
    value: "127",
    subtitle: "This season",
    icon: Fish,
  },
  {
    title: "Biggest Catch",
    value: "24.5 lbs",
    subtitle: "Largemouth Bass",
    icon: Trophy,
  },
  {
    title: "Favorite Species",
    value: "Trout",
    subtitle: "42 catches",
    icon: Heart,
  },
]

export function StatsSection() {
  return (
    <section>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <StatCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            subtitle={stat.subtitle}
            icon={stat.icon}
          />
        ))}
      </div>
    </section>
  )
}
