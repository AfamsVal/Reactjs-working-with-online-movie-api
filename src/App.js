import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <section>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact-us" component={ContactUs} />
        </Switch>
      </Router>
    </section>
  );
}

export default App;
