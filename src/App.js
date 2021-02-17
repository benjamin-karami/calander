import React, { useState } from "react";
import { Main, Loader } from "./App.styles.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Calander, Events } from "./containers";
import { Navbar, Modal } from "./components";
import loader from "./assets/img/loading.png";

function App() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  return (
    <Router>
      {loading ? (
        <Loader className="loader-img" src={loader} />
      ) : (
        <Main>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Calander} />
            <Route exact path="/events" component={Events} />
          </Switch>
          <Modal />
        </Main>
      )}
    </Router>
  );
}

export default App;
