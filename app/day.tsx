import React from 'react';

import './day.css';

interface dayProps {
  day: number;
  onSelectDate: (day: number) => void;
  selected: boolean;
  hasEvent: boolean;
}

const Day: React.FC<dayProps> = ({ day, onSelectDate, selected, hasEvent }) => {
  const dayContainerClasses = `day-container ${selected ? 'selectedDay' : ''}`;
  return (
    <div
      className={dayContainerClasses}
      onClick={() => onSelectDate(day)}>
        {hasEvent ? <span>📥</span> : null}
      {day}
    </div>
  );
};

export { Day };
