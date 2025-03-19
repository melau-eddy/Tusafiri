'use client'

import { Button } from '@/components/ui/button'
import useQueryString from '@/lib/hooks/useQueryString'
import { useRouter } from 'next/navigation'

export default function ProceedtoPaymentButton({
  selectedSeatsCount,
  ticketCost,
}: {
  selectedSeatsCount: number
  ticketCost: string
}) {
  const router = useRouter()
  const createQueryString = useQueryString()

  const handleProceed = () => {
    const seatsQuery = createQueryString('seats', String(selectedSeatsCount))
    const costQuery = createQueryString('cost', ticketCost)
    router.push(`/booking/payment?${seatsQuery}&${costQuery}`)
  }

  return (
    <Button className="" disabled={selectedSeatsCount === 0} onClick={handleProceed}>
      Proceed to payment
    </Button>
  )
}
