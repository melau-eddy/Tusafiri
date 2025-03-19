import React from 'react'
import BusTypes from '../shuttles/BusTypes'
import Facilities from '../shuttles/Facilities'
import BusOperators from '../shuttles/BusOperators'
import AvailableTrips from '../trips/AvailableTrips'

export default function BookingsBody() {
  return (
    <div className="flex flex-row gap-20 lg:mt-8 lg:w-[1010px]">
      <div className="hidden lg:flex lg:flex-col">
        <BusTypes />
        <Facilities />
        <BusOperators />
      </div>
      <AvailableTrips />
    </div>
  )
}
