import NavigationBreadCrumbs from '@/components/NavigationBreadCrumbs'
import { PassengerDetails } from '@/app/_features/booking/PassengerDetails'

export default function Payment() {
  return (
    <div className="flex flex-col gap-10 p-6 lg:items-center">
      <div className="lg:w-[1012px]">
        <NavigationBreadCrumbs path={['booking', 'payment']} />
      </div>

      <div className="lg:mt-5 lg:w-[1010px] ">
        <PassengerDetails />
      </div>
    </div>
  )
}
