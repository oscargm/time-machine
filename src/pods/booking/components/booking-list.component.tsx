import * as React from 'react';
import { Booking, weekDays } from '../store/model';
import './booking-list.styles.css';

interface BookingListProps {
  bookings: Booking[];
}

export const BookingList = (props: BookingListProps) => {
  const { bookings } = props;

  const getDateFormat = (bookingDate: Date): string => {
    const day = addLeadingZero(bookingDate.getDate());
    const month = addLeadingZero(bookingDate.getMonth() + 1);
    const year = bookingDate.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const getTimeFormat = (bookingDate: Date): string => {
    const hours = addLeadingZero(bookingDate.getHours());
    const minutes = addLeadingZero(bookingDate.getMinutes());
    const seconds = addLeadingZero(bookingDate.getSeconds());
    return `${hours}:${minutes}:${seconds}`;
  };

  const addLeadingZero = (nonZero: number): string =>
    nonZero < 10 ? String('0' + nonZero) : String(nonZero);

  const getWeekDay = (weekNumber: number) => weekDays[weekNumber];

  return (
    <div className={'table'}>
      <div className={'table-head'}>
        <div className={'table-cell'}>Week Day</div>
        <div className={'table-cell'}>Date</div>
        <div className={'table-cell'}>Time</div>
        <div className={'table-cell'}>Direction</div>
      </div>
      <div className={'table-body'}>
        {bookings.map((booking) => (
          <div key={`booking-${booking.id}`} className={'table-row'}>
            <div className={'table-cell'}>
              {getWeekDay(booking.date.getDay() - 1)}
            </div>
            <div className={'table-cell'}>{getDateFormat(booking.date)}</div>
            <div className={'table-cell'}>{getTimeFormat(booking.date)}</div>
            <div className={'table-cell'}>{booking.direction}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
