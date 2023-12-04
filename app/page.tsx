'use client';
import React, { useState } from 'react';
import { Calendar } from './calendar';
import { EventForm } from './EventForm';
import './page.css';

interface Events {
  [key: string]: string[] | undefined;
}

export default function Home() {
  const [month, setMonth] = useState(new Date().getMonth() as number);
  const [year, setYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState(new Date().getDate());
  const [events, setEvents] = useState<Events>({});

  const handleSelectDate = (date: number) => {
    setSelectedDate(date);
  };

  const handleAddEvent = (event: string) => {
    setEvents((prevEvents) => ({
      ...prevEvents,
      [`${selectedDate}-${month + 1}-${year}`]: [...(prevEvents[`${selectedDate}-${month + 1}-${year}`] || []), event],
    }));
  };


  return (
    <main className="my-diary-container">
      <h1>Haddyz Diary Calendar App</h1>
      <Calendar 
        setSelectedDate={handleSelectDate} 
        selectedDate={selectedDate} 
        year={year}
        month={month}
        setMonth={setMonth}
        events={events}
        setYear={setYear} />
      <EventForm selectedDate={selectedDate} onSubmit={handleAddEvent} year={year} month={month} />
      {events[`${selectedDate}-${month + 1}-${year}`] && (
        <div className='events-container'>
          <h2>Events for {`${selectedDate}-${month}-${year}`}:</h2>
          <ul>
            {events[`${selectedDate}-${month + 1}-${year}`]?.map((event, index) => (
              <li key={index}>{event}</li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}
