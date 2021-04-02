import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth.js";

export default function Signup() {
  const [signup, setSignup] = useState({
    username: "",
    password1: "",
    password2: "",
  });

  const onChange = (e) => {
    e.persist();
    setSignup({
      ...signup,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    console.log("signup object submitted", signup);
    e.preventDefault();
    axiosWithAuth()
      .post("/registration/", signup)
      .then((res) => {
        console.log("res from signup", res.data.key);
        window.localStorage.clear();
        window.localStorage.setItem("token", res.data.key);
        setSignup({
          username: "",
          password1: "",
          password2: "",
        });
      })
      .catch((err) => {
        console.log("error with signup", err);
      });
  };

  return (
    <div>
      <h2>SignUp</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input name="username" id="username" type="text" onChange={onChange} />
        <label htmlFor="password1">Password</label>
        <input
          name="password1"
          id="password1"
          type="text"
          onChange={onChange}
        />
        <label htmlFor="password2">Retype Password</label>
        <input
          name="password2"
          id="password2"
          type="text"
          onChange={onChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

// USERS VIA POSTMAN
// {
//     "username": "test1",
//     "password1": "test12345",
//     "password2": "test12345"
// }
// {
//     "key": "f00ee0c69ba12f0b59c5d7954d65980e2a3ffc9a"
// }

// USERS VIA UI
// {username: "test2", password1: "test23456", password2: "test23456"}
// key: 1e753472d152c5bd9eff7c33fd64cf1819dd9efc
