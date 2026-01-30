import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export function DashboardHeader() {
  return (
    <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          My Fishing Dashboard
        </h1>
        <p className="mt-1 text-muted-foreground">
          Track your catches and fishing adventures
        </p>
      </div>
      <Button size="lg" className="w-full sm:w-auto">
        <Plus className="size-4" />
        Add New Catch
      </Button>
    </header>
  )
}
