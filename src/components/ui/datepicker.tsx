'use client'

import { useState } from 'react'
import { CalendarIcon } from '@radix-ui/react-icons'
import { format } from 'date-fns'

import { cn } from '@/lib/utils'

import { Popover, PopoverContent, PopoverTrigger } from './popover'
import { Button } from './button'
import { Calendar } from './calendar'

type DatePickerProps = {
  initialDate?: Date
  handleDateChange: (date: Date | undefined) => void
}
export function DatePicker({ initialDate, handleDateChange }: DatePickerProps) {
  const [date, setDate] = useState<Date | undefined>(initialDate ? initialDate : new Date())

  const handleSelect = (selectedDate: Date | undefined) => {
    handleDateChange(selectedDate)
    setDate(selectedDate)
  }

  return (
    <div className=" mt-2.5">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={'outline'}
            className={cn('w-[240px] justify-start text-left font-normal', !date && 'text-muted-foreground')}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date ?? '', 'PPP') : <span>Traveling Date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar mode="single" selected={date} onSelect={handleSelect} initialFocus />
        </PopoverContent>
      </Popover>
    </div>
  )
}
