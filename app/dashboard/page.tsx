import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { StatsSection } from "@/components/dashboard/stats-section"
import { RecentCatchesSection } from "@/components/dashboard/recent-catches-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8">
          <DashboardHeader />
          <StatsSection />
          <RecentCatchesSection />
        </div>
      </main>
    </div>
  )
}
