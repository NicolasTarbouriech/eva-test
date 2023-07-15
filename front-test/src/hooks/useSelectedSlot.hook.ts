import { useState } from "react";

export function useSelectedSlotHook() {
  const [selectedSlots, setSelectedSlots] = useState<number[]>([]);

  const handleSlotClick = (slotId: number) => {
    const isSelected = selectedSlots.includes(slotId);

    if (isSelected) {
      // cancel selection
      setSelectedSlots(selectedSlots.filter((id) => id !== slotId));
    } else {
     // add slot to the array
      setSelectedSlots([...selectedSlots, slotId]);
    }
  };

  return { selectedSlots, setSelectedSlots, handleSlotClick };
}
