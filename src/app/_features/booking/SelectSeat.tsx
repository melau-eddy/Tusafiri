'use client'
import React, { useState } from 'react'
import Seat from './Seat'
import { LifeBuoy } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import Seatslegend from './Seatslegend'
import SelectSeatActions from './SelectSeatActions'

export default function SelectSeat({ ticketPrice }: { ticketPrice: string }) {
  const [selectedSeats, setSelectedSeats] = useState<Array<string>>([])

  let selected = []
  const handleSelectedSeat = (seatId: string) => {
    const indexOfSelectedSeat = selectedSeats.findIndex((seat) => seat === seatId)
    if (indexOfSelectedSeat === -1) {
      selected = [...selectedSeats, seatId]
    } else {
      selected = selectedSeats.filter((value) => value !== seatId)
    }
    setSelectedSeats(selected)
  }

  return (
    <div className="flex flex-col gap-2 md:flex-row md:gap-6 lg:gap-12">
      <Card className=" w-fit items-center bg-transparent">
        <CardContent className="flex w-fit flex-col gap-1 pt-3">
          <LifeBuoy className="mb-1 size-8 self-end text-gray-600" />
          {Array.from({ length: 10 }, (_, i) => (
            <div key={i} className="inline-flex justify-between">
              <div className="flex flex-row gap-0.5">
                <Seat key={Math.random()} id={i} status={'available'} onSeatClick={handleSelectedSeat} />
                <Seat key={Math.random()} id={i} status={'taken'} onSeatClick={handleSelectedSeat} />
              </div>
              <div className="flex flex-row gap-0.5">
                <Seat key={Math.random()} id={i} status={'available'} onSeatClick={handleSelectedSeat} />
                <Seat key={Math.random()} id={i} status={'selected'} onSeatClick={handleSelectedSeat} />
              </div>
            </div>
          ))}
          <div className="flex flex-row gap-0.5">
            <Seat key={Math.random()} id={5} status={'available'} onSeatClick={handleSelectedSeat} />
            <Seat key={Math.random()} id={6} status={'taken'} onSeatClick={handleSelectedSeat} />
            <Seat key={Math.random()} id={7} status={'available'} onSeatClick={handleSelectedSeat} />
            <Seat key={Math.random()} id={8} status={'available'} onSeatClick={handleSelectedSeat} />
            <Seat key={Math.random()} id={9} status={'taken'} onSeatClick={handleSelectedSeat} />
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col justify-between">
        <Seatslegend />
        <SelectSeatActions selectedSeats={selectedSeats} ticketPrice={ticketPrice} />
      </div>
    </div>
  )
}
