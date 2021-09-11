import Login from "./pages/login/components/Login";
import SignUp from "./pages/signUp/components/SignUp";
import React, { useState } from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import UserContext from "./contexts/UserContext";
import Habits from "./pages/habits/Habits";



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
    setUserLogin(newUser)
  }

  const [user, setUser] = useState(null);

  return (

    <UserContext.Provider value={{ user, setUser }}>
      < BrowserRouter >
        <Switch>

          <Route exact path='/'>
            <Login handleUserLoginChange={handleUserLoginChange} userLogin={userLogin} />
          </Route>

          <Route exact path='/cadastro'>
            <SignUp handleUserLoginChange={handleUserLoginChange} userLogin={userLogin} />
          </Route>

          <Route exact path='/habitos'>
            <Habits />
          </Route>

        </Switch>
      </BrowserRouter >
    </UserContext.Provider>


  );
}

export default App;
