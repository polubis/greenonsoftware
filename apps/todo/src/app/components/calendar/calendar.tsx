'use client';

import { format, getDay, getDaysInMonth, startOfMonth } from 'date-fns';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React from 'react';

type CalendarDay = {
  day: number;
  monthIndex: number;
};

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

const getDays = ({ activeDate }: { activeDate: Date }): number[] => {
  const ROWS_COUNT = 6;
  const [year, month] = [activeDate.getFullYear(), activeDate.getMonth()];
  const prevMonthDays = getDaysListInMonth(new Date(year, month - 1)).reverse();
  const currentMonthDays = getDaysListInMonth(activeDate);
  const currMonthStartDayIndex = getDay(startOfMonth(new Date(year, month, 1)));
  const prevAndCurrentMonthDaysSum = [
    ...Array.from(
      { length: currMonthStartDayIndex },
      (_, i) => prevMonthDays[i]
    ).reverse(),
    ...currentMonthDays,
  ];
  const nextMonthDays: number[] = Array.from(
    {
      length:
        DEFAULT_DAY_NAMES.length * ROWS_COUNT -
        prevAndCurrentMonthDaysSum.length,
    },
    (_, i) => i + 1
  );

  return [...prevAndCurrentMonthDaysSum, ...nextMonthDays];
};

// selection -> [Date | Date[]]
// activeDate
function Calendar() {
  const now = new Date();

  const [dayNames] = React.useState(DEFAULT_DAY_NAMES);
  const [activeDate, setActiveDate] = React.useState(now);

  const goToPrevMonth = (): void => {
    setActiveDate(
      (prevActiveDate) =>
        new Date(prevActiveDate.getFullYear(), prevActiveDate.getMonth() - 1, 1)
    );
  };

  const goToNextMonth = (): void => {
    setActiveDate(
      (prevActiveDate) =>
        new Date(prevActiveDate.getFullYear(), prevActiveDate.getMonth() + 1, 1)
    );
  };

  return (
    <div className="flex flex-col">
      <header className="flex items-center justify-between p-2">
        <h6 className="text-xl">{format(activeDate, 'MMMM yyyy')}</h6>
        <div className="flex items-center space-x-2">
          <button onClick={goToPrevMonth}>
            <ChevronLeft />
          </button>
          <button onClick={goToNextMonth}>
            <ChevronRight />
          </button>
        </div>
      </header>
      <div className="grid grid-cols-7 pb-2">
        {dayNames.map((dayName) => (
          <div
            className="p-2 flex items-center justify-center font-medium"
            key={dayName}
          >
            {dayName}
          </div>
        ))}
        {getDays({ activeDate }).map((day, index) => (
          <div className="p-2 flex items-center justify-center" key={index}>
            {day}
          </div>
        ))}
      </div>
    </div>
  );
}

export { Calendar };
