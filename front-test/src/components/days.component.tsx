import { DaysProps } from "../interfaces/day.interface";
import { getDayNumberOfMonth, getLetterDay, getMonthName, getYear } from "../utils/date.util";
import { CardContent, Grid, IconButton, Typography } from "@mui/material";
import { useVisibleDaysHook } from "../hooks/useVisibleDays.hook";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Days({calendar, selectedDay, handleDayClick}: DaysProps) {
  const {startIndex, visibleDays, totalDays, handleNextClick, handlePrevClick} =
    useVisibleDaysHook(calendar);

  return (
    <Grid sx={ {display: 'flex', marginRight: 'auto', marginBottom: '60px'} }>
      <IconButton
        sx={{ position: 'absolute', top: '150px', left: '120px'}}
        onClick={ handlePrevClick }
        disabled={ startIndex === 0 }
        aria-label="Previous"
      >
        <ArrowBackIcon/>
      </IconButton>
      { visibleDays.map((day) => (
        <CardContent
          sx={ {
            backgroundColor: selectedDay === day ? '#7565D9' : 'transparent',
            color: selectedDay === day ? 'white' : 'inherit', cursor: 'pointer',
            "&:hover": {
              backgroundColor: '#7565D9',
              color: 'white',
            },
            minWidth: '150px', border: '1px solid #7565D9', marginLeft: '0.5rem', marginBottom: '0.5rem'
          } }
          key={ day }
          onClick={ () => handleDayClick(day) }
        >
          <Typography sx={ {fontWeight: 'bold', display: 'flex', justifyContent: 'center'} }>
            { getLetterDay(day) }</Typography>
          <Typography sx={ {fontWeight: 'bold', fontSize: '34px', display: 'flex', justifyContent: 'center'} }>
            { getDayNumberOfMonth(day) }</Typography>
          <Typography sx={ {fontWeight: 'bold', fontSize: '24px', marginTop: '1rem', display: 'flex',
            justifyContent: 'center'} }>
            { getMonthName(day).toUpperCase() }
          </Typography>
          <Typography sx={ {fontWeight: 'bold', fontSize: '12px', display: 'flex', justifyContent: 'center'} }>
            { getYear(day) }</Typography>
        </CardContent>
      )) }
      <IconButton
        sx={{ position: 'absolute', right: '170px', top: '150px'}}
        onClick={ handleNextClick }
        disabled={ startIndex === totalDays - 7 }
        aria-label="Next"
      >
        <ArrowForwardIcon/>
      </IconButton>
    </Grid>
  );
}
