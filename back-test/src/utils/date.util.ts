export function convertSlotToMs(time: string): number {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 * 60 * 1000 + minutes * 60 * 1000;
}

export function convertSlotMsToTimeString(time: number): string {
  const date = new Date(time);
  const hours = `0${date.getUTCHours()}`.slice(-2);
  const minutes = `0${date.getUTCMinutes()}`.slice(-2);

  return `${hours}:${minutes}`;
}
