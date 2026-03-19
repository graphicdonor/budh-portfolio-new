import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>UI/UX Designer & Freelancer</h4>
                <h5>Self-Employed</h5>
              </div>
              <h3>2020</h3>
            </div>
            <p>
              Designed Knovelo (readers community platform), Locatr (grocery
              navigation app), and Kockpit (BI dashboard for ERP systems) —
              each from ideation to final product.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>UI/UX Designer</h4>
                <h5>WebIQ Technologies Pvt. Ltd.</h5>
              </div>
              <h3>2016 – 2022</h3>
            </div>
            <p>
              Lead designer for RankWatch, an AI-powered cloud-based SEO
              platform, and WebSignals, a web monitoring tool for brands and
              agencies — both designed from scratch.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior UI/UX Designer</h4>
                <h5>Vonken Brandtech Pvt. Ltd.</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Pivotal role designing R'Dash (YC Funded), a construction
              management platform for developers, contractors & design studios.
              Responsible for complete workflow automation UX from scratch.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
