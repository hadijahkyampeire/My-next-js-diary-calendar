'use client';
import React, { useState } from 'react';
import { Calendar } from './calendar';
import { EventForm } from './EventForm';
import './page.css';

interface Events {
  [key: string]: string[] | undefined;
}

export default function Home() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState<Events>({});

  const handleSelectDate = (date: Date) => {
    setSelectedDate(date);
  };

  const handleAddEvent = (event: string) => {
    setEvents((prevEvents) => ({
      ...prevEvents,
      [selectedDate.toISOString()]: [...(prevEvents[selectedDate.toISOString()] || []), event],
    }));
  };

  const selectedDateString: string = selectedDate ? selectedDate.toISOString() : '';

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Haddyz Diary Calendar App</h1>
      <Calendar setSelectedDate={handleSelectDate} selectedDate={selectedDate} />
      <EventForm selectedDate={selectedDate} onSubmit={handleAddEvent} />
      {events[selectedDateString] && (
        <div>
          <h2>Events for {selectedDate.toLocaleDateString()}:</h2>
          <ul>
            {events[selectedDateString]?.map((event, index) => (
              <li key={index}>{event}</li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}
