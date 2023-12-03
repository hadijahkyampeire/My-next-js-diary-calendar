import React, { useState } from 'react';
import './EventForm.css';

interface EventFormProps {
  selectedDate: Date;
  onSubmit: (event: string) => void;
}

const EventForm: React.FC<EventFormProps> = ({ selectedDate, onSubmit }) => {
  const [event, setEvent] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEvent(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(event);
    setEvent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Event for {selectedDate.toDateString()}: </label>
        <input type="text" value={event} onChange={handleInputChange} />
      </div>
      <button type="submit">Add Event</button>
    </form>
  );
};

export { EventForm };
