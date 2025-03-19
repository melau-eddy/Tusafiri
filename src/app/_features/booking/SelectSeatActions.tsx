import React from 'react'
import ProceedtoPaymentButton from './ProceedtoPaymentButton'

export default function SelectSeatActions({
  selectedSeats,
  ticketPrice,
}: {
  selectedSeats: Array<string>
  ticketPrice: string
}) {
  const selectedSeatsCount = selectedSeats.length
  return (
    <div className="mt-4 flex flex-col gap-1 border-none bg-transparent shadow-none">
      <div className="hidden flex-row items-center justify-between gap-2 md:flex">
        <h3 className="text-sm font-semibold">Selected Seats:</h3>
        <span className="text-base">{selectedSeatsCount}</span>
      </div>

      <div className="hidden h-fit flex-row items-center justify-between gap-2 md:flex">
        <h3 className=" text-sm font-semibold">Ticket Cost:</h3>
        <span className="text-base">Ksh. 500</span>
      </div>

      <ProceedtoPaymentButton selectedSeatsCount={selectedSeatsCount} ticketCost={ticketPrice} />
    </div>
  )
}
