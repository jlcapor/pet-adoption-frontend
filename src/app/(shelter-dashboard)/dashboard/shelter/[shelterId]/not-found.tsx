import { ErrorCard } from "@/components/cards/error-card"
import { Shell } from "@/components/shell"

export default function ShelterNotFound() {
  return (
    <Shell variant="centered" className="max-w-4xl">
      <ErrorCard
        title="Shelter not found"
        description="The shelter may have expired or you may have already updated your shelter"
        retryLink="/dashboard/shelter"
        retryLinkText="Go to shelter"
      />
    </Shell>
  )
}