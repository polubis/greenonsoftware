'use client';

import React from 'react';
import { DateRange, DayPicker } from 'react-day-picker';

import 'react-day-picker/style.css';

function Calendar() {
  const [activeRange, setActiveRnage] = React.useState<DateRange | undefined>({
    from: new Date(2024, 1, 3),
    to: new Date(2024, 1, 4),
  });

  return (
    <DayPicker
      mode="range"
      required
      selected={activeRange}
      onSelect={(dates) => {
        setActiveRnage(dates);
      }}
    />
  );
}

export { Calendar };
