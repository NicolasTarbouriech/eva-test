import { Terrain } from "./terrain.interface";
import { Calendar } from "./calendar.interface";

export interface Slot {
  slotId: number;
  date: string;
  slotStartTime: string;
  slotEndTime: string;
  weekDay: string;
  totalAvailablePlaces: number;
  terrains: Terrain[];
  isPremium: boolean;
}

export interface SlotsProps {
  calendar: Calendar;
  selectedDay: string;
  selectedSlots: number[];
  handleSlotClick: (slotId: number) => void;
}
