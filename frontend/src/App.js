import Signup from "./components/Signup.js";
import Login from "./components/Login.js";
import { Route, NavLink, useHistory } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>MUD Adventure</h1>
      <NavLink to="/signup">SignUp</NavLink>
      <NavLink to="/login">Login</NavLink>
      <Route exact path="/signup" component={Signup}></Route>
      <Route exact path="/login" component={Login}></Route>
    </div>
  );
}

export default App;
