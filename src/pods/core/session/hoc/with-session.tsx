import { connect } from "react-redux";
import { isLogedIn, getUsername, isLogedInSince, getToken } from "../selectors";

export interface WithSession {
  logedIn: boolean;
  token: string;
  logedUsername: string;
  logedInSince: Date;
}

const mapStateToProps = state => ({
  logedIn: isLogedIn(state),
  token: getToken(state),
  logedUsername: getUsername(state),
  logedInSince: isLogedInSince(state)
});

export const withSession = connect(mapStateToProps);
