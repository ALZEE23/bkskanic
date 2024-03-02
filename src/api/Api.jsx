//import axios
import axios from "axios";

//import js cookie
import Cookies from "js-cookie";
import { json } from "react-router-dom";

const Api = axios.create({
  //set endpoint API
  baseURL: "http://127.0.0.1:8000",

  //set header axios
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const setAuthToken = (token) => {
  if (token) {
    Api.defaults.headers.common["Authorization"] = `Bearer ${token}`; 
  } else {
    delete Api.defaults.headers.common["Authorization"];
  }
}

//handle unathenticated
Api.interceptors.response.use(
  function (response) {
    //return response
    return response;
  },
  (error) => {
    //check if response unauthenticated
    if (401 === error.response.status) {
      //remove token
      Cookies.remove("token");

      //remove user
      Cookies.remove("user");

      //remove permissions
      Cookies.remove("permissions");

      //redirect "/"
      window.location = "/login";
    } else if (403 === error.response.status) {
      //redirect "/forbidden"
      window.location = "/forbidden";
    } else {
      //reject promise error
      return Promise.reject(error);
    }
  }
);

export const login = async (email,password) => {
  const response = await Api.post("api/login", {email,password}).catch(
    (error) => {
      throw error;
    }
  );
  const { token } = response.data;
  setAuthToken(token);
  Cookies.set("token", token);
  Cookies.set("user", JSON.stringify(response.data.user));
  Cookies.set("permissions", JSON.stringify(response.data.permissions));
  return response.data;
}

export const fetchSubmissions = async () => {
  const response = await Api.get("/api/admin/submissions");
  return response.data.data.data;
}

export const postBooking = async (bookingData) => {
  try {
    // Lakukan permintaan POST ke endpoint '/api/public/bookings'
    const response = await Api.post("/api/public/bookings", bookingData);
    console.log("Booking created:", response.data);
    return response.data; // Jika berhasil, kembalikan data respons dari server
  } catch (error) {
    console.error("Error creating booking:", error.response.data);
    throw error; // Tangani kesalahan jika terjadi
  }
};  

  
export default Api;