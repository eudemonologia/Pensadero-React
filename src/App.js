import Axios from "axios";
import { useEffect, useState } from "react";
import GlobalStyle from "./styles/GlobalStyle";
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
  const [userId, setUserId] = useState(0);

  useEffect(() => {
    console.log(userId);
    if (userId > 0) {
      Axios.get(
        process.env.REACT_APP_API_URL +
          "/api/usuarios/id/" +
          userId +
          "/isconnected",
        {
          headers: {
            "Cache-Control": "no-cache",
            Pragma: "no-cache",
            Expires: "0",
          },
        }
      ).then((res) => {
        if (res.data === true) {
          setIsLoggedIn(res.data);
        } else {
          console.log(res.data);
          setUserId(0);
          setIsLoggedIn(false);
        }
      });
    } else {
      setIsLoggedIn(false);
    }
  }, [userId]);

  return (
    <>
      <Router>
        <Menu isLoggedIn={isLoggedIn} setUserId={setUserId} />
        <Switch>
          <Route exact path="/">
            <MainPage titulo="Inicio">
              <Wall isLoggedIn={isLoggedIn} />
            </MainPage>
          </Route>
          <Route exact path="/porfolio">
            <MainPage titulo="Portfolio">
              <Portfolio isLoggedIn={isLoggedIn} />
            </MainPage>
          </Route>
          <Route exact path="/secretos">
            <MainPage titulo="Secretos">
              <Secrets isLoggedIn={isLoggedIn} />
            </MainPage>
          </Route>
          <Route exact path="/sobre-mi">
            <MainPage titulo="Sobre mi">
              <About isLoggedIn={isLoggedIn} />
            </MainPage>
          </Route>
          <Route exact path="/admin">
            <MainPage titulo="Administración">
              <Admin
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                userId={userId}
                setUserId={setUserId}
              />
            </MainPage>
          </Route>
          <Redirect from="*" to="/"></Redirect>
        </Switch>
        <Thinks isLoggedIn={isLoggedIn} />
      </Router>
      <GlobalStyle />
    </>
  );
}

export default App;
