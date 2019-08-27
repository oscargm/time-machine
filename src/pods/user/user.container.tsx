import * as React from "react";
import { UserLoginInfo } from "./components/login-nfo.component";

interface UserContainerProps {}

const UserContainer = (props: UserContainerProps) => {
  return (
    <>
      <h3>User</h3>
      <UserLoginInfo />
      {/* <UserBookingList/> */}
    </>
  );
};

export const User = UserContainer;
