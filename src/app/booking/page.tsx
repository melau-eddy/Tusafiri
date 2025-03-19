import NavigationBreadCrumbs from '@/components/NavigationBreadCrumbs'
import { db } from '@/db/connect'
import { travelRoutes } from '@/db/schema/travelRoute'
import BookingsBody from '@/app/_features/booking/BookingsBody'
import SearchAvailableTripsBooking from '@/app/_features/trips/SearchAvailableTripsBooking'

export default async function Booking() {
  const routes = await db.select().from(travelRoutes)
  const departures = routes.map((route) => route.departure)
  const destinations = routes.map((route) => route.destination)
  return (
    <div className="flex flex-col gap-10 p-6 lg:items-center">
      <div className="lg:w-[1012px]">
        <NavigationBreadCrumbs path={['booking']} />
      </div>
      <SearchAvailableTripsBooking departure={departures} destinations={destinations} />
      <BookingsBody />
    </div>
  )
}
