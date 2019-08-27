import * as React from "react";
import { withSession, WithSession } from "@pods/core/session";

interface UserLoginInfoContainerProps extends WithSession {}

const UserLoginInfoContainer = (props: UserLoginInfoContainerProps) => {
  const { logedIn, logedInSince, logedUsername, token } = props;
  return (
    <>
      {logedIn && (
        <ul>
          <li>Username: {logedUsername}</li>
          <li>Loged in since: {logedInSince.toLocaleString()}</li>
          <li>Token: {token}</li>
        </ul>
      )}
    </>
  );
};

export const UserLoginInfo = withSession(UserLoginInfoContainer);
