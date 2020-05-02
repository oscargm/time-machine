import * as React from 'react';
import { BookingList } from './components/booking-list.component';
import { Booking as BookingModel, Direction } from './store/model';
import { BookingButton } from './components/booking-button.component';
import './booking.container.styles.css';

export const Booking = () => {
  const [data, setData] = React.useState<BookingModel[]>([
    { id: 0, date: new Date(), direction: Direction.ENTRANCE },
    { id: 1, date: new Date(), direction: Direction.EXIT },
  ]);
  const [working, setWorking] = React.useState<boolean>(false);
  return (
    <div className={'booking-container'}>
      <BookingButton
        working={working}
        onButtonClick={() => setWorking(!working)}
      />
      <BookingList bookings={data} />
    </div>
  );
};
