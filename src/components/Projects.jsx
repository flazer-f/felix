import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import project1 from "../assets/images/project/project1.png";
import project2 from "../assets/images/project/project2.png";
import project3 from "../assets/images/project/project3.png";
import project4 from "../assets/images/project/project4.png";
import project5 from "../assets/images/project/project5.png";
import project001 from "../assets/images/project/project001.png";
import project002 from "../assets/images/project/project002.png";

import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import "../Style/ProjectCrazy.css";

function Projects() {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  // Example project data (add URLs if you want them clickable)
  const projectspersonal = [
    { img: project1, title: "Code Editor", url: "https://web1code1editor1.netlify.app" },
    { img: project2, title: "Text To Speech", url: "https://text2speech1.netlify.app" },
    { img: project3, title: "QR Code Genrator", url: "https://qrcode121.netlify.app" },
    { img: project4, title: "Carousel Gallery", url: "https://gallery121.netlify.app" },
    { img: project5, title: "Weather Forcast", url: "https://1weather1.netlify.app" }
  ];
  
  const projectscom = [
    { img: project001, title: "Goa Services", url: "https://services.goaonline.gov.in/" },
    { img: project002, title: "One Map Goa", url: "https://onemapgoa.in/" },
  ];


  return (
    <>
      {/* PROJECTS */}
      <section className="project py-5" id="project">
        <div className="container">
          <motion.div
            className="row"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="col-lg-11 text-center mx-auto col-12">
              <div className="col-lg-8 mx-auto">
                <h2>My Personal Projects </h2>
              </div>

              {/* Projects Grid */}
              <div className="crazy-projects-grid mt-4">
                {projectspersonal.map((projectspersonal, idx) => (
                  <Tilt
                    key={idx}
                    glareEnable={true}
                    glareMaxOpacity={0.45}
                    scale={1.05}
                    className="crazy-tilt"
                  >
                    <motion.div
                      className="card crazy-card"
                      style={{ width: "18rem" }}
                      whileHover={{ scale: 1.07, rotate: 1 }}
                    >
                      <a href={projectspersonal.url} target="_blank" rel="noopener noreferrer">
                        <img
                          className="card-img-top"
                          src={projectspersonal.img}
                          alt={projectspersonal.title}
                        />
                        <div className="card-body">
                          <h5 className="card-title">{projectspersonal.title}</h5>
                        </div>
                      </a>
                    </motion.div>
                  </Tilt>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        <br />
{/* company projects   */}
         <div className="container">
          <motion.div
            className="row"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="col-lg-11 text-center mx-auto col-12">
              <div className="col-lg-8 mx-auto">
                <h2>My Contributed Project Of Company </h2>
              </div>

              {/* Projects Grid */}
              <div className="crazy-projects-grid mt-4">
                {projectscom.map((projectscom, idx) => (
                  <Tilt
                    key={idx}
                    glareEnable={true}
                    glareMaxOpacity={0.45}
                    scale={1.05}
                    className="crazy-tilt"
                  >
                    <motion.div
                      className="card crazy-card"
                      style={{ width: "18rem" }}
                      whileHover={{ scale: 1.07, rotate: 1 }}
                    >
                      <a href={projectscom.url} target="_blank" rel="noopener noreferrer">
                        <img
                          className="card-img-top"
                          src={projectscom.img}
                          alt={projectscom.title}
                        />
                        <div className="card-body">
                          <h5 className="card-title">{projectscom.title}</h5>
                        </div>
                      </a>
                    </motion.div>
                  </Tilt>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Projects;