import React from 'react';

export default function Seatslegend() {
  return (
    <div className="mt-2 flex flex-row gap-3 text-xs md:flex-col">
      <div className="flex flex-row items-center gap-1">
        <div className="size-5 rounded-full bg-muted"></div>
        <span>Available</span>
      </div>
      <div className="flex flex-row items-center gap-1">
        <div className="size-5 rounded-full bg-secondary"></div>
        <span>Selected</span>
      </div>
      <div className="flex flex-row items-center gap-1">
        <div className="size-5 rounded-full bg-destructive"></div>
        <span>Taken</span>
      </div>
    </div>
  );
}
