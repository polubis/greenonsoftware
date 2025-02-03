import { getCalendarDays } from './../../app/utils/date';
import { useState, useMemo } from 'react';


export const useCalendar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const calendarDays = useMemo(() => {
    return getCalendarDays(currentYear, currentMonth);
  }, [currentMonth, currentYear]);

  const weekDays = useMemo(() => {
    const startDate = new Date(selectedDate);
    startDate.setDate(startDate.getDate() - startDate.getDay());

    const days: Date[] = [];
    for (let i = 0; i < 7; i++) {
      days.push(new Date(startDate));
      startDate.setDate(startDate.getDate() + 1);
    }
    return days;
  }, [selectedDate]);

  const toggleCalendar = () => setIsExpanded(!isExpanded);

  const navigateMonth = (direction: 'prev' | 'next') => {
    if (direction === 'next') {
      if (currentMonth === 11) {
        setCurrentMonth(0);
        setCurrentYear(currentYear + 1);
      } else {
        setCurrentMonth(currentMonth + 1);
      }
    } else {
      if (currentMonth === 0) {
        setCurrentMonth(11);
        setCurrentYear(currentYear - 1);
      } else {
        setCurrentMonth(currentMonth - 1);
      }
    }
  };

  return {
    isExpanded,
    selectedDate,
    currentMonth,
    currentYear,
    calendarDays,
    weekDays,
    toggleCalendar,
    setSelectedDate,
    navigateMonth,
  };
};
