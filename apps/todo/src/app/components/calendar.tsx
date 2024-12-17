'use client';

import { format, getDaysInMonth } from 'date-fns';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React from 'react';

const DEFAULT_DAY_NAMES = [
  `Sun`,
  `Mon`,
  `Tue`,
  `Wed`,
  `Thu`,
  `Fri`,
  `Sat`,
] as const;

const getDaysCountFromMonth = (date: Date): number => {
  return getDaysInMonth(new Date(date.getFullYear(), date.getMonth()));
};

const getDaysListInMonth = (date: Date): number[] => {
  return Array.from({ length: getDaysCountFromMonth(date) }, (_, i) => i + 1);
};

function Calendar() {
  const now = new Date();

  const [dayNames] = React.useState(DEFAULT_DAY_NAMES);
  const [activeMonth, setActiveMonth] = React.useState<Date>(now);

  const daysCountInMonth = React.useMemo(
    () => getDaysListInMonth(activeMonth),
    [activeMonth]
  );

  const goToPrevMonth = (): void => {
    setActiveMonth(
      (prevActiveMonth) =>
        new Date(
          prevActiveMonth.getFullYear(),
          prevActiveMonth.getMonth() - 1,
          1
        )
    );
  };

  const goToNextMonth = (): void => {
    setActiveMonth(
      (prevActiveMonth) =>
        new Date(
          prevActiveMonth.getFullYear(),
          prevActiveMonth.getMonth() + 1,
          1
        )
    );
  };

  return (
    <div className="flex flex-col">
      <header className="flex items-center justify-between p-2">
        <h6 className="text-xl">{format(activeMonth, 'MMMM yyyy')}</h6>
        <div className="flex items-center space-x-2">
          <button onClick={goToPrevMonth}>
            <ChevronLeft />
          </button>
          <button onClick={goToNextMonth}>
            <ChevronRight />
          </button>
        </div>
      </header>
      <div className="grid gap-1 grid-cols-7">
        {dayNames.map((dayName) => (
          <div
            className="p-2 bg-slate-100 flex items-center justify-center"
            key={dayName}
          >
            {dayName}
          </div>
        ))}
        {daysCountInMonth.map((day) => (
          <div
            className="p-2 bg-slate-100 flex items-center justify-center"
            key={day}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
}

export { Calendar };
