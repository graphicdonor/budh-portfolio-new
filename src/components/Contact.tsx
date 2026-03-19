import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:buddhpriya93@gmail.com" data-cursor="disable">
                buddhpriya93@gmail.com
              </a>
            </p>
            <h4>Education</h4>
            <p>B.Des, Fashion Design — NIFT Raebareli</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://www.behance.net/buddhpriyagautam"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Behance <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/buddhpriyagautam"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://dribbble.com/buddhpriyagautam"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Dribbble <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/buddhpriyagautam"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed by <br /> <span>Buddhpriya Gautam</span>
            </h2>
            <h5>
              <MdCopyright /> 2025
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
