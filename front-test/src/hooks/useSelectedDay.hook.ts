import { useState } from "react";

export function useSelectedDayHook() {
  const [selectedDay, setSelectedDay] = useState<string>('');

  const handleDayClick = (day: any) => {
    setSelectedDay(day);
  };

  return {selectedDay, setSelectedDay, handleDayClick}
}
