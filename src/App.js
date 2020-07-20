import React, { useState, useEffect } from "react";
import "./App.css";
import Carosel from "./components/Carosel";
import Cards from "./components/Cards";
import Search from "./components/Search";
import axios from "axios";

function App() {
  const [actors, setActors] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [name, setName] = useState("");

  useEffect(() => {
    const callApi = async () => {
      const result = await axios.get(
        `https://www.breakingbadapi.com/api/characters?name=${name}`
      );
      setActors(result.data);
      setLoading(false);
    };
    callApi();
  }, [name]);

  return (
    <section>
      <nav className="navbar navbar-expand-md bg-dark navbar-dark fixed-top">
        <a className="navbar-brand" href="/#">
          Breaking Bad Movie
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="collapsibleNavbar"
        >
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Link
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <Carosel />

      <section id="team" className="pb-5">
        <div className="container">
          <h5 className="section-title h1">OUR TEAM</h5>
          <div className="row">
            <Search name={(name) => setName(name)} />
            <Cards actors={actors} isLoading={isLoading} />
          </div>
        </div>
      </section>
    </section>
  );
}

export default App;
