import { Slot, SlotsProps } from "../interfaces/slot.interface";
import { CardContent, Grid } from "@mui/material";
import { useEffect, useState } from "react";

export default function Slots({calendar, selectedDay, selectedSlots, handleSlotClick}: SlotsProps) {
  const [visibleSlots, setVisibleSlots] = useState<Slot[]>();
  const slots = calendar[selectedDay];

  useEffect(() => {
    setVisibleSlots(slots.slice(0, 16));
  }, [slots]);

  if (!slots || slots.length === 0) {
    return <p>No slots available for the selected day.</p>;
  }

  const handleShowAllClick = () => {
    setVisibleSlots(slots)
  };

  return (
    <>
      <Grid sx={ {display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '20px'} }>
        { visibleSlots?.map((slot: Slot) => (
          <CardContent
            className={ `slot-card ${ selectedSlots.includes(slot.slotId) ? 'selected' : '' }` }
            sx={ {
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              backgroundColor: selectedSlots.includes(slot.slotId) ? '#7565D9' : 'transparent',
              color: selectedSlots.includes(slot.slotId) ? '#ffffff' : 'inherit',
              cursor: 'pointer',
              "&:hover": {
                backgroundColor: '#7565D9',
                color: 'white',
              },
              minWidth: '130px',
              minHeight: '110px',
              border: '1px solid #7565D9',
              marginLeft: '0.5rem',
              marginBottom: '0.5rem'
            } }
            key={ slot.slotId }
            onClick={ () => handleSlotClick(slot.slotId) }
          >
            <div style={ {
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            } }>{ slot.slotStartTime }</div>
          </CardContent>
        )) }
      </Grid>
      { slots.length > 16 && (
        <div
          style={ {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            cursor: 'pointer',
            textDecoration: 'underline'
          } }
          onClick={ handleShowAllClick }
        >
          Show all time slots
        </div>
      ) }
    </>
  );
}
