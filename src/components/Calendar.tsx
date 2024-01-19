
'use client'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

export default function Calendar({task}:any) {


  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={task?.map((t: any) => (
        {title:t.name, date:t.date, url: '/notes/'+t._id}
        ))}
    />
  );
};