"use client";

import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import { calendarEvents } from "../lib/data";
import { useState } from "react";

type CalendarView = typeof Views[keyof typeof Views];

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
  const [view, setView] = useState<CalendarView>(Views.WORK_WEEK);

  const handleOnChangeView = (selectedView: CalendarView) => {
    setView(selectedView);
  };

  return (
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views={["work_week", "day"]}
      view={view}
      style={{ height: "98%" }}
      onView={handleOnChangeView}
      min={new Date(2025, 1, 0, 8, 0, 0)}
      max={new Date(2025, 1, 0, 17, 0, 0)}
    />
  );
};

export default BigCalendar;
