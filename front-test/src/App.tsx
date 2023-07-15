import React from 'react';
import './App.css';
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import CalendarPage from "./pages/calendar.page";

const lightTheme = createTheme();

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline/>
      <Routes>
        <Route path="/" element={<CalendarPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
