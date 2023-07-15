import { Calendar } from "./calendar.interface";

export interface DaysProps {
  calendar: Calendar;
  selectedDay: string;
  handleDayClick: (day: string) => void;
}
