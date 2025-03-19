'use client'

import nairobi from '../../public/nairobi.webp'
import kisumu from '../../public/kisumu.webp'
import nakuru from '../../public/nakuru.webp'
import mombasa from '../../public/mombasa.webp'
import eldoret from '../../public/eldoret.webp'
import TravelRouteCard from './TravelRouteCard'

export default function TopTravelledRoutes() {
  return (
    <div className="flex flex-col items-center gap-8">
      <h1 className="text-2xl font-bold tracking-wide ">
         Top <span className="text-red-400">Destinations</span>
      </h1>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-2 md:grid-cols-3 md:gap-3.5 lg:grid-cols-5 lg:gap-5">
        <TravelRouteCard from="" to="Nairobi" src={nairobi} />
        <TravelRouteCard from="Nairobi" to="Kisumu" src={kisumu} />
        <TravelRouteCard from="Nairobi" to="Mombasa" src={mombasa} />
        <TravelRouteCard from="Nairobi" to="Eldoret" src={eldoret} />
        <TravelRouteCard from="Nairobi" to="Nakuru" src={nakuru} />
      </div>
    </div>
  )
}
