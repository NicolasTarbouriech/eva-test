import { useState } from "react";
import { Calendar } from "../interfaces/calendar.interface";

export function useVisibleDaysHook(calendar: Calendar) {
  const [startIndex, setStartIndex] = useState<number>(0);

  // we display only 7 days
  const visibleDays = Object.keys(calendar).slice(startIndex, startIndex + 7);
  const totalDays = Object.keys(calendar).length;

  const handlePrevClick = () => {
    // to be sure we dont go before our first day
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleNextClick = () => {
    // to be sure we dont go on a day we didnt have yet
    if (startIndex < totalDays - 7) {
      setStartIndex(startIndex + 1);
    }
  };

  return {startIndex, setStartIndex, visibleDays, totalDays, handleNextClick, handlePrevClick}
}
