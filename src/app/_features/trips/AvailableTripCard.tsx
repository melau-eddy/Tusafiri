import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card'

import bus from '../../../../public/bus-inbound-alt-svgrepo-com.svg'
import Image from 'next/image'
import BookingDrawer from '../booking/BookingDrawer'

type Props = {
  departure: string
  destination: string
  seats: number
  ticketPrice: string
  company: string
}

export default function AvailableTripCard({ departure, destination, seats, ticketPrice, company }: Props) {
  return (
    <Card className=" h-fit w-full shadow xl:max-w-2xl">
      <CardHeader className="flex w-full flex-row items-center justify-between">
        <CardDescription className="mt-1 flex flex-col items-center tracking-wide">
          <span className="text-xs">From:</span>
          <span className="text-base font-semibold uppercase">{departure}</span>
          <span>9:00 PM</span>
        </CardDescription>

        <div className="flex flex-col items-center gap-0.5">
          <CardDescription>{company}</CardDescription>
          <Image src={bus} alt="bus" className=" w-10" />
        </div>

        <CardDescription className="flex flex-col items-center tracking-wide">
          <span className=" text-xs">To:</span>
          <span className="text-base font-semibold uppercase">{destination}</span>
          <span>4:00 AM</span>
        </CardDescription>
      </CardHeader>

      <CardContent className=" flex flex-row items-end justify-between">
        <div className="flex flex-col items-start gap-0.5 sm:flex-row sm:gap-10">
          <CardDescription className=" text-accent-foreground">
            Remaining Seats : <span className=" font-semibold text-destructive">{seats}</span>
          </CardDescription>

          <CardDescription className=" text-accent-foreground">
            Ticket Price: <span className="font-semibold text-destructive">{ticketPrice}</span>
          </CardDescription>
        </div>

        <BookingDrawer ticketPrice={ticketPrice} />
      </CardContent>
    </Card>
  )
}
