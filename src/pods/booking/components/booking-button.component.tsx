import * as React from 'react';
import './booking-button.styles.css';

interface BookingButtonProps {
  working: boolean;
  onButtonClick: () => void;
}
export const BookingButton = (props: BookingButtonProps) => {
  const { working, onButtonClick } = props;
  return (
    <span
      className={'booking-button'}
      style={{ backgroundColor: working ? 'green' : 'red' }}
      onClick={onButtonClick}
    >
      {working ? 'Finish working' : 'Start working'}
    </span>
  );
};
