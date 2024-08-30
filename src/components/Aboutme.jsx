import React, { useRef } from 'react';
import illsoft from '../assets/images/undraw/illsoft.svg';
import { useNotification } from './NotificationContext';
import axios from 'axios';
import '../Style/notification.css';
import flazerResume from '../assets/flazerResume.pdf';
import clickSound from '../assets/audio/sound1.mp3'; // Import your local sound file



// URL of a random online audio file
const clickSoundUrl = 'https://www.soundjay.com/button/beep-07.wav'; // Example of an online audio clip
function Aboutme() {
    const { addNotification } = useNotification();
    const audioRef = useRef(null); // Reference for the audio element
  
    // Local fallback quotes array
    const localQuotes = [
      { message: 'The only limit to our realization of tomorrow is our doubts of today.', author: 'Franklin D. Roosevelt' },
      { message: 'Success is not final, failure is not fatal: It is the courage to continue that counts.', author: 'Winston Churchill' },
      { message: 'Believe you can and you’re halfway there.', author: 'Theodore Roosevelt' },
      { message: 'Act as if what you do makes a difference. It does.', author: 'William James' },
      { message: 'Never bend your head. Always hold it high. Look the world straight in the eye.', author: 'Helen Keller' },
      { message: 'You miss 100% of the shots you don’t take.', author: 'Wayne Gretzky' },
      { message: 'Success usually comes to those who are too busy to be looking for it.', author: 'Henry David Thoreau' },
      { message: 'Don’t watch the clock; do what it does. Keep going.', author: 'Sam Levenson' },
      { message: 'The future belongs to those who believe in the beauty of their dreams.', author: 'Eleanor Roosevelt' },
      { message: 'It’s not whether you get knocked down, it’s whether you get up.', author: 'Vince Lombardi' }
    ];
  
    // Function to fetch the quote with a 3-second timer
    const fetchQuoteWithTimeout = async () => {
      try {
        const response = await Promise.race([
          axios.get('https://api.quotable.io/random'),
          new Promise((_, reject) =>
            setTimeout(() => reject(new Error('Request timed out')), 3000) // 3 seconds timeout
          )
        ]);
  
        const quoteData = response.data;
        return {
          message: quoteData.content,
          author: quoteData.author,
          image: 'path_to_your_image' // Replace with actual image path if available
        };
      } catch (error) {
        console.error('Error fetching quote, using local quote:', error);
        // Fallback to local quotes with random selection
        const randomQuote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
        return {
          message: randomQuote.message,
          author: randomQuote.author
        };
      }
    };
  
    // Button click handler with sound
    const handleButtonClick = async () => {
      // Play the local click sound
      if (audioRef.current) {
        try {
          audioRef.current.play();
        } catch (error) {
          console.error('Error playing audio:', error);
        }
      }
  
      const { message, author, image } = await fetchQuoteWithTimeout();
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
                  <small className="small-text">
                    Welcome to <span className="mobile-block">my portfolio website!</span>
                  </small>
                  <h1 className="animated animated-text">
                    <span className="mr-2">Hey folks, I'm </span>
                    <div className="animated-info">
                      <span className="animated-item">Flazer Dourado</span>
                      <span className="animated-item">Web Developer</span>
                      <span className="animated-item">Java Developer</span>
                    </div>
                  </h1>
  
                  <p>
                    Building a successful product is a challenge. I am highly energetic in user experience design, interfaces and web development.
                  </p>
  
                  <div className="custom-btn-group mt-4">
                    <a href={flazerResume} download className="btn mr-lg-2 custom-btn">
                      <i className="uil uil-file-alt"></i> Download Resume
                    </a>
                    <button onClick={handleButtonClick} className="btn custom-btn custom-btn-bg custom-btn-link">
                      Stay Motivated
                    </button>
                  </div>
                </div>
              </div>
  
              <div className="col-lg-5 col-md-12 col-12">
                <div className="about-image svg">
                  <img src={illsoft} className="img-fluid" alt="svg image" />
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Hidden audio element to play local sound */}
        <audio ref={audioRef} src={clickSound} preload="auto" />
      </>
    );
  }
  
  export default Aboutme;