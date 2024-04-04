import { createGlobalStyle } from "styled-components";
import {
  LOGIN_FAILURE,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./actionTypesLogin";
import axios from "axios";

export const loginAPI = (creds) => (dispatch) => {
  dispatch({ type: LOGIN_LOADING });

  let data = {
    email: creds.email,
    password: creds.password,
  };

  data = JSON.stringify(data);

  const headers = {
    "Content-Type": "application/json",
  };

  axios
    .post("https://debug-dhara-backend-server.onrender.com/users/login", data, {
      headers: headers,
    })
    .then((r) => dispatch({ type: LOGIN_SUCCESS, payload: r.data }))
    .catch(() => dispatch({ type: LOGIN_FAILURE }));
};

// export const logoutAPI = () => (
//   dispatch({ type: LOGOUT })
//   return axios
//     .delete(`https://debug-dhara-backend-server.onrender.com/snack/${payload}`)
//     .then((res) =>
//       dispatch({ type: types.DELETE_SNACK_SUCCESS, payload: res.data })
//     )
//     .catch((err) => dispatch({ type: types.DELETE_SNACK_FAILURE }));
//   );
export const deleteSnack = () => (dispatch) => {
  dispatch({ type: LOGOUT });
  return axios
    .get(`https://debug-dhara-backend-server.onrender.com/users/logout`)
    .then((res) =>
      console.log(res)
    )
    .catch((err) => console.log(err));
};