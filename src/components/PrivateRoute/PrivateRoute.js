import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { LogedInContext } from '../../App';

const PrivateRoute = ({children,...rest}) => {
    const [LogedInUser]=useContext(LogedInContext);
    return (
        <Route
        {...rest}
        render={({ location }) =>
          LogedInUser.email? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;