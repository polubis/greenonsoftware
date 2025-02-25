'use client';

import {
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { useCalendar } from './use-calendar';

import clsx from 'clsx';
import { isSameDay } from './date';

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const Calendar = () => {
  const {
    isExpanded,
    selectedDate,
    currentMonth,
    currentYear,
    calendarDays,
    weekDays,
    toggleCalendar,
    setSelectedDate,
    navigateMonth,
  } = useCalendar();

  const today = new Date();

  return (
    
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-sm">
      <div className="p-4">
        <button
          onClick={toggleCalendar}
          className="flex items-center justify-between w-full mb-4 text-lg font-medium"
        >
          <span>
            {isSameDay(today, selectedDate) ? 'Today,' : ''}{' '}
            {new Intl.DateTimeFormat('en-US', {
              month: 'short',
              day: 'numeric',
            }).format(selectedDate)}
          </span>
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>

        {isExpanded ? (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-semibold">
                {new Intl.DateTimeFormat('en-US', {
                  month: 'long',
                  year: 'numeric',
                }).format(new Date(currentYear, currentMonth))}
              </h2>
              <div className="flex gap-1">
                <button
                  onClick={() => navigateMonth('prev')}
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => navigateMonth('next')}
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-1">
              {WEEKDAYS.map((day, index) => (
                <div
                  key={`expanded-${day}-${index}`}
                  className="flex items-center justify-center h-10 text-sm font-medium text-gray-500"
                >
                  {day}
                </div>
              ))}
              {calendarDays.map((date, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedDate(date)}
                  className={clsx(
                    'h-10 flex items-center justify-center rounded-full text-sm transition-colors relative',
                    isSameDay(date, selectedDate) && 'bg-gray-900 text-white',
                    isSameDay(date, today) &&
                      !isSameDay(date, selectedDate) &&
                      'font-bold',
                    !isSameDay(date, selectedDate) && 'hover:bg-gray-100',
                    date.getMonth() !== currentMonth && 'text-gray-400'
                  )}
                >
                  {date.getDate()}
                  {isSameDay(date, today) && !isSameDay(date, selectedDate) && (
                    <div className="absolute bottom-1.5 w-1 h-1 bg-gray-900 rounded-full" />
                  )}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-1">
            <div className="grid grid-cols-7 gap-1">
              {WEEKDAYS.map((day, index) => (
                <div
                  key={`collapsed-${day}-${index}`}
                  className="flex items-center justify-center h-10 text-sm font-medium text-gray-500"
                >
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1">
              {weekDays.map((date, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setSelectedDate(date);
                    console.log(date.getDate());
                  }}
                  className={clsx(
                    'h-10 flex items-center justify-center rounded-full text-sm transition-colors relative',
                    isSameDay(date, selectedDate) && 'bg-gray-900 text-white',
                    isSameDay(date, today) &&
                      !isSameDay(date, selectedDate) &&
                      'font-bold',
                    !isSameDay(date, selectedDate) && 'hover:bg-gray-100'
                  )}
                >
                  {date.getDate()}
                  {isSameDay(date, today) && !isSameDay(date, selectedDate) && (
                    <div className="absolute bottom-1.5 w-1 h-1 bg-gray-900 rounded-full" />
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
