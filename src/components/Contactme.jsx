import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import socio1 from '../assets/images/project/whatsapp.png';
import socio2 from '../assets/images/project/instagram.png';
import socio3 from '../assets/images/project/linkedin.png';

function Contactme() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email to yourself
    emailjs.send(
      'service_bh7ch2d',  // Service ID
      'template_oep2cha', // Template ID for yourself
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message
      },
      'w1KOr1Kngam8kJrOE'  // User ID
    )
    .then((response) => {
      console.log('SUCCESS! Email to yourself sent:', response.status, response.text);

      // Send confirmation email to the sender
      return emailjs.send(
        'service_bh7ch2d',  // Service ID
        'template_eoq8iy2', // Template ID for the sender
        {
          to_name: formData.name,    // Sending the sender's name
          to_email: formData.email,  // Sending the email to the sender
          message: formData.message
        },
        'w1KOr1Kngam8kJrOE'  // User ID
      );
    })
    .then((response) => {
      console.log('SUCCESS! Confirmation email sent to sender:', response.status, response.text);
      alert('Message sent successfully! A confirmation email has been sent to you.');
    })
    .catch((err) => {
      console.error('FAILED...', err);
      alert('Failed to send message. Please try again later.');
    });

    // Clear the form after sending the email
    setFormData({ name: '', email: '', message: '' });
  };

  // Animation variants
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

  return (
    <>
      {/* CONTACT FORM */}
      <motion.section
        className="contact py-5"
        id="contact"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="container">
          <div className="row">
            {/* Map Section */}
            <motion.div
              className="col-lg-5 mr-lg-5 col-12"
              variants={fadeInLeft}
            >
              <div className="google-map w-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3850.2169688481767!2d73.99080457488522!3d15.201288185359367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfb2d2f3fe9fdf%3A0xd400480636a7acf6!2sCaritas%20Colony%2C%20Panzorconi%2C%20Cuncolim%2C%20Goa%20403715!5e0!3m2!1sen!2sin!4v1721988561959!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <motion.div
                className="contact-info d-flex justify-content-between align-items-center py-4 px-lg-5"
                variants={fadeInUp}
              >
                <div className="contact-info-item">
                  <h3 className="mb-3 text-white">Say hello</h3>
                  <p className="footer-text mb-0">87677-13856</p>
                  <p>
                    <a href="mailto:flazerdourado@gmail.com">
                      flazerdourado@gmail.com
                    </a>
                  </p>
                </div>
                <ul className="social-links">
                  {[socio1, socio2, socio3].map((icon, index) => (
                    <motion.li
                      key={index}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <a href="#" className="uil">
                        <img src={icon} className="sociolink" alt="social" />
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            {/* Form Section */}
            <motion.div
              className="col-lg-6 col-12"
              variants={fadeInRight}
            >
              <div className="contact-form">
                <h2 className="mb-4">
                  Interested to work together? Let's talk
                </h2>
                <form onSubmit={handleSubmit}>
                  <motion.div
                    className="row"
                    variants={staggerContainer}
                  >
                    <motion.div
                      className="col-lg-6 col-12"
                      variants={fadeInUp}
                    >
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Your Name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </motion.div>
                    <motion.div
                      className="col-lg-6 col-12"
                      variants={fadeInUp}
                    >
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </motion.div>
                    <motion.div
                      className="col-12"
                      variants={fadeInUp}
                    >
                      <textarea
                        name="message"
                        rows="6"
                        className="form-control"
                        id="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </motion.div>
                    <motion.div
                      className="ml-lg-auto col-lg-5 col-12"
                      variants={fadeInUp}
                    >
                      <input
                        type="submit"
                        className="form-control submit-btn"
                        value="Send Message"
                      />
                    </motion.div>
                  </motion.div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default Contactme;
