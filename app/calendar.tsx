import React from 'react';
import { Day } from './day';
import './calendar.css';

interface calendarProps {
  setSelectedDate: (day: any) => void;
  selectedDate: Date | null;
}
const Calendar: React.FC<calendarProps> = ({ setSelectedDate, selectedDate }) => {

  const handlePrevMonth = () => {
    if (selectedDate !== null) {
      setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1));
    }
  };

  const handleNextMonth = () => {
    if (selectedDate !== null) {
      setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1));
    }
  };

  const handlePrevYear = () => {
    if (selectedDate !== null) {
      setSelectedDate(new Date(selectedDate.getFullYear() - 1, selectedDate.getMonth(), 1));
    }
  };

  const handleNextYear = () => {
    if (selectedDate !== null) {
      setSelectedDate(new Date(selectedDate.getFullYear() + 1, selectedDate.getMonth(), 1));
    }
  };

  const daysInMonth = selectedDate ? new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0).getDate() : 0;
  const days = Array.from({ length: daysInMonth }, (_, index) => index + 1);

  return (
    <div className="calendar-container">
      <div className='year-month-toggles'>
        <div className='year-toggle'>
          <button onClick={handlePrevYear}>&lt;</button>
          <span>{selectedDate?.getFullYear()}</span>
          <button onClick={handleNextYear}>&gt;</button>
        </div>
        <div className='month-toggle'>
          <button onClick={handlePrevMonth}>&lt;</button>
          <span>{new Date().toLocaleString('default', { month: 'long' })}</span>
          <button onClick={handleNextMonth}>&gt;</button>
        </div>
      </div>
      <div className='calendar-days'>
      {days.map((day) => (
        <Day key={day} day={day} onSelectDate={setSelectedDate} selected={day === selectedDate?.getDate()} />
      ))}
      </div>
    </div>
  );
};

export { Calendar };
