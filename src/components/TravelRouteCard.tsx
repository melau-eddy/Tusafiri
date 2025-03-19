'use client'

import useQueryString from '@/lib/hooks/useQueryString'
import { formatDate } from '@/lib/utils'
import { MoveRight } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

type TravelRouteCardProps = {
  src: StaticImageData
  from: string
  to: string
}

export default function TravelRouteCard({ src, from, to }: TravelRouteCardProps) {
  const [cardActive, setCardActive] = useState(false)
  const router = useRouter()
  const createQueryString = useQueryString()
  const defaultDate = formatDate(new Date())

  const handleClick = () => {
    router.push(
      `/booking?${createQueryString('from', from)}&${createQueryString('to', to)}&${createQueryString('date', defaultDate)}`,
    )
  }
  return (
    <div
      onClick={handleClick}
      className="relative transition-transform duration-300 hover:scale-105"
      onMouseEnter={() => setCardActive(true)}
      onMouseLeave={() => setCardActive(false)}
    >
      <Image
        src={src}
        alt="nairobi"
        className="h-[330px] cursor-pointer rounded-xl brightness-75 filter transition-opacity duration-200 hover:opacity-70"
      />

      <div className="absolute bottom-5 left-5 flex cursor-pointer flex-col gap-2 text-xl font-extrabold tracking-wider text-white">
        <div
          className={`flex flex-col gap-2 ${cardActive ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        >
          <span>{from}</span>
          <span>
            <MoveRight />
          </span>
        </div>

        <span>{to}</span>
      </div>
    </div>
  )
}
