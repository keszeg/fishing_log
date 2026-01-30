import { CatchCard } from "./catch-card"

const recentCatches = [
  {
    id: 1,
    species: "Rainbow Trout",
    weight: "3.2 lbs",
    date: "Jan 28, 2026",
    location: "Lake Tahoe",
  },
  {
    id: 2,
    species: "Largemouth Bass",
    weight: "5.8 lbs",
    date: "Jan 25, 2026",
    location: "Clear Lake",
  },
  {
    id: 3,
    species: "Walleye",
    weight: "4.1 lbs",
    date: "Jan 22, 2026",
    location: "Lake Erie",
  },
  {
    id: 4,
    species: "Northern Pike",
    weight: "12.3 lbs",
    date: "Jan 18, 2026",
    location: "Lake of the Woods",
  },
  {
    id: 5,
    species: "Bluegill",
    weight: "0.8 lbs",
    date: "Jan 15, 2026",
    location: "Local Pond",
  },
  {
    id: 6,
    species: "Chinook Salmon",
    weight: "18.5 lbs",
    date: "Jan 10, 2026",
    location: "Puget Sound",
  },
]

export function RecentCatchesSection() {
  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Recent Catches</h2>
        <span className="text-sm text-muted-foreground">
          {recentCatches.length} catches
        </span>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {recentCatches.map((catchItem) => (
          <CatchCard
            key={catchItem.id}
            species={catchItem.species}
            weight={catchItem.weight}
            date={catchItem.date}
            location={catchItem.location}
          />
        ))}
      </div>
    </section>
  )
}
