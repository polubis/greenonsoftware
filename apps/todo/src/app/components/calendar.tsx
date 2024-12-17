'use client';

import { format, getDay, getDaysInMonth, startOfMonth } from 'date-fns';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React from 'react';

type RowsCount = number;

type CalendarProps = {
  rowsCount?: RowsCount;
};

const ROWS_COUNT = 6;
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

const getDays = ({
  activeMonth,
  rowsCount,
}: {
  activeMonth: Date;
  rowsCount: RowsCount;
}): number[] => {
  const [year, month] = [activeMonth.getFullYear(), activeMonth.getMonth()];
  const prevMonthDays = getDaysListInMonth(new Date(year, month - 1)).reverse();
  const currentMonthDays = getDaysListInMonth(activeMonth);
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
        DEFAULT_DAY_NAMES.length * rowsCount -
        prevAndCurrentMonthDaysSum.length,
    },
    (_, i) => i + 1
  );

  return [...prevAndCurrentMonthDaysSum, ...nextMonthDays];
};

function Calendar({ rowsCount = ROWS_COUNT }: CalendarProps) {
  const now = new Date();

  const [dayNames] = React.useState(DEFAULT_DAY_NAMES);
  const [activeMonth, setActiveMonth] = React.useState(now);

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
        {getDays({ activeMonth, rowsCount }).map((day, index) => (
          <div
            className="p-2 bg-slate-100 flex items-center justify-center"
            key={index}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
}

export { Calendar };
