import { Main } from "./App.styles.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Calander, Events } from "./containers";
import { Navbar, Modal } from "./components";

function App() {
 
  return (
    <Router>
      <Main>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Calander} />
          <Route exact path="/events" component={Events} />
        </Switch>
        <Modal/>
      </Main>
    </Router>
  );
}

export default App;
