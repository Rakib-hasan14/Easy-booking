import React  from 'react';
import { Redirect, Route  } from 'react-router';
import useAthentication from '../Hooks/useAthentication';

const PrivateRoute = ({ children, ...rest }) => {
    const {user} = useAthentication();
    return (
        <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
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