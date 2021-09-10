import Login from "./pages/login/components/Login";
import SignUp from "./pages/signUp/components/SignUp";
import React, { useState } from "react";

import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";



function App() {

  const [userLogin, setUserLogin] = useState({
    email: '',
    name: '',
    password: '',
    image: '',
  });

  const handleUserLoginChange = (input, value) => {
    const newUser = { ...userLogin };
    newUser[input] = value;
    setUserLogin(newUser);
  }

  return (
    < BrowserRouter >
      <Switch>

        <Route exact path='/'>
          <Login handleUserLoginChange={handleUserLoginChange} userLogin={userLogin} />
        </Route>

        <Route exact path='/cadastro'>
          <SignUp handleUserLoginChange={handleUserLoginChange} userLogin={userLogin} />
        </Route>

      </Switch>
    </BrowserRouter >
  );
}

export default App;
