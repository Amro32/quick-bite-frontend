import React, {useState} from "react";
import BreadCrumb from "../AssetComponents/BreadCrumb/BreadCrumb";
import { FaEnvelopeOpen } from "react-icons/fa";
import Title from "../AssetComponents/Title/Title";
import emailjs from "emailjs-com";

function Contact() {

  const [data, setData] = useState({});
  const [sent, setSent] = useState(false);

  const handle = (e) => {
    e.preventDefault();
    const params = {
      from_name: data.name,
      to_name: "QuickBiteAdmin",
      from_email: data.email,
      message: data.message,
      subject: data.subject
    };
    emailjs.send(
      "service_84k6v8n",
      "template_ypr4voa",
      params,
      "user_3ljxo8synD4VPPWFQbcWs"
    );
    setSent(true);
  };

  return (
    <div className="contact">
      <BreadCrumb title={"Contact Us"} pageName={"Contact"} />
      <div className="container-xxl py-5">
        <div className="container">
          <Title title="Contact Us" subtitle={"Contact For Any Query"} />
          <div className="row g-4">
            <div className="col-12">
              <div className="row gy-4">
                <div className="col-md-4">
                  <h5 className="section-title ff-secondary fw-normal text-start primaryColor">
                    Booking
                  </h5>
                  <p>
                    <i className="fa primaryColor me-2">
                      <FaEnvelopeOpen />
                    </i>
                    book@example.com
                  </p>
                </div>
                <div className="col-md-4">
                  <h5 className="section-title ff-secondary fw-normal text-start primaryColor">
                    General
                  </h5>
                  <p>
                    <i className="fa primaryColor me-2">
                      <FaEnvelopeOpen />
                    </i>
                    info@example.com
                  </p>
                </div>
                <div className="col-md-4">
                  <h5 className="section-title ff-secondary fw-normal text-start primaryColor">
                    Technical
                  </h5>
                  <p>
                    <i className="fa primaryColor me-2">
                      <FaEnvelopeOpen />
                    </i>
                    tech@example.com
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 wow fadeIn" data-wow-delay="0.1s">
              <iframe
                className="position-relative rounded w-100 h-100"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26506.430285299703!2d35.521253433015055!3d33.85606103586801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f1798849fcae3%3A0xcb7cf8d31d35ce1!2sCity%20Centre%20Beirut!5e0!3m2!1sen!2slb!4v1652521185790!5m2!1sen!2slb"
                frameborder="0"
                style={{ minHeight: "350px", border: "0" }}
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </div>
            <div className="col-md-6">
              <div className="wow fadeInUp" data-wow-delay="0.2s">
                <form onSubmit={handle}>
                  {sent ? (
                    <div>Your message has been sent. Thank you!</div>
                  ) : (
                    <>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <div className="form-floating">
                            <input
                              type="text"
                              className="form-control"
                              id="name"
                              placeholder="Your Name"
                                onChange={(e) => setData({...data, name: e.target.value})}
                              />
                              <label for="name">Your Name</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-floating">
                              <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Your Email"
                                onChange={(e) => setData({...data, email: e.target.value})}
                              />
                              <label for="email">Your Email</label>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-floating">
                              <input
                                type="text"
                                className="form-control"
                                id="subject"
                                placeholder="Subject"
                                onChange={(e) => setData({...data, subject: e.target.value})}
                              />
                              <label for="subject">Subject</label>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-floating">
                              <textarea
                                className="form-control"
                                placeholder="Leave a message here"
                                id="message"
                                style={{height: "150px"}}
                                onChange={(e) => setData({...data, message: e.target.value})}
                              ></textarea>
                              <label for="message">Message</label>
                            </div>
                          </div>
                          <div className="col-12">
                            <button
                              className="btn primaryBtn w-100 py-3"
                              type="submit"
                            >
                              Send Message
                            </button>
                          </div>
                        </div>
                    </>)}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;