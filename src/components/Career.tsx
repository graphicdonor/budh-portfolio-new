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
                <h4>Lead Designer</h4>
                <h5>RankWatch</h5>
              </div>
              <h3>2016 - 2021</h3>
            </div>
            <p>
              Worked on RankWatch, an AI-powered internet marketing platform
              that helps website owners and SEO agencies analyze traffic,
              backlinks, rankings, and competitors. Defined and implemented
              UI/UX standards and interaction design systems.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>UI/UX Designer</h4>
                <h5>WebSignals</h5>
              </div>
              <h3>2019 - 2021</h3>
            </div>
            <p>
              Built product design for a web monitoring and brand intelligence
              platform that tracks mentions across social media, news, blogs,
              forums, and podcasts, taking it from prototype to final
              solution.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Product Designer</h4>
                <h5>R'Dash (YC Funded Startup)</h5>
              </div>
              <h3>2022 Present</h3>
            </div>
            <p>
              Built the construction management platform from scratch for
              developers, contractors, and design studios. Designed workflows
              for surveys, BOQs, and vendor allocation with a focus on
              end-to-end collaboration and automation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
