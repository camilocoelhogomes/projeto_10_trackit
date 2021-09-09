import Login from "./pages/login/components/Login";
import SignUp from "./pages/signUp/components/SignUp";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    < BrowserRouter >
      <Switch>

        <Route exact path='/'>
          <Login />
        </Route>

        <Route exact path='/cadastro'>
          <SignUp />
        </Route>

      </Switch>
    </BrowserRouter >
  );
}

export default App;
