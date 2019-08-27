import * as React from "react";
import { withSession, WithSession } from "../core/session";

interface UserContainerProps extends WithSession {}

const UserContainer = (props: UserContainerProps) => {
  const { logedIn, logedInSince, logedUsername, token } = props;
  React.useEffect(() => {
    console.log("logedIn", logedIn);
    console.log("logedInSince", logedInSince);
    console.log("logedUsername", logedUsername);
    console.log("token", token);
  });
  return (
    <>
      <h3>User</h3>
      {logedIn && (
        <ul>
          <li>Username: {logedUsername}</li>
          <li>Loged in since: {logedInSince.toISOString()}</li>
          <li>Token: {token}</li>
        </ul>
      )}
    </>
  );
};

export const User = withSession(UserContainer);
