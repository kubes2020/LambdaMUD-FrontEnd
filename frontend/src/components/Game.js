import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth.js";

export default function Game() {
  const handleClick = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .get("/adv/init/")
      .then((res) => {
        console.log("res from Game initialize", res.data);
      })
      .catch((err) => {
        console.log("error in Game initialize", err);
      });
  };

  return (
    <div>
      <h1>Game Page</h1>
      <button onClick={handleClick}>Play Game</button>
    </div>
  );
}
