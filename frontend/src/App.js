import Signup from "./components/Signup.js";
import Login from "./components/Login.js";
import Game from "./components/Game.js";
import { Route, NavLink } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>MUD Adventure</h1>
      <NavLink className="App-link" to="/signup">
        SignUp
      </NavLink>
      <NavLink className="App-link" to="/login">
        Login
      </NavLink>
      <Route exact path="/signup" component={Signup}></Route>
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/game" component={Game}></Route>
    </div>
  );
}

export default App;
