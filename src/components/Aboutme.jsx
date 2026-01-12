import React, { useRef } from 'react';
import illsoft from '../assets/images/undraw/illsoft.svg';
import { useNotification } from './NotificationContext';
import axios from 'axios';
import '../Style/notification.css';
import flazerResume from '../assets/flazerResume.pdf';
import clickSound from '../assets/audio/sound1.mp3'; // Import your local sound file
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import {
  FaReact, FaJs, FaHtml5, FaCss3Alt, FaBootstrap, FaNodeJs,
  FaGitAlt, FaDatabase, FaNpm, FaPython, FaJava
} from "react-icons/fa";
import {
  SiMongodb, SiMysql, SiNetlify,
  SiPostman, SiExpress, SiFramer, SiTailwindcss,
  SiOpenai, SiChatbot, SiGooglegemini
} from "react-icons/si";
import { MdApi, MdSmartToy } from "react-icons/md";
import { TiWeatherCloudy } from "react-icons/ti";
import { BiCodeAlt, BiBrain } from "react-icons/bi";
import { RiRobot2Fill } from "react-icons/ri";

import "../Style/ProjectCrazy.css";



// URL of a random online audio file
const clickSoundUrl = 'https://www.soundjay.com/button/beep-07.wav'; // Example of an online audio clip

const Aboutme = () => {
  const { addNotification } = useNotification();
  const audioRef = useRef(null);

  // Animation variants for on-load effects
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
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

  const techStackWithIcons = {
    frontend: [
      { name: "React", icon: <FaReact /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "Bootstrap", icon: <FaBootstrap /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Framer Motion", icon: <SiFramer /> },
    ],
    backend: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
    ],
    languages: [
      { name: "JavaScript", icon: <FaJs /> },
      { name: "Python", icon: <FaPython /> },
      { name: "Java", icon: <FaJava /> },
    ],
    tools: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "VS Code", icon: <FaGitAlt /> },
      { name: "Netlify", icon: <SiNetlify /> },
      { name: "Postman", icon: <SiPostman /> },
    ],
    ai_tools: [
      { name: "ChatGPT", icon: <SiOpenai /> },
      { name: "GitHub Copilot", icon: <RiRobot2Fill /> },
      { name: "Claude AI", icon: <BiBrain /> },
      { name: "Gemini AI", icon: <SiGooglegemini /> },
      { name: "AI Assistants", icon: <MdSmartToy /> },
    ],
    apis: [
      { name: "REST APIs", icon: <MdApi /> },
      { name: "Weather API", icon: <TiWeatherCloudy /> },
      { name: "Web Speech API", icon: <BiCodeAlt /> },
      { name: "Geolocation API", icon: <FaDatabase /> },
    ]
  };

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
      {/* ABOUT SECTION */}
      <motion.section
        className="about full-screen d-lg-flex justify-content-center align-items-center"
        id="about"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="container">
          <div className="row">
            <motion.div
              className="col-lg-7 col-md-12 col-12 d-flex align-items-center"
              variants={fadeInLeft}
            >
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
                  Building a successful product is a challenge. I am highly energetic in user experience design, interfaces, and web development.
                </p>
                <div className="custom-btn-group mt-4 d-flex flex-wrap gap-3">
                  <a href={flazerResume} download className="crazy-btn large">
                    <i className="uil uil-file-alt"></i> Download Resume
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="col-lg-5 col-md-12 col-12"
              variants={fadeInRight}
            >
              <div className="about-image svg">
                <img src={illsoft} className="img-fluid" alt="svg image" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* TECH STACK SECTION */}
      <motion.section
        className="tech-stack-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container mb-5">
          <motion.div className="row" variants={fadeInUp}>
            <div className="col-lg-11 text-center mx-auto col-12">
              <div className="col-lg-8 mx-auto">
                <h2>My Tech Stack</h2>
              </div>
              <div className="tech-categories mt-4">
                {Object.entries(techStackWithIcons).map(([category, technologies]) => (
                  <motion.div
                    key={category}
                    className="tech-category mb-4"
                    variants={fadeInUp}
                  >
                    <h4 className="category-title">{category.toUpperCase()}</h4>
                    <div className="tech-grid">
                      {technologies.map((tech, idx) => (
                        <motion.div
                          key={idx}
                          className="tech-item"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                          variants={fadeInUp}
                        >
                          <div className="tech-icon">{tech.icon}</div>
                          <span className="tech-name">{tech.name}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Hidden audio element to play local sound */}
      <audio ref={audioRef} src={clickSound} preload="auto" />
    </>
  );
};

export default Aboutme;