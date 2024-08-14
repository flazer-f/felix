import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import project1 from "../assets/images/project/project1.png";
import project2 from "../assets/images/project/project2.png";
import project3 from "../assets/images/project/project3.png";
import project4 from "../assets/images/project/project4.png";
import project5 from "../assets/images/project/project5.png";
import project001 from "../assets/images/project/project001.png";
import project002 from "../assets/images/project/project002.png";

import "bootstrap/dist/css/bootstrap.min.css";

function Projects() {
  return (
    <>
      {/* PROJECTS */}
      <section className="project py-5" id="project">
        <div className="container">
          <div className="row">
            <div className="col-lg-11 text-center mx-auto col-12">
              <div className="col-lg-8 mx-auto">
                <h2>My Personal Projects </h2>
                <p style={{ color: "red" }}>
                  these projects are not responsive so ,please open them on
                  desktop.
                </p>
                <p style={{ color: "red" }}>
                  click on the image's browser URL to redirect to the respective
                  projects{" "}
                </p>
              </div>

              <Carousel showArrows={true} autoPlay={true} infiniteLoop={true}>
                <div>
                  <p>
                    <b>
                      this project is code editor to edit and test HTML,CSS and
                      JS
                    </b>
                  </p>
                  <a href="https://web1code1editor1.netlify.app">
                    <img
                      src={project1}
                      className="img-fluid"
                      alt="project image"
                    />
                  </a>
                </div>
                <div>
                  <p>
                    <b>this project convert text to speech</b>
                  </p>
                  <a href="https://text2speech1.netlify.app">
                    <img
                      src={project2}
                      className="img-fluid"
                      alt="project image"
                    />
                  </a>
                </div>
                <div>
                  <p>
                    <b>this project convert text to QR Code </b>
                  </p>
                  <a href="https://qrcode121.netlify.app">
                    <img
                      src={project3}
                      className="img-fluid"
                      alt="project image"
                    />
                  </a>
                </div>
                <div>
                  <p>
                    <b> this project is just a gallery of images </b>
                  </p>
                  <a href="https://gallery121.netlify.app">
                    <img
                      src={project4}
                      className="img-fluid"
                      alt="project image"
                    />
                  </a>
                </div>
                <div>
                  <p>
                    <b>
                      this project gives weather forecast of the searched place{" "}
                    </b>
                  </p>
                  <a href="https://1weather1.netlify.app">
                    <img
                      src={project5}
                      className="img-fluid"
                      alt="project image"
                    />
                  </a>
                </div>
              </Carousel>
              {/* other projects Ive contributed   */}
              <div>
                <h4> Project Contribution</h4>

                <br />
                {/* cards 1  */}
                <div className="cardsdiv">
                  <div className="card" style={{ width: "18rem" }}>
                    <a href="https://services.goaonline.gov.in/" className="">
                      <img
                        className="card-img-top"
                        src={project001}
                        alt="Card image cap"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Goa Services</h5>
                      </div>
                    </a>
                  </div>

                  {/* cards 2  */}
                  <div className="card" style={{ width: "18rem" }}>
                    <a href="https://onemapgoa.in/" className="">
                      <img
                        className="card-img-top"
                        src={project002}
                        alt="Card image cap"
                      />
                      <div className="card-body">
                        <h5 className="card-title">One Map Goa</h5>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <br />

              {/* tech stack */}
              <div>
                <h4> Projects tech stack</h4>

                <br />
                {/* cards 1  */}
                <div className="cardsdiv">
                  <div className="" style={{ width: "18rem" }}>
                    <img
                      className="card-img-top"
                      src="https://img.icons8.com/?size=100&id=90519&format=png&color=000000"
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <small>SpringBoot</small>
                    </div>
                  </div>

                  {/* cards 2  */}
                  <div className="" style={{ width: "18rem" }}>
                    <img
                      className="card-img-top"
                      src="https://img.icons8.com/?size=100&id=123603&format=png&color=000000"
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <small>React.js</small>
                    </div>
                  </div>
                  {/* cards 3  */}
                  <div className="" style={{ width: "18rem" }}>
                    <img
                      className="card-img-top"
                      src="https://img.icons8.com/?size=100&id=84710&format=png&color=000000"
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <small>Bootstrap CSS</small>
                    </div>
                  </div>
                  {/* cards 4  */}
                  <div className="" style={{ width: "18rem" }}>
                    <img
                      className="card-img-top"
                      src="https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000"
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <small>Tailwind CSS</small>
                    </div>
                  </div>
                  {/* cards 5  */}
                  <div className="" style={{ width: "18rem" }}>
                    <img
                      className="card-img-top"
                      src="https://img.icons8.com/?size=100&id=38561&format=png&color=000000"
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <small>Postgres SQL</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
