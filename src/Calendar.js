import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import React from 'react'
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment)

const MyCalendar = props => (
  <div>
    <h1 className="home__title">Calendar</h1>
    <Calendar
      localizer={localizer}
      events={[]}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500, backgroundColor: "white" }}
    />
  </div>
)

export default MyCalendar;