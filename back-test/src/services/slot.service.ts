import { Slot } from "../interfaces/slot.interface";
import { convertSlotToMs, convertSlotMsToTimeString } from "../utils/date.util";
import { PreConfiguration } from "../interfaces/preConfiguration.interface";
import * as fs from "fs";
import { dataSlots } from "../dataslots";

export function generateSlots(config: PreConfiguration): Slot[] {
  const {opening_time, terrains, session_duration} = config;
  const sessionDurationMillis = convertSlotToMs(session_duration);
  const slots: Slot[] = [];

  for (const day in opening_time) {
    opening_time[day].forEach(({from, to}) => {
      const startTime = convertSlotToMs(from);
      let endTime = convertSlotToMs(to);

      if (endTime < startTime) {
        // add 24 hours in Ms if we are in the beginning of the next day
        endTime += 24 * 60 * 60 * 1000;
      }

      let currentTime = startTime;
      while (currentTime + sessionDurationMillis <= endTime) {
        // make the slot
        const slot: Slot = {
          dayOfWeek: day,
          startTime: convertSlotMsToTimeString(currentTime),
          endTime: convertSlotMsToTimeString(currentTime + sessionDurationMillis),
          numberPlayers: 0,
          platform: 'EVA.gg',
        };

        // add the total number for each terains
        terrains.forEach(({players}) => {
          slot.numberPlayers += players;
        });

        // store the slot in slots array
        slots.push(slot);
        // add 30 minuts in ms to each slot until currentTime > endTime
        currentTime += sessionDurationMillis;
      }
    });
  }

  return slots;
}

export function readFileAndGenerateSlotFile() {
  try {
    // retrieve data
    const slots = generateSlots(dataSlots);
    const slotsJSON = JSON.stringify(slots, null, 2);

    // add slots.json file
    fs.writeFile('slots.json', slotsJSON, 'utf8', (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(`slots.json file generated !`);
    });
  } catch (err) {
    console.error(err);
  }
}
