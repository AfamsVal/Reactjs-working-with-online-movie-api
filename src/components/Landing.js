import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import Search from "./Search";
import Carosel from "./Carosel";
import axios from "axios";

const Landing = () => {
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
    <>
      <Carosel />
      <section id="team" className="pb-5 bg-secondary">
        <div className="container">
          <h5 className="section-title h1">OUR TEAM</h5>
          <div className="row">
            <Search name={(name) => setName(name)} />
            <Cards actors={actors} isLoading={isLoading} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
