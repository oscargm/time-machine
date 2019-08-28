import * as React from "react";
import { User } from "@pods/user";
import { BookingList } from "@app/pods/booking-list";

export const Dashboard = () => (
  <section id={"container"}>
    <section id={"header"}>
      <h1>Time machine</h1>
      <User />
    </section>
    <section id={"content"}>
      <BookingList />
    </section>
  </section>
);
