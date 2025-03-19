import { Card } from '@/components/ui/card'
import AvailableTripsDropdown from '../shuttles/AvailableTripsDropdown'
import { db } from '@/db/connect'
import { travelRoutes } from '@/db/schema/travelRoute'

export default async function SearchAvailableTrips() {
  const routes = await db.select().from(travelRoutes)
  const departures = routes.map((route) => route.departure)
  const destinations = routes.map((route) => route.destination)
  return (
    <div className="inline-flex w-full justify-center">
      <Card className="flex flex-col gap-2 p-5 shadow-sm xl:grid xl:grid-cols-4">
        <AvailableTripsDropdown departures={departures} destinations={destinations} />
      </Card>
    </div>
  )
}
