import axios from "axios";

const initialState = {
  authenticated: false,
  authenticating: false,
  checkingAuthentication: false,
  user: null,
  errorMessage: "",
};

// ************************ REDUCER ************************
export function loginReducer(state = initialState, action) {
  switch (action.type) {
    case "AUTHENTICATING":
      return {
        ...state,
        authenticating: true,
        errorMessage: "",
      };
    case "CHECKING_AUTHENTICATION":
      return {
        ...state,
        checkAuthentication: true,
      };
    case "CHECKING_AUTHENTICATION_SUCCESS":
      return {
        ...state,
        checkAuthentication: false,
      };
    case "AUTHENTICATED":
      return {
        ...state,
        authenticating: false,
        authenticated: true,
        checkingAuthentication: false,
        user: action.payload,
        errorMessage: "",
      };
    case "AUTHENTICATION_FAILED":
      return {
        ...state,
        authenticating: false,
        authenticated: false,
        checkingAuthentication: false,
        user: null,
        errorMessage: action.payload,
      };
    case "LOG_OUT":
      return {
        ...initialState,
      };
    default:
      return state;
  }
}

// ************************ ACTIONS ************************
export const setErrorMessage = (errorMessage) => ({
  type: "AUTHENTICATION_FAILED",
  payload: errorMessage,
});

export const signup = (credentials, navigate) => (dispatch) => {
  dispatch({ type: "AUTHENTICATING" });
  console.log("HELLO WORLD");

  axios
    .post(`${process.env.REACT_APP_DJANGO_BACKEND}api/auth/registration/`, {
      first_name: credentials.firstName,
      last_name: credentials.lastName,
      email: credentials.email,
      username: credentials.username,
      password1: credentials.password,
      password2: credentials.password2,
    })
    .then((response) => {
      const { token } = response.data.access_token;
      const { refreshToken } = response.data.refreshToken;
      localStorage.setItem("token", token);
      localStorage.setItem("refreshToken", refreshToken);
      dispatch({ type: "AUTHENTICATED", payload: response.data.user });
      navigate(-1, { replace: true });
      // if (history.location.state) {
      //   history.replace(history.location.state.from.pathname);
      // } else {
      //   history.replace("/");
      // }
    })
    .catch((error) => {
      let errorMessage = "";
      if (error.response && error.response.data) {
        if (typeof error.response.data === "string") {
          errorMessage = error.response.data;
        } else if (typeof error.response.data === "object") {
          if (errorMessage !== "") {
            errorMessage += "\n";
          }
          // eslint-disable-next-line guard-for-in,no-restricted-syntax
          for (const x in error.response.data) {
            errorMessage += `${x}: `;
            // eslint-disable-next-line guard-for-in,no-restricted-syntax
            for (const y in error.response.data[x]) {
              errorMessage += `${error.response.data[x][y]} `;
            }
          }
        } else if (error.response.data.non_field_errors) {
          // eslint-disable-next-line prefer-destructuring
          errorMessage = error.response.data.non_field_errors[0];
        }
      } else {
        errorMessage = "There was an error with the server. Please contact support.";
      }
      console.log(error, error.response, errorMessage);
      dispatch(setErrorMessage(errorMessage));
    });
};

export const authenticate = (credentials, navigate) => (dispatch) => {
  dispatch({ type: "AUTHENTICATING" });

  axios
    .post(`${process.env.REACT_APP_DJANGO_BACKEND}api/auth/login/`, {
      username: credentials.username,
      password: credentials.password,
    })
    .then((response) => {
      const { token } = response.data.access_token;
      const { refreshToken } = response.data.refreshToken;
      localStorage.setItem("token", token);
      localStorage.setItem("refreshToken", refreshToken);
      dispatch({ type: "AUTHENTICATED", payload: response.data.user });
      navigate(-1, { replace: true });
      // if (history.location.state) {
      //   history.replace(history.location.state.from.pathname);
      // } else {
      //   history.replace("/");
      // }
    })
    .catch((error) => {
      let errorMessage = "";
      if (error.response && error.response.data) {
        if (typeof error.response.data === "string") {
          errorMessage = error.response.data;
        } else if (error.response.data.non_field_errors) {
          // eslint-disable-next-line prefer-destructuring
          errorMessage = error.response.data.non_field_errors[0];
        }
      } else {
        errorMessage = "There was an error with the server. Please contact support.";
      }
      console.log(error, error.response, errorMessage);
      dispatch(setErrorMessage(errorMessage));
    });
};

export const resetAllStates = () => (dispatch) => {
  dispatch({ type: "RESET_POSTS_STATE" });
};

export const checkAuthentication = (navigate) => (dispatch) => {
  dispatch({ type: "CHECKING_AUTHENTICATION" });
  const token = localStorage.getItem("token");
  const refreshToken = localStorage.getItem("refreshToken");
  axios
    .post(
      `${process.env.REACT_APP_DJANGO_BACKEND}api/auth/token/refresh/`,
      {
        refresh_token: refreshToken,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((response) => {
      console.log(`Data: ${response.data}`);
      dispatch({ type: "CHECKING_AUTHENTICATION_SUCCESS" });
    })
    .catch((error) => {
      console.log(error, error.response);
      dispatch({ type: "AUTHENTICATION_FAILED" });
      dispatch(resetAllStates());
      localStorage.clear();
      navigate("/login", { replace: true });
      // history.replace("/login");
    });
};

/**
 * @summary - Deals with axios error responses.
 * @param {Object} error - Error object parameter gotten from the .catch() function.
 * @param {function} errorMessageCallback - Error message setting function.
 * @param {History} history - react-router-dom's useHistory() object.
 */
export const catchRequestError = (error, errorMessageCallback, history) => (dispatch) => {
  console.log("hi", error, error.response);
  if (error.response) {
    if (
      error?.response?.data?.msg === "Invalid Authentication" ||
      error?.response?.data?.msg === "Missing Authorization Header"
    ) {
      dispatch(resetAllStates());
      dispatch({ type: "AUTHENTICATION_FAILED", payload: "Your Session Has Expired" });
      localStorage.clear();
      history.replace("/login");
    } else if (error.response.status === 500) {
      dispatch(errorMessageCallback("Can't reach the server. Please try again."));
    } else {
      dispatch(
        errorMessageCallback(
          "Oops! Something went wrong. Please contact the administrator at info@example.com"
        )
      );
    }
  } else {
    dispatch(errorMessageCallback("Request timed out. Please try again."));
  }
};