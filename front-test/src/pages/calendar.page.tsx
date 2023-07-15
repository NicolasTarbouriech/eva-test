import { useEffect } from "react";
import calendarData from '../data/calendar.json';
import { Calendar } from "../interfaces/calendar.interface";
import { useSelectedDayHook } from "../hooks/useSelectedDay.hook";
import Slots from "../components/slots.component";
import Days from "../components/days.component";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Container, Grid } from "@mui/material";
import { useSelectedSlotHook } from "../hooks/useSelectedSlot.hook";

export default function CalendarPage() {
  const {selectedDay, setSelectedDay, handleDayClick} = useSelectedDayHook();
  const {selectedSlots, setSelectedSlots, handleSlotClick} = useSelectedSlotHook();
  const calendar: Calendar = calendarData;

  useEffect(() => {
    // set slots on first day available
    setSelectedDay(Object.keys(calendar)[0]);
  }, [calendar]);

  function clearAllSelections() {
    setSelectedSlots([]);
  }

  return (
    <Container>
      <Grid item xs={ 12 } sm={ 10 }
            sx={ {display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px'} }>
        <Grid container
              sx={{ justifyContent: 'space-between', marginBottom: '10px', alignItems: 'center'}}>
          <div style={ {display: 'flex', justifyContent: 'center', alignItems: 'center'} }>
            <div style={ {fontWeight: 'bold', fontSize: '20px', marginRight: '10px'} }>CALENDAR</div>
            <CalendarMonthIcon/>
          </div>
          <div
            style={ {cursor: 'pointer', textDecoration: 'underline'} }
            onClick={ () => clearAllSelections() }>Clear my selection(s)
          </div>
        </Grid>
        <Grid container sx={{ alignItems: "center", justifyContent: "center", flexDirection:"column", marginTop:"20px"}}>
          <Days calendar={ calendar } selectedDay={ selectedDay } handleDayClick={ handleDayClick }/>
          <div style={ {marginRight: 'auto', fontWeight: 'bold', fontSize: '20px', marginBottom: '20px'} }>
            AVAILABLE TIME SLOTS
          </div>
          <Slots calendar={ calendar } selectedDay={ selectedDay } selectedSlots={ selectedSlots }
                 handleSlotClick={ handleSlotClick }/>
        </Grid>
      </Grid>
    </Container>

  );
}
