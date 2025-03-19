type SeatProps = {
  id: number
  status: string
  onSeatClick: (id: string) => void
}

export default function Seat({ id, status, onSeatClick }: SeatProps) {
  return (
    <button
      className={` size-8 rounded-md border border-gray-300 text-center text-xs 
                ${
                  status === 'available'
                    ? 'cursor-pointer bg-muted text-muted-foreground'
                    : status === 'selected'
                      ? 'text-secondary-accent bg-secondary'
                      : 'cursor-not-allowed bg-destructive text-destructive-foreground'
                }`}
      onClick={() => onSeatClick(String(id))}
    >
      {id}
    </button>
  )
}
