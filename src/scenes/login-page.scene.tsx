import * as React from "react";
import { LoginForm } from "@app/pods/login-form";

export const LoginPage = () => (
  <section id={"container"}>
    <section id={"header"}>
      <h1>Time machine</h1>
    </section>
    <section id={"content"}>
      <LoginForm />
    </section>
  </section>
);
