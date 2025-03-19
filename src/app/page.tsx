import Image from 'next/image'
import heroImage from '../../public/heroImage.svg'
import SearchAvailableTrips from '@/app/_features/trips/SearchAvailableTrips'
import WhyChooseUs from '@/components/WhyChooseUs'
import TopTravelledRoutes from '@/components/TopTravelledRoutes'
import Statisctics from '@/components/Statisctics'

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-5">
      <Image src={heroImage} alt="hero-image" priority height={420} width={1440} className="hero-image mt-5" />
      <div className="flex flex-col gap-10 md:gap-16 lg:gap-20">
        <SearchAvailableTrips />
        <div className="flex w-full flex-col gap-10 px-8 md:gap-16 md:px-16 lg:gap-20 lg:px-24">
          <WhyChooseUs />
          <TopTravelledRoutes />
          <Statisctics />
        </div>
      </div>
    </main>
  )
}
