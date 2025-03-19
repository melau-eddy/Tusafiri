'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useState } from 'react'
import { useSearchParams } from 'next/navigation'

export function PassengerDetails() {
  const [firstName, setFirstName] = useState<string>()
  const [lastName, setLastName] = useState<string>()
  const [phoneNumber, setPhoneNumber] = useState<string>()
  const [idNumber, setIdNumber] = useState<string>()

  const searchParams = useSearchParams()
  const seats = Number(searchParams.get('seats'))
  const ticketPrice = Number(searchParams.get('cost'))

  const handleButtonClick = () => {
    const payload = { firstName, lastName, phoneNumber, seats, ticketPrice, idNumber }
    console.log(payload)
  }

  return (
    <Card className="border-none bg-transparent px-0 shadow-none">
      <CardHeader className=" mb-2 grid grid-cols-2 items-center px-0">
        <CardTitle className="text-2xl">Passenger Details</CardTitle>
      </CardHeader>

      <CardContent className="px-0">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="firstName">First name</Label>
            <Input id="firstName" type="text" required onChange={(e) => setFirstName(e.target.value)} />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="lastName">Last name</Label>
            <Input id="lastName" type="text" required onChange={(e) => setLastName(e.target.value)} />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="seats">Number of seats</Label>
            <Input id="seats" defaultValue={String(seats)} />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="seats">Ticket cost</Label>
            <Input
              id="seats"
              className="font-semibold text-primary"
              value={`Ksh. ${String(ticketPrice * seats)}`}
              readOnly
            />
          </div>

          <div className="grid gap-2">
            <div className="flex flex-row items-center gap-3">
              <Label htmlFor="phoneNumber">Phone number</Label>
              <small className="text-[10px] font-thin text-primary">Provide a valid M-pesa number</small>
            </div>
            <Input
              id="phoneNumber"
              type="phoneNumber"
              placeholder="0727533551"
              required
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="idNumber">ID number / passport </Label>
            <Input id="idNumber" type="text" placeholder="optional" onChange={(e) => setIdNumber(e.target.value)} />
          </div>
        </div>
      </CardContent>

      <CardFooter className="justify-end px-0">
        <Button
          className="disabled:cursor-not-allowed"
          onClick={handleButtonClick}
          disabled={!phoneNumber || !firstName || !lastName || !idNumber}
        >
          Initiate Payment
        </Button>
      </CardFooter>
    </Card>
  )
}
