import React, { useState } from 'react';
import './EventForm.css';

interface EventFormProps {
  selectedDate: number;
  onSubmit: (event: string) => void;
  year: number;
  month: number;
}

const EventForm: React.FC<EventFormProps> = ({ selectedDate, onSubmit, year, month }) => {
  const [event, setEvent] = useState('');
  const monthTexts = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
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
        <label>Event for {`${selectedDate}-${monthTexts[month]}-${year}`}: </label>
        <input type="text" value={event} onChange={handleInputChange} />
      </div>
      <button type="submit" className='add-event'>Add Event</button>
    </form>
  );
};

export { EventForm };
