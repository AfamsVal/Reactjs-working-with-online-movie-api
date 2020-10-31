import React from "react"
import loader from "../images/loading.gif"
import { Link } from "react-router-dom"

const Cards = (props) => {
  if (props.actors.length === 0 && props.isLoading === false) {
    return (
      <div className="col-12 font-weight-bold text-danger text-center">
        No Result Found!
      </div>
    )
  }
  return !props.isLoading ? (
    props.actors.map((item) => (
      <div
        key={item.char_id}
        className="col-12  col-sm-6 col-md-4 col-lg-3 mb-3"
      >
        <div
          className="image-flip"
          onTouchStart={() => this.classNameList.toggle("hover")}
        >
          <div className="mainflip">
            <div className="frontside">
              <div className="card">
                <div className="card-body text-center">
                  <p>
                    <img
                      className=" img-fluid"
                      src={item.img}
                      alt="card album"
                    />
                  </p>
                  <h4 className="card-title">{item.name}</h4>
                  <p className="card-text">{item.occupation.join()}</p>
                  <a href="/#" className="btn btn-primary btn-sm">
                    <i className="fa fa-plus"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="backside">
              <div className="card">
                <div className="card-body text-center mt-4">
                  <h4 className="card-title">{item.name}</h4>
                  <h6>({item.nickname})</h6>
                  <hr />
                  <p className="card-text">
                    <strong>Status:</strong>: {item.status}
                  </p>
                  <p className="card-text">
                    <strong>DOB:</strong>: {item.birthday}
                  </p>
                  <p className="card-text">
                    <Link
                      to={`character/${item.char_id}`}
                      className="btn btn-outline-secondary"
                    >
                      More Detail
                    </Link>
                  </p>
                  {/* <ul className="list-inline">
                    <li className="list-inline-item">
                      <a
                        className="social-icon text-xs-center"
                        target="_blank"
                        href="/#"
                      >
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        className="social-icon text-xs-center"
                        target="_blank"
                        href="/#"
                      >
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        className="social-icon text-xs-center"
                        target="_blank"
                        href="/#"
                      >
                        <i className="fa fa-skype"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        className="social-icon text-xs-center"
                        target="_blank"
                        href="/#"
                      >
                        <i className="fa fa-google"></i>
                      </a>
                    </li>
                  </ul> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))
  ) : (
    <div className="col-12 text-center">
      <img className="image-fluid" src={loader} alt="No loader" />
    </div>
  )
}

export default Cards
