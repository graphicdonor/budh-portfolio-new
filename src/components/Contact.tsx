import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const internships = [
  "Arvind Lifestyle Brands Limited - Flying Machine & F2000 Men's Wear (06/2015 - 07/2015)",
  "Mahindra Retail Pvt. Ltd - Mom & Me Women's Wear, Ethnic & Maternity (06/2015 - 07/2015)",
];

const activities = [
  "Antaragini - IIT Kanpur (2011 & 2012)",
  "NIFT Converse",
  "Ritambara Fashion Show - IIM Lucknow (Costume Designer)",
  "Badminton, Long Jump, 100m Race, Mystery Box Event",
];

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
            <h4>Phone</h4>
            <p>
              <a href="tel:+918840871715" data-cursor="disable">
                +91-8840-871-715
              </a>
            </p>
            <h4>Address</h4>
            <p>F-81, Suncity, Sec 54, Gurugram, Haryana - 122003</p>
            <h4>Education</h4>
            <p>Bachelor of Design (Fashion Design), NIFT Raebareli, 2011 - 2015</p>
          </div>
          <div className="contact-box">
            <h4>Skills</h4>
            <p>
              UI/UX Design, Branding, Graphic Design, Prototyping, Wireframing,
              Design Systems, Research, 3D Modeling, HTML, CSS, SEO
            </p>
            <h4>Languages</h4>
            <p>English, Hindi, Marathi</p>
            <h4>Interests</h4>
            <p>Traveling, sports, food, fitness, movies, music</p>
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
            <h4>Internships</h4>
            <ul className="contact-list">
              {internships.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h4>Co-Curricular</h4>
            <ul className="contact-list">
              {activities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h2>
              Designed by <br /> <span>Buddhpriya Gautam</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
