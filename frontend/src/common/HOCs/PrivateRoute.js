import React, { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { Route, Navigate, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { resetAllStates } from "../../routes/auth/login/reducers/loginReducer";
import { ReactComponent as Spinner } from "../../assets/images/spinner.svg";

// eslint-disable-next-line react/prop-types
function PrivateRoute({ component: Component, title, ...rest }) {
  // STATE
  const [loading, setLoading] = useState(true);
  const [redirect, setRedirect] = useState(false);

  // REACT ROUTER DOM
  const { pathname } = useLocation();
  // const navigate = useNavigate();

  // REDUX
  const dispatch = useDispatch();
  const authenticated = useSelector((state) => state.loginReducer.authenticated);

  const checkAuthentication = () => {
    const token = localStorage.getItem("token");
    const refreshToken = localStorage.getItem("refreshToken");
    setLoading(true);
    axios
      .post(
        `${process.env.REACT_APP_DJANGO_BACKEND}api/auth/token/refresh/`,
        { refresh_token: refreshToken },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(`Data: ${response.data}`);
        dispatch({ type: "CHECKING_AUTHENTICATION_SUCCESS" });
        setLoading(false);
      })
      .catch((error) => {
        console.log(error, error.response);
        dispatch({ type: "AUTHENTICATION_FAILED" });
        dispatch(resetAllStates());
        setLoading(false);
        setRedirect(true);
        localStorage.clear();
      });
  };

  useEffect(() => {
    checkAuthentication();
    // eslint-disable-next-line
  }, [pathname])


  return (
    <Route
      {...rest}
      render={(routerProps) => {
        if (localStorage.getItem("token") && authenticated) {
          document.title = `React-Django-Blog${title ? ` - ${title}` : ""}`;
          return <Component {...routerProps} />;
        }
        if (loading) {
          return (
            <div className="login" id="LoginContainer">
              <Spinner />
            </div>
          );
        }
        if (redirect) {
          return <Navigate to={{ pathname: "/login", state: { from: routerProps.location } }} />;
        }
        return <div>There has been an issue with the server</div>;
      }}
    />
  );
}

export default PrivateRoute;
