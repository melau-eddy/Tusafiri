'use client'
import DropdownSelect from '@/components/DropdownSelect'
import { DatePicker } from '@/components/ui/datepicker'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import useQueryString from '@/lib/hooks/useQueryString'
import { formatDate } from '@/lib/utils'

type Props = {
  departures: Array<string>
  destinations: Array<string>
}

export default function AvailableTripsDropdown({ departures, destinations }: Props) {
  const [selectedDeparture, setSelectedDeparture] = useState<string>()
  const [selectedDestination, setSelectedDstination] = useState<string>()
  const [selectedDate, setselectedDate] = useState<Date>()

  const router = useRouter()
  const createQueryString = useQueryString()

  const uniqueDepartures = Array.from(new Set(departures))
  const departureDropdownOptions = uniqueDepartures.map((departure) => ({
    value: departure,
    text: departure,
  }))

  const uniqueDestinations = Array.from(new Set(destinations))
  const destinationDropdownOptions = uniqueDestinations.map((destination) => ({
    value: destination,
    text: destination,
  }))

  const handleDepartureChange = (departure: string) => {
    setSelectedDeparture(departure)
  }

  const handleDestinationChange = (destination: string) => {
    setSelectedDstination(destination)
  }

  const handleSubmit = () => {
    const departureQuery = createQueryString('from', selectedDeparture!)
    const destinationQuery = createQueryString('to', selectedDestination!)
    const dateQuery = createQueryString('date', formatDate(selectedDate!))

    router.push(`/booking?${departureQuery}&${destinationQuery}&${dateQuery}`)
  }

  return (
    <>
      <div className="flex w-fit flex-col items-center gap-3 md:grid md:grid-cols-3 md:items-end xl:col-span-3">
        <DropdownSelect
          handleSelect={handleDepartureChange}
          label="Travelling From"
          options={departureDropdownOptions}
        />
        <DropdownSelect
          handleSelect={handleDestinationChange}
          label="Travelling To"
          options={destinationDropdownOptions}
        />
        <DatePicker handleDateChange={(date) => setselectedDate(date)} />
      </div>
      <div className="mt-2 w-[240px] self-end xl:w-[180px] xl:justify-self-end">
        <Button
          variant={'default'}
          disabled={!selectedDeparture && !selectedDestination && !selectedDate}
          className="w-full disabled:cursor-not-allowed"
          onClick={handleSubmit}
        >
          Find Bus
        </Button>
      </div>
    </>
  )
}
