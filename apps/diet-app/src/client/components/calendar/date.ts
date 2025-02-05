export const getDaysInMonth = (year: number, month: number): Date[] => {
  const date = new Date(year, month, 1);
  const days: Date[] = [];

  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }

  return days;
};

export const getCalendarDays = (year: number, month: number): Date[] => {
  const days = getDaysInMonth(year, month);
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  // Days from previous month
  const prevMonthDays = [];
  if (firstDayOfMonth !== 0) {
    const prevMonth = new Date(year, month, 0);
    const prevMonthLastDay = prevMonth.getDate();

    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
      prevMonthDays.push(
        new Date(
          prevMonth.getFullYear(),
          prevMonth.getMonth(),
          prevMonthLastDay - i
        )
      );
    }
  }

  // Days from next month
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const lastWeekday = lastDayOfMonth.getDay();
  const nextMonthDays = [];

  if (lastWeekday !== 6) {
    const daysToAdd = 6 - lastWeekday;
    for (let i = 1; i <= daysToAdd; i++) {
      nextMonthDays.push(new Date(year, month + 1, i));
    }
  }

  return [...prevMonthDays, ...days, ...nextMonthDays];
};

export const isSameDay = (date1: Date, date2: Date): boolean => {
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
};

export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
  }).format(date);
};
