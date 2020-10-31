import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import Skeleton from "react-loading-skeleton"

const MoreDetails = (props) => {
  const [character, setCharacter] = useState({})
  const id = props.match.params.id
  const {
    img,
    name,
    occupation,
    birthday,
    status,
    nickname,
    portrayed,
    appearance,
  } = character

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios(
        `https://www.breakingbadapi.com/api/characters/${id}`
      )
      setCharacter(data.data[0])
    }
    fetchData()
  }, [id])

  return Object.keys(character).length === 0 ? (
    <div className="container">
      <div className="row">
        <div className="col-6 offset-4  col-sm-6 offset-sm-5 mt-5">
          <Skeleton circle={true} height={150} width={150} />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-6 offset-sm-3 mt-5">
          <Skeleton height={100} />
        </div>
      </div>
      <div className="row">
        <div className="col-12 mt-5">
          <Skeleton height={50} count={5} />
        </div>
      </div>
    </div>
  ) : (
    <div className="container">
      <section className="py-2 my-2">
        <div className="row">
          <div className="col-12 mx-auto pb-3">
            <span
              onClick={() => props.history.goBack()}
              className="back-btn py-1 px-3"
            >
              <i className="fa fa-arrow-left" aria-hidden="true"></i> Back{" "}
            </span>
          </div>
          <div className="col-12 mx-auto">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb breadcrumb-arrow p-0">
                <li className="breadcrumb-item">
                  <Link to="/" className="pl-3">
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item pl-0">
                  <Link to="#">Character</Link>
                </li>
                <li
                  aria-current="page"
                  className="breadcrumb-item pl-0 active pl-4"
                >
                  {name}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      <section className="cv-block py-2 my-2">
        <div className="row">
          <div className="col-12 col-sm-4 offset-sm-4">
            <img
              className="img-fluid img-thumbnail"
              src={img}
              alt="character"
            />
          </div>
          <div
            className="hobbies group col-12 col-sm-6 offset-sm-3"
            id="hobbies"
          >
            <h2 className="text-center mt-4">{name}</h2>
            <p className="text-center text-muted">
              Apart from acting, {name} ocupation(s) include:{" "}
              {occupation.join()}
            </p>
          </div>
        </div>
      </section>
      <section className="cv-block info">
        <div className="row">
          <div
            className="education group col-12 col-sm-8 offset-sm-2"
            id="education"
          >
            <div className="item">
              <div className="row">
                <div className="col-md-6">
                  <h4>Other Details</h4>
                  <h4 className="organization">{status}</h4>
                </div>
                <div className="col-md-6">
                  <time className="period">
                    <span className="font-weight-bold">DOB: </span>
                    {birthday}
                  </time>
                </div>
              </div>
              <p className="text-muted">
                <span className="font-weight-bold"> Nickname:</span> {nickname}
              </p>
              <hr />
              <p className="text-muted">
                <span className="font-weight-bold">Portrayed:</span> {portrayed}
              </p>
              <hr />
              <p className="text-muted">
                <span className="font-weight-bold">Appearance:</span> {name}{" "}
                appeared in season: {appearance.join()}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MoreDetails
