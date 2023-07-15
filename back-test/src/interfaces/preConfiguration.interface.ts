import { OpeningTime } from "./openingTime.interface";
import { Terrain } from "./terrain.interface";

export interface PreConfiguration {
  opening_time: OpeningTime;
  terrains: Terrain[];
  session_duration: string;
}
