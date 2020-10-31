import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import "./App.css"
import NavbarMenu from "./components/NavbarMenu"
import Landing from "./components/Landing"
import About from "./components/About"
import ContactUs from "./components/ContactUs"
import NotFound from "./components/NotFound"
import MoreDetails from "./components/MoreDetails"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Router>
        <NavbarMenu />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact-us" component={ContactUs} />
          <Route exact path="/character/:id" component={MoreDetails} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </Router>
      <Footer />
    </>
  )
}

export default App
