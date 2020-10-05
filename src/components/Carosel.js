import React from "react";
import image1 from "../images/a.jpg";
import image2 from "../images/b.jpg";
import image3 from "../images/c.jpg";
const CaroselComponent = () => {
  return (
    <header>
      <div id="demo" className="carousel slide" data-ride="carousel">
        <ul className="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" className="active"></li>
          <li data-target="#demo" data-slide-to="1"></li>
          <li data-target="#demo" data-slide-to="2"></li>
        </ul>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="img-fluid" src={image1} alt="Los Angeles" />
          </div>
          <div className="carousel-item">
            <img className="img-fluid" src={image2} alt="Chicago" />
          </div>
          <div className="carousel-item">
            <img className="img-fluid" src={image3} alt="New York" />
          </div>
        </div>

        <a className="carousel-control-prev" href="#demo" data-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </a>
        <a className="carousel-control-next" href="#demo" data-slide="next">
          <span className="carousel-control-next-icon"></span>
        </a>
      </div>
    </header>
  );
};

export default CaroselComponent;
