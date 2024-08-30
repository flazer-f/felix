import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import socio1 from '../assets/images/project/whatsapp.png'
import socio2 from '../assets/images/project/instagram.png'
import socio3 from '../assets/images/project/linkedin.png'


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

  return (
    <>
      {/* CONTACT FORM */}
      <section className="contact py-5" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 mr-lg-5 col-12">
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
              <div className="contact-info d-flex justify-content-between align-items-center py-4 px-lg-5">
                <div className="contact-info-item">
                  <h3 className="mb-3 text-white">Say hello</h3>
                  <p className="footer-text mb-0">87677-13856</p>
                  <p><a href="mailto:flazerdourado@gmail.com">flazerdourado@gmail.com</a></p>
                </div>
                <ul className="social-links">
                  <li><a href="https://wa.me/qr/3UZR6AVOTSLRB1" className="uil"><img src={socio1} className='sociolink' /></a></li>
                  <li><a href="https://www.instagram.com/im_flazer?igsh=MXJoYWIxb2dzeGhlZg==" className="uil uil-instagram"><img src={socio2} className='sociolink' /></a></li>
                  <li><a href="https://www.linkedin.com/in/flazer-dourado-aa096b27b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="uil"><img src={socio3} className='sociolink' /></a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="contact-form">
                <h2 className="mb-4">Interested to work together? Let's talk</h2>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-6 col-12">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Your Name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-12">
                      <textarea
                        name="message"
                        rows="6"
                        className="form-control"
                        id="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                    <div className="ml-lg-auto col-lg-5 col-12">
                      <input type="submit" className="form-control submit-btn" value="Send Message" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contactme;
