import { BusFront, Route, Ticket, UsersRound } from 'lucide-react';
import StatisticsCard from './StatisticsCard';

export default function Statisctics() {
  return (
    <div className="grid grid-cols-2 gap-5 md:grid-cols-3 md:justify-items-center lg:grid-cols-4">
      <StatisticsCard interval={30000} icon={<UsersRound />} numbers={1500000} description="Customers" />
      <StatisticsCard interval={2} icon={<BusFront />} description="Shuttles" numbers={100} />
      <StatisticsCard interval={1} icon={<Route />} description="Routes" numbers={20} />
      <StatisticsCard interval={20000} icon={<Ticket />} description="Tickets Sold" numbers={1000000} />
    </div>
  );
}
