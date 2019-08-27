import * as React from "react";
import { User } from "@pods/user";

export const Dashboard = () => (
  <section id={"container"}>
    <section id={"header"}>
      <h1>Time machine</h1>
      <User />
    </section>
    <section id={"content"}>
      <h2>hello!</h2>
    </section>
  </section>
);
