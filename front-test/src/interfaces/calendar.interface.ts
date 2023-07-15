import { Slot } from "./slot.interface";

export interface Calendar {
  [date: string]: Slot[];
}
