import { Main } from "./App.styles.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Calander } from "./containers";
import { Navbar, Modal } from "./components";

function App() {
 
  return (
    <Router>
      <Main>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Calander} />
        </Switch>
        <Modal/>
      </Main>
    </Router>
  );
}

export default App;
