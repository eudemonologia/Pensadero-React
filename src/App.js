
import GlobalStyle from "./styles/GlobalStyle"
import {Menu} from "./components/layout/Menu";
import {Wall} from "./components/layout/Wall";
import {Thinks} from "./components/layout/Thinks";
import {About} from "./components/layout/About";
import {Secrets} from "./components/layout/Secrets";
import {Portfolio} from "./components/layout/Portfolio";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function App() {
  return (
    <>
        <Router>
            <Menu/>
        <Switch>
            <Route exact path="/" component={Wall}/>
            <Route exact path="/inicio" component={Wall}/>
            <Route exact path="/porfolio" component={Portfolio}/>
            <Route exact path="/secretos" component={Secrets}/>
            <Route exact path="/sobre-mi" component={About}/>
        </Switch>
        </Router>
        <Thinks/>
      <GlobalStyle />
    </>
  );
}

export default App;
