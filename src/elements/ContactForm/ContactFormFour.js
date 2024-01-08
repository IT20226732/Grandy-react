import React, { useState } from 'react';
import { send } from 'emailjs-com';
import swal from 'sweetalert';

const ContactEight = ({ title }) => {
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: 'AWS',
    message: '',
    reply_to: '',
    subject: ''
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send('service_3ilx44r', 'template_wz7o3y3', toSend, 'R6YkgkyBdJgfJ6cwq')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        swal(
          'Thank you for getting in touch!',
          'We appreciate you contacting us/ [AWS-Trading PVT LTD]. One of our colleagues will get back in touch with you soon!Have a great day!',
          'success'
        );
      })
      .catch((err) => {
        console.log('FAILED...', err);
        alert('FAILED...');
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <section className="white-bg form-style-one">
      <div className="container">
        <div className="row">
          <div className="col-sm-8 section-heading pb-0">
            <h2 className="text-uppercase mt-0">{title}</h2>
          </div>
        </div>

        <div className="row mt-50">
          <div className="col-md-8 col-md-offset-2">
            <form name="contact-form" id="contact-form" method="POST" onSubmit={onSubmit}>
              <div className="messages"></div>
              <div className="row">
                <div className="col-md-6 col-sm-6">
                  <div className="form-group">
                    <label className="sr-only" htmlFor="name">
                      Name
                    </label>
                    <input
                      type="text"
                      name="from_name"
                      className="form-control"
                      id="from_name"
                      required
                      placeholder="Your Name"
                      data-error="Your Name is Required"
                      defaultValue={toSend.from_name}
                      onChange={handleChange}
                    />
                    <div className="help-block with-errors mt-20"></div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6">
                  <div className="form-group">
                    <label className="sr-only" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      name="reply_to"
                      className="form-control"
                      id="reply_to"
                      placeholder="Your Email"
                      required
                      data-error="Please Enter Valid Email"
                      defaultValue={toSend.reply_to}
                      onChange={handleChange}
                    />
                    <div className="help-block with-errors mt-20"></div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 col-sm-12">
                  <div className="form-group">
                    <label className="sr-only" htmlFor="subject">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      className="form-control"
                      id="subject-2"
                      placeholder="Your Subject"
                      defaultValue={toSend.subject}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label className="sr-only" htmlFor="message">
                  Message
                </label>
                <textarea
                  name="message"
                  className="form-control"
                  id="message"
                  rows="7"
                  placeholder="Your Message"
                  required
                  data-error="Please, Leave us a message"
                  defaultValue={toSend.message}
                  onChange={handleChange}
                ></textarea>
                <div className="help-block with-errors mt-20"></div>
              </div>
              <div className="text-left">
                <button
                  type="submit"
                  name="submit"
                  className="btn btn-outline btn-md btn-circle btn-animate remove-margin"
                >
                  <span>
                    Send Message <i className="ion-android-arrow-forward"></i>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactEight;
