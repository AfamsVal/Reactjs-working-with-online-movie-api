import React from "react";

const ContactUs = () => {
  return (
    <section className="mb-4">
      <div className="container">
        <h2 className="aboutus-title mb-3">Contact us</h2>

        <h5 className="text-secondary w-responsive mx-auto mb-5">
          Do you have any questions? Please do not hesitate to contact us
          directly. Our team will come back to you within a matter of hours to
          help you.
        </h5>

        <div className="row">
          <div className="col-md-8 mb-md-0 mb-5">
            <form
              id="contact-form"
              name="contact-form"
              action="mail.php"
              method="POST"
            >
              <div className="row  mt-3">
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                    />
                    <label htmlFor="name" className="">
                      Your name
                    </label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      className="form-control"
                    />
                    <label htmlFor="email" className="">
                      Your email
                    </label>
                  </div>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-control"
                    />
                    <label htmlFor="subject" className="">
                      Subject
                    </label>
                  </div>
                </div>
              </div>

              <div className="row  mt-3">
                <div className="col-md-12">
                  <div className="md-form">
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      rows="2"
                      className="form-control md-textarea"
                    ></textarea>
                    <label htmlFor="message">Your message</label>
                  </div>
                </div>
              </div>
            </form>

            <div className="text-center text-md-left mt-3">
              <button
                className="aboutus-more btn-outline-success"
                style={{ outline: "none" }}
              >
                Send Message
              </button>
            </div>
            <div className="status"></div>
          </div>

          <div className="col-md-3 offset-md-1 col-lg-3 offset-lg-1 text-center border">
            <ul className="list-unstyled mb-0 pt-2">
              <li className="mb-4">
                <i className="fa fa-map-marker-alt fa-2x"></i>
                <h5 className="text-success">Ikeja - Lagos Nigeria</h5>
              </li>

              <li>
                <i className="fa fa-phone fa-2x text-success"></i>
                <p>+234 803 7514 469</p>
              </li>

              <li>
                <i className="fa fa-envelope fa-2x text-success"></i>
                <p>progfams@gmail.com</p>
              </li>

              <li>
                <i className="fa fa-youtube fa-2x text-danger"></i>
                <p>
                  <a
                    className="text-decoration-none text-dark"
                    href="https://www.youtube.com/channel/UCxqZ_SKt7Umuc3K8uXIrtTA"
                  >
                    My YouTube Channel
                  </a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
