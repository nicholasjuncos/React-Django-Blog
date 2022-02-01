// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
// eslint-disable-next-line import/no-cycle
import LoginForm from "./components/LoginForm";

function LoginContainer() {
  // STATE
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(true);

  // REACT ROUTER DOM
  // eslint-disable-next-line no-unused-vars
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // REDUX
  const dispatch = useDispatch();

  // eslint-disable-next-line no-shadow,no-unused-vars
  const checkAuthentication = () => {
    const token = localStorage.getItem("token");
    axios
      .post(
        `${process.env.REACT_APP_DJANGO_BACKEND}api/auth/token/verify/`,
        {
          token,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        axios
          .get(`${process.env.REACT_APP_DJANGO_BACKEND}api/auth/user/`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            dispatch({ type: "AUTHENTICATED", payload: response.data });
            setLoading(false);
            navigate("/", { replace: true });
          })
          .catch((error) => {
            console.log(error, error.response);
            dispatch({ type: "AUTHENTICATION_FAILED" });
            // dispatch({ type: "RESET_SEARCH_STATE" });
            setLoading(false);
            localStorage.clear();
            navigate("/login", { replace: true });
          });
      })
      .catch((error) => {
        console.log(error, error.response);
        dispatch({ type: "AUTHENTICATION_FAILED" });
        // dispatch({ type: "RESET_SEARCH_STATE" });
        setLoading(false);
        localStorage.clear();
        navigate("/login", { replace: true });
      });
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      checkAuthentication();
    } else {
      setLoading(false);
    }
  }, [pathname]);

  return <LoginForm />;
}

export default LoginContainer;
