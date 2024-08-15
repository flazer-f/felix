import React from 'react'
import illsoft from'../assets/images/undraw/illsoft.svg'
import { useNotification } from './NotificationContext';
import axios from 'axios';
import '../Style/notification.css';
import flazerResume from '../assets/flazerResume.pdf';


function Aboutme() {
  const { addNotification } = useNotification();

  const fetchQuote = async () => {
    try {
        const response = await axios.get('https://api.quotable.io/random');
        const quoteData = response.data;
        return {
            message: quoteData.content, // Updated to access 'content' for the quote text
            author: quoteData.author,   // Updated to access 'author' for the author name
            image: 'path_to_your_image' // Replace with actual image path if available
        };
    } catch (error) {
        console.error('Error fetching quote:', error);
        return {
            message: 'Stay positive and keep pushing forward!',
            author: 'Unknown',
        };
    }
};

  
    const handleButtonClick = async () => {
      const { message, author, image } = await fetchQuote();
      addNotification(message, author, image);
    };
  return (
    <>
    {/* <!-- ABOUT --> */}
    <section className="about full-screen d-lg-flex justify-content-center align-items-center" id="about">
        <div className="container">
            <div className="row">
                
                <div className="col-lg-7 col-md-12 col-12 d-flex align-items-center">
                    <div className="about-text">
                        <small className="small-text">Welcome to <span className="mobile-block">my portfolio website!</span></small>
                        <h1 className="animated animated-text">
                            <span className="mr-2">Hey folks, I'm </span>
                                <div className="animated-info">
                                    <span className="animated-item">Flazer Dourado</span>
                                    <span className="animated-item">Web Developer </span>
                                    <span className="animated-item">Java Developer</span>
                                </div>
                        </h1>

                        <p>Building a successful product is a challenge. I am highly energetic in user experience design, interfaces and web development.</p>
                        
                        <div className="custom-btn-group mt-4">
                        <a href={flazerResume} download className="btn mr-lg-2 custom-btn">
  <i className="uil uil-file-alt"></i> Download Resume
</a>
                          <a onClick={handleButtonClick} className="btn custom-btn custom-btn-bg custom-btn-link">Stay Motivated</a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-5 col-md-12 col-12">
                    <div className="about-image svg">
                        <img src={illsoft} className="img-fluid" alt="svg image"/>
                    </div>
                </div>

            </div>
        </div>
    </section>
    </>
  )
}

export default Aboutme