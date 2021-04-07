import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth.js";
import DjangoCSRFToken from "django-react-csrftoken";

export default function Login(props) {
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const onChange = (e) => {
    e.persist();
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    console.log("login object submitted", login);
    e.preventDefault();
    axiosWithAuth()
      .post("/login/", login)
      .then((res) => {
        console.log("res from login", res.data.key);
        window.localStorage.clear();
        window.localStorage.setItem("token", res.data.key);
        setLogin({
          username: "",
          password: "",
        });
        props.history.push("/game");
      })
      .catch((err) => {
        console.log("error with login", err);
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <DjangoCSRFToken />
        <label htmlFor="username">Username</label>
        <input name="username" id="username" type="text" onChange={onChange} />
        <label htmlFor="password">Password</label>
        <input name="password" id="password" type="text" onChange={onChange} />
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
