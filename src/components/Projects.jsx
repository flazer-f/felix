import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import project1 from "../assets/images/project/project1.png";
import project2 from "../assets/images/project/project2.png";
import project3 from "../assets/images/project/project3.png";
import project4 from "../assets/images/project/project4.png";
import project5 from "../assets/images/project/project5.png";
import project001 from "../assets/images/project/project001.png";
import project002 from "../assets/images/project/project002.png";
import project01 from  "../assets/images/project/project01.png";
import project02 from  "../assets/images/project/project02.png";
import project03 from  "../assets/images/project/project03.png";
import project04 from  "../assets/images/project/project04.png";


import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import "../Style/ProjectCrazy.css";

function Projects() {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  // Example project data (add URLs if you want them clickable)
  const projectspersonal = [
    { img: project1, title: "Code Editor", url: "https://web1code1editor1.netlify.app", tooltipissue:"this is a code editor for html css and javascript in realtime" },
    { img: project2, title: "Text To Speech", url: "https://text2speech1.netlify.app" , tooltipissue:"this project converts text to audio speech"},
    { img: project3, title: "QR Code Genrator", url: "https://qrcode121.netlify.app" , tooltipissue:"this project generates QR code for given text or url"},
    { img: project4, title: "Carousel Gallery", url: "https://gallery121.netlify.app" , tooltipissue:"this project is image gallery with carousel slider"},
    { img: project5, title: "Weather Forcast", url: "https://1weather1.netlify.app" , tooltipissue:"this project shows weather forcast of any city in the world" },
  ];
  
  const FreeLancing=[
    { img: project01, title: "Project A", url: "https://dourados.netlify.app/", tooltipissue:" this project is for a bar service , where they showcase thier drinks and services" },
    { img: project02, title: "Project B", url: "https://thewaxmeltcan.netlify.app/", tooltipissue:"this is a project for a wax melt can company where they sell candles and wax melts" },
    { img: project03, title: "Project C", url: "https://enchanting-entremet-81f2e0.netlify.app/", tooltipissue:"this project for event planner showcasing thier services and photo gallery " },
    { img: project04, title: "Project D", url: "https://festive-montalcini-1b1f4c.netlify.app/", tooltipissue:"this project is for microgreens services " },
  ]
  const projectscom = [
    { img: project001, title: "Goa Services", url: "https://services.goaonline.gov.in/", tooltipissue:"on this project is for government services in goa, i worked on the frontend and backend on some modules" },
    { img: project002, title: "One Map Goa", url: "https://onemapgoa.in/", tooltipissue:"this project is for one map goa i worked on most modules" },
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
                      data-tooltip-id="project-tooltip"
                      data-tooltip-content={projectspersonal.tooltipissue}
                      data-tooltip-place="top"
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
              <Tooltip id="project-tooltip" />
            </div>
          </motion.div>
        </div>
        <br />


      {/*Freelacing Demos PROJECTS */}
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
                <h2>My Free-Lancing Demo Projects </h2>
              </div>

              {/* Projects Grid */}
              <div className="crazy-projects-grid mt-4">
                {FreeLancing.map((projectspersonal, idx) => (
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
                      data-tooltip-id="freelance-tooltip"
                      data-tooltip-content={projectspersonal.tooltipissue}
                      data-tooltip-place="top"
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
              <Tooltip id="freelance-tooltip" />
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
                      data-tooltip-id="company-tooltip"
                      data-tooltip-content={projectscom.tooltipissue}
                      data-tooltip-place="top"
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
              <Tooltip id="company-tooltip" />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Projects;