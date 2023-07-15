import { convertSlotMsToTimeString, convertSlotToMs } from "../../src/utils/date.util";

describe('convertSlotToMs', () => {
  it('converts a time string to milliseconds', () => {
    expect(convertSlotToMs('10:00')).toBe(36000000);
    expect(convertSlotToMs('23:30')).toBe(84600000);
  });
});

describe('convertSlotMsToTimeString', () => {
  it('converts milliseconds to a time string', () => {
    expect(convertSlotMsToTimeString(36000000)).toBe('10:00');
    expect(convertSlotMsToTimeString(84600000)).toBe('23:30');
  });
});
