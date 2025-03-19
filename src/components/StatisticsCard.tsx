'use client';

import useIntersectionObserver from '@/lib/hooks/useIntersectionObserver';
import { formatNumber } from '@/lib/utils';
import { ReactElement, useEffect, useRef, useState } from 'react';

type StatisticsCardProps = {
  icon: ReactElement;
  numbers: number;
  description: string;
  interval: number;
};

export default function StatisticsCard({ icon, numbers, description, interval }: StatisticsCardProps) {
  const [count, setCount] = useState(0);

  const ref = useRef<HTMLDivElement | null>(null);
  const isVisible = useIntersectionObserver(ref);

  useEffect(() => {
    if (isVisible) {
      const animatedCount = setInterval(() => {
        if (count < numbers) {
          setCount((prevCount) => prevCount + interval);
        } else {
          clearInterval(animatedCount);
        }
      }, 30);

      return () => clearInterval(animatedCount);
    }
  }, [count, numbers, isVisible, interval]);

  return (
    <div ref={ref} className="inline-flex gap-4">
      <div className={`flex items-center rounded-full bg-card p-6 text-card-foreground `}>{icon}</div>

      <div className="flex flex-col justify-center">
        <div className=" text-xl font-bold text-foreground ">{formatNumber(count)} +</div>{' '}
        <span className="text-lg font-thin tracking-wide text-foreground">{description}</span>
      </div>
    </div>
  );
}
