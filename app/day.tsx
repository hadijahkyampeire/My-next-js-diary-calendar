import React from 'react';

import './day.css';

interface dayProps {
  day: number;
  onSelectDate: (day: number) => void;
  selected: boolean;
}

const Day: React.FC<dayProps> = ({ day, onSelectDate, selected }) => {
  const dayContainerClasses = `day-container ${selected ? 'selectedDay' : ''}`;
  return (
    <div
      className={dayContainerClasses}
      onClick={() => onSelectDate(day)}>
      {day}
    </div>
  );
};

export { Day };
