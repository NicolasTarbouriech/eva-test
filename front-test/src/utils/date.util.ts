export function getLetterDay(day: string): string {
  const date = new Date(day);
  const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'short' });

  return dayOfWeek.slice(0, 3);
}

export function getDayNumberOfMonth(day: string): number {
  const date = new Date(day);
  return date.getDate();
}

export function getMonthName(day: string): string {
  const date = new Date(day);
  const monthIndex = date.getMonth();
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
    'November', 'December'];
  return monthNames[monthIndex];
}

export function getYear(day: string): number {
  const date = new Date(day);
  return date.getFullYear();
}
