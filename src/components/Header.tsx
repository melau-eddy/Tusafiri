'use client'
import { Mail, Phone } from 'lucide-react'
import { Card } from './ui/card'
import useScrollY from '@/lib/hooks/useScrollY'
import AuthOptions from '@/app/_features/authentication/AuthOptions'

export default function Header() {
  const isScrolled = useScrollY()

  return (
    <Card
      className={`${isScrolled ? 'bg-primary text-primary-foreground shadow-md' : 'bg-background text-primary shadow-none'} fixed inset-0 z-50 inline-flex h-12 w-full items-center justify-between rounded-none border-0 border-b p-2 text-xs font-semibold transition-colors duration-200 md:px-6`}
    >
      <div className="hidden flex-row justify-start gap-5 sm:flex">
        <div className="inline-flex items-center gap-1.5">
          <Phone className="size-5" />
          <span className="tracking-wide">+254727533551</span>
        </div>
        <div className="flex flex-row items-center gap-1">
          <Mail className="size-5" />
          <span className="tracking-wide">contact@safari.co.ke</span>
        </div>
      </div>
      <div className="inline-flex w-full items-center justify-end">
        <AuthOptions />
      </div>
    </Card>
  )
}
