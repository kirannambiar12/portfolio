import React from "react";
import { useCookies } from "react-cookie";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ component: Component, ...rest }) {
  const [token] = useCookies(["auth-token"]);

  return (
    <Route
      {...rest}
      render={(props) =>
        token["auth-token"] ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}

export default PrivateRoute;
