import React from 'react'
import proj1 from '../assets/images/project/proj1.jpg'
import proj2 from '../assets/images/project/proj2.jpg'
import proj3 from '../assets/images/project/proj3.jpg'
import proj4 from '../assets/images/project/proj4.jpg'


function Qual() {
  return (
    <>
    {/* <!-- FEATURES --> */}
    <section className="resume py-5 d-lg-flex justify-content-center align-items-center" id="resume">
        <div className="container">
            <div className="row">

                <div className="col-lg-6 col-12">
                  <h2 className="mb-4">Experiences</h2>

                    <div className="timeline">
                        <div className="timeline-wrapper">
                             <div className="timeline-yr">
                                  <span>AUG 2023</span>
                             </div>
                             <div className="timeline-info">
                                  <h3><span>Trainee Software Engineer</span><small>Goa Electronics Limited (GEL)</small></h3>
                                  <p>Here i'm  working on JAVA Backend also learned React.js n bit of Python Flask and MYSQL . i have lot of exp in React.js and java and wish to move forward with it </p>
                             </div>
                        </div>

                        <div className="timeline-wrapper">
                            <div className="timeline-yr">
                                <span>Feb 2023</span>

                            </div>
                            <div className="timeline-info">
                                <h3><span>Frontend Designing Internship</span><small>ZunderDog(FIIRE)</small></h3>
                                <p>Mostly in my Internship i have understood how UI of the page is suppose to be and also learnt about Digital Marketing.</p>
                            </div>
                        </div>

                        <div className="timeline-wrapper">
                            <div className="timeline-yr">
                            <span>AUG 2022</span>
                            </div>
                            <div className="timeline-info">
                            <h3><span>Freelancing</span><small>Graphic Designing</small></h3>
                            <p>Freelancing as Graphic Designer craeted posters and pamplets for some local businesses .</p>
                                </div>
                        </div>
                        
                        {/* <div className="timeline-wrapper">
                            <div className="timeline-yr">
                                <span>2014</span>
                            </div>
                            <div className="timeline-info">
                                <h3><span/>Junior Designer<small>Crafted Co.</small></h3>
                                <p>Cras scelerisque scelerisque condimentum. Nullam at volutpat mi. Nunc auctor ipsum eget magna consequat viverra.</p>
                            </div>
                        </div> */}

                    </div>
                </div>

                <div className="col-lg-6 col-12">
                  <h2 className="mb-4 mobile-mt-2">Educations</h2>

                    <div className="timeline">
                        <div className="timeline-wrapper">
                             <div className="timeline-yr">
                                  <span>2023</span>
                             </div>
                             <div className="timeline-info">
                                  <h3><span>Bachelor Of Computer Application</span>
                                  <br /><small>VVM's Shree Damodar College Of Commerce And Economics</small></h3>
                                  {/* <p>Please tell your friends about Tooplate website. That would be very helpful. We need your support.</p> */}
                             </div>
                        </div>

                        <div className="timeline-wrapper">
                            <div className="timeline-yr">
                                <span>2019</span>
                            </div>
                            <div className="timeline-info">
                                <h3><span>XII STD HSSC</span>
                                <br /><small>Mount Marys Higher Secondary</small></h3>
                                {/* <p><a rel="nofollow" href="https://www.facebook.com/tooplate">Tooplate</a> is a great website to download HTML templates without any login or email.</p> */}
                            </div>
                        </div>
                        
                        <div className="timeline-wrapper">
                            <div className="timeline-yr">
                                <span>2017</span>
                            </div>
                            <div className="timeline-info">
                                <h3><span>X STD SSC</span><br /><small>Assumpta Convent High School</small></h3>
                                {/* <p>Passed X STD form one of the best</p> */}
                            </div>
                        </div>

                    </div>
                </div>
                <br />
                <h4>Additional Certificates</h4>
                <div className="card" style={{ width: "18rem" }}>
                    <a href="" className="">
                      <img
                        className="card-img-top"
                        src={proj1}
                        alt="Card image cap"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Digital Marketing </h5>
                      </div>
                    </a>
                  </div>
                  <div className="card" style={{ width: "18rem" }}>
                    <a href="" className="">
                      <img
                        className="card-img-top"
                        src={proj2}
                        alt="Card image cap"
                      />
                      <div className="card-body">
                        <h5 className="card-title">UI/UX </h5>
                      </div>
                    </a>
                  </div>
                  <div className="card" style={{ width: "18rem" }}>
                    <a href="" className="">
                      <img
                        className="card-img-top"
                        src={proj3}
                        alt="Card image cap"
                      />
                      <div className="card-body">
                        <h5 className="card-title">React.js </h5>
                      </div>
                    </a>
                  </div>
                  <div className="card" style={{ width: "18rem" }}>
                    <a href="" className="">
                      <img
                        className="card-img-top"
                        src={proj4}
                        alt="Card image cap"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Java development </h5>
                      </div>
                    </a>
                  </div>
            
              

                
            </div>
        </div>
    </section>
    </>
  )
}

export default Qual
