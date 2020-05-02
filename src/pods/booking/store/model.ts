export enum Direction {
  ENTRANCE = 'Entrance',
  EXIT = 'Exit',
}

export const weekDays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

export interface Booking {
  id: number;
  date: Date;
  direction: Direction;
}
