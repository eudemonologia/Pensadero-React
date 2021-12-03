import Axios from "axios";
import { useEffect, useState } from "react";
import GlobalStyle from "./GlobalStyle";
import { Menu } from "./components/layout/Menu";
import { Wall } from "./components/layout/pages/Wall";
import { Thinks } from "./components/layout/Thinks";
import { About } from "./components/layout/pages/About";
import { Secrets } from "./components/layout/pages/Secrets";
import { Portfolio } from "./components/layout/pages/Portfolio";
import { Admin } from "./components/layout/pages/Admin";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { MainPage } from "./components/containers/MainPage";
Axios.defaults.withCredentials = true;

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const checkSession = JSON.parse(localStorage.getItem("user_web_up_token"));
    if (checkSession) {
      if (Date.parse(checkSession.expiresAt) > Date.now()) {
        setIsLoggedIn(true);
        setUser(checkSession);
      } else {
        localStorage.removeItem("user_web_up_token");
        setUser({});
        alert("Tu sesión ha expirado");
      }
    }
  }, []);

  return (
    <>
      <Router>
        <Menu
          setIsLoggedIn={setIsLoggedIn}
          isLoggedIn={isLoggedIn}
          setUser={setUser}
        />
        <Switch>
          <Route exact path="/">
            <MainPage titulo="Inicio">
              <Wall isLoggedIn={isLoggedIn} user={user} />
            </MainPage>
          </Route>
          <Route exact path="/porfolio">
            <MainPage titulo="Portfolio">
              <Portfolio isLoggedIn={isLoggedIn} user={user} />
            </MainPage>
          </Route>
          <Route exact path="/secretos">
            <MainPage titulo="Secretos">
              <Secrets isLoggedIn={isLoggedIn} user={user} />
            </MainPage>
          </Route>
          <Route exact path="/sobre-mi">
            <MainPage titulo="Sobre mi">
              <About isLoggedIn={isLoggedIn} user={user} />
            </MainPage>
          </Route>
          <Route exact path="/admin">
            <MainPage titulo="Administración">
              <Admin
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                user={user}
                setUser={setUser}
              />
            </MainPage>
          </Route>
          <Redirect from="*" to="/"></Redirect>
        </Switch>
        <Thinks isLoggedIn={isLoggedIn} user={user} />
      </Router>
      <GlobalStyle />
    </>
  );
}

export default App;
