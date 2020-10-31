import React from "react"
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="mt-3 ">
            <div className="col-md-10 col-md-offset-1 pull-right">
              <img
                className="img-error"
                alt="Not Found"
                src="https://bootdey.com/img/Content/fdfadfadsfadoh.png"
              />
              <h2 className="mt-2">404 Not Found</h2>
              <p>Sorry, an error has occured, Requested page not found!</p>
              <div className="error-actions">
                <Link
                  to="/"
                  className="aboutus-more btn-outline-success"
                  style={{ outline: "none" }}
                >
                  <i className="fa fa-arrow-left" aria-hidden="true"></i> Back
                  Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
