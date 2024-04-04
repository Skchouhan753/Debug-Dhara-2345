import {
  REGISTER_FAILURE,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from "./actionTypesRegister";
import axios from "axios";

export const registerAPI = (creds) => (dispatch) => {
  dispatch({ type: REGISTER_LOADING });

  let data = {
    username: creds.username,
    email: creds.email,
    password: creds.password,
  };

  // localStorage.setItem("nameUser", JSON.stringify(creds.name));

  // data = JSON.stringify(data);

  const headers = {
    "Content-Type": "application/json",
  };
// https://myfitnesspalclone17.herokuapp.com/auth/register
  axios
    .post("https://debug-dhara-backend-server.onrender.com/users/register", data, {
      headers: headers,
    })
    .then((r) => dispatch({ type: REGISTER_SUCCESS, payload: r.data }))
    .catch((e) => dispatch({ type: REGISTER_FAILURE, payload: e }));
};



// export const registerAPI = (creds) => (dispatch) => {
//   dispatch({ type: REGISTER_LOADING });

//   let data = {
//     username: creds.username,
//     email: creds.email,
//     password: creds.password,
//   };

//   // Convert data to JSON format
//   // data = JSON.stringify(data);

//   const headers = {
//     "Content-Type": "application/json",
//   };


//   axios
//     .post("https://debug-dhara-backend-server.onrender.com/users/register", data, {
//       headers: headers,
//     })
//     .then((response) => {
//       // Assuming the response contains the user data
//       dispatch({ type: REGISTER_SUCCESS, payload: response.data });
//       // console.log(response)
//     })
//     .catch((error) => {
//       // Handle the error properly
//       let errorMessage = "an error occurred during registration.";
//       if (error.response && error.response.data && error.response.data.message) {
//         errorMessage = error.response.data.message;
//       }
//       dispatch({ type: REGISTER_FAILURE, payload: errorMessage });
//     });
// };

