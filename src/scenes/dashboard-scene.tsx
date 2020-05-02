import * as React from 'react';
import { User } from '@pods/user';
import { Booking } from '@app/pods/booking';

export const Dashboard = () => (
  <section id={'container'}>
    <section id={'header'}>
      <h1>Time machine</h1>
      <User />
    </section>
    <section id={'content'}>
      <Booking />
    </section>
  </section>
);
