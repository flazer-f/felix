import React from 'react';
import { motion } from 'framer-motion';
import proj1 from '../assets/images/project/proj1.jpg';
import proj2 from '../assets/images/project/proj2.jpg';
import proj3 from '../assets/images/project/proj3.jpg';
import proj4 from '../assets/images/project/proj4.jpg';

function Qual() {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <>
      {/* FEATURES */}
      <motion.section
        className="resume py-5 d-lg-flex justify-content-center align-items-center"
        id="resume"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="container">
          <div className="row">
            {/* Experiences Section */}
            <motion.div className="col-lg-6 col-12" variants={fadeInUp}>
              <h2 className="mb-4">Experiences</h2>
              <div className="timeline">
                <motion.div className="timeline-wrapper" variants={fadeInUp}>
                  <div className="timeline-yr">
                    <span>AUG 2023</span>
                  </div>
                  <div className="timeline-info">
                    <h3>
                      <span>Trainee Software Engineer</span>
                      <small>Goa Electronics Limited (GEL)</small>
                    </h3>
                    <p>
                      Here I'm working on JAVA Backend, also learned React.js, Python Flask, and MySQL. I have a lot of experience in React.js and Java and wish to move forward with it.
                    </p>
                  </div>
                </motion.div>
                <motion.div className="timeline-wrapper" variants={fadeInUp}>
                  <div className="timeline-yr">
                    <span>Feb 2023</span>
                  </div>
                  <div className="timeline-info">
                    <h3>
                      <span>Frontend Designing Internship</span>
                      <small>ZunderDog(FIIRE)</small>
                    </h3>
                    <p>
                      Mostly in my internship, I understood how the UI of the page is supposed to be and also learned about Digital Marketing.
                    </p>
                  </div>
                </motion.div>
                <motion.div className="timeline-wrapper" variants={fadeInUp}>
                  <div className="timeline-yr">
                    <span>AUG 2022</span>
                  </div>
                  <div className="timeline-info">
                    <h3>
                      <span>Freelancing</span>
                      <small>Graphic Designing</small>
                    </h3>
                    <p>
                      Freelancing as a Graphic Designer, created posters and pamphlets for some local businesses.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Education Section */}
            <motion.div className="col-lg-6 col-12" variants={fadeInUp}>
              <h2 className="mb-4 mobile-mt-2">Educations</h2>
              <div className="timeline">
                <motion.div className="timeline-wrapper" variants={fadeInUp}>
                  <div className="timeline-yr">
                    <span>2023</span>
                  </div>
                  <div className="timeline-info">
                    <h3>
                      <span>Bachelor Of Computer Application</span>
                      <br />
                      <small>VVM's Shree Damodar College Of Commerce And Economics</small>
                    </h3>
                  </div>
                </motion.div>
                <motion.div className="timeline-wrapper" variants={fadeInUp}>
                  <div className="timeline-yr">
                    <span>2019</span>
                  </div>
                  <div className="timeline-info">
                    <h3>
                      <span>XII STD HSSC</span>
                      <br />
                      <small>Mount Marys Higher Secondary</small>
                    </h3>
                  </div>
                </motion.div>
                <motion.div className="timeline-wrapper" variants={fadeInUp}>
                  <div className="timeline-yr">
                    <span>2017</span>
                  </div>
                  <div className="timeline-info">
                    <h3>
                      <span>X STD SSC</span>
                      <br />
                      <small>Assumpta Convent High School</small>
                    </h3>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Additional Certificates Section */}
            <motion.div className="col-12 mt-5" variants={fadeInUp}>
              <h4>Additional Certificates</h4>
              <div className="d-flex flex-wrap gap-4">
                {[proj1, proj2, proj3, proj4].map((proj, index) => (
                  <motion.div
                    key={index}
                    className="card"
                    style={{ width: '18rem' }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    variants={fadeInUp}
                  >
                    <a href="#" className="">
                      <img className="card-img-top" src={proj} alt={`Certificate ${index + 1}`} />
                      <div className="card-body">
                        <h5 className="card-title">
                          {['Digital Marketing', 'UI/UX', 'React.js', 'Java Development'][index]}
                        </h5>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default Qual;
