'use client'

import AvailableTripCard from './AvailableTripCard'
import { api } from '@/trpc/react'
import CardSkeleton from '@/components/CardSkeleton'
import { useSearchParams } from 'next/navigation'

export default function AvailableTrips() {
  const searchParams = useSearchParams()
  const filterParams = {
    departure: searchParams.get('from') ?? '',
    destination: searchParams.get('to') ?? '',
    travelDate: searchParams.get('date') ?? '',
  }

  const { data: availableTrips, isPending } = api.trip.availableTrips.useQuery(filterParams)

  if (isPending) return <CardSkeleton count={5} />
  return (
    <div className="flex w-full flex-col items-center gap-8">
      {availableTrips?.map((trip) => (
        <AvailableTripCard
          key={trip.travel_routes.routeId}
          departure={trip.travel_routes.departure}
          destination={trip.travel_routes.destination}
          seats={trip.travel_routes.availableSeats ?? 0}
          ticketPrice={trip.travel_routes.ticketPrice ?? ''}
          company={trip.shuttles?.busOperatos ?? ''}
        />
      ))}
    </div>
  )
}
