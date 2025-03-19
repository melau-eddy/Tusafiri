import { Skeleton } from './ui/skeleton'

export default function CardSkeleton({ count }: { count: number }) {
  return (
    <div className="flex w-full flex-col items-center gap-8">
      {Array.from({ length: count }).map((_, index) => (
        <Skeleton key={index} className="h-36 w-full rounded-xl shadow xl:max-w-2xl" />
      ))}
    </div>
  )
}
