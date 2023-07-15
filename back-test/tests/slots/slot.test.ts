import { generateSlots } from "../../src/services/slot.service";

describe('generateSlots', () => {
  const config = {
    opening_time: {
      monday: [
        {from: '14:00', to: '15:00'}
      ],
      tuesday: [
        {from: '23:00', to: '23:30'}
      ],
      saturday: [
        {from: "23:30", to: "01:00"}
      ]
    },
    terrains: [
      {name: 'A', players: 12},
      {name: 'B', players: 6},
    ],
    session_duration: '00:30',
  };

  it('generates slots correctly', () => {
    const slots = generateSlots(config);
    expect(slots).toEqual([
      {
        dayOfWeek: 'monday',
        startTime: '14:00',
        endTime: '14:30',
        numberPlayers: 18,
        platform: 'EVA.gg',
      },
      {
        dayOfWeek: 'monday',
        startTime: '14:30',
        endTime: '15:00',
        numberPlayers: 18,
        platform: 'EVA.gg',
      },
      {
        dayOfWeek: 'tuesday',
        startTime: '23:00',
        endTime: '23:30',
        numberPlayers: 18,
        platform: 'EVA.gg',
      },
      {
        dayOfWeek: 'saturday',
        startTime: '23:30',
        endTime: '00:00',
        numberPlayers: 18,
        platform: 'EVA.gg',
      },
      {
        dayOfWeek: 'saturday',
        startTime: '00:00',
        endTime: '00:30',
        numberPlayers: 18,
        platform: 'EVA.gg',
      },
      {
        dayOfWeek: 'saturday',
        startTime: '00:30',
        endTime: '01:00',
        numberPlayers: 18,
        platform: 'EVA.gg',
      }
    ]);
  });
});
