import { useParams, useNavigate } from "react-router-dom";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { projects } from "../data/projectsData";
import "./styles/ProjectDetail.css";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const projectIndex = projects.findIndex((p) => p.id === id);
  const project = projects[projectIndex];

  if (!project) {
    return (
      <div className="pd-page" style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
        <div style={{ textAlign: "center" }}>
          <h2>Project not found</h2>
          <button className="pd-back-btn" onClick={() => navigate("/")}>
            <MdArrowBack /> Back to Portfolio
          </button>
        </div>
      </div>
    );
  }

  const prevProject = projects[(projectIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <div className="pd-page">
      {/* Header */}
      <header className="pd-header">
        <button className="pd-back-btn" onClick={() => navigate("/")}>
          <MdArrowBack /> Back
        </button>
        <a href="/" className="pd-header-logo">BG</a>
        <span className="pd-header-index">
          {String(projectIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
        </span>
      </header>

      {/* Hero */}
      <section className="pd-hero">
        <div className="pd-hero-meta">
          <span className="pd-hero-number">
            {String(projectIndex + 1).padStart(2, "0")}
          </span>
          <div className="pd-hero-divider" />
          <span className="pd-hero-category">{project.category}</span>
        </div>
        <h1 className="pd-hero-title">{project.title}</h1>
        <p className="pd-hero-tagline">{project.tagline}</p>
        <div className="pd-hero-stats">
          <div className="pd-stat">
            <span className="pd-stat-label">Role</span>
            <span className="pd-stat-value">{project.role}</span>
          </div>
          <div className="pd-stat">
            <span className="pd-stat-label">Duration</span>
            <span className="pd-stat-value">{project.duration}</span>
          </div>
          <div className="pd-stat">
            <span className="pd-stat-label">Type</span>
            <span className="pd-stat-value">{project.category}</span>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="pd-image-section">
        <div className="pd-image-wrapper">
          <img src={project.image} alt={project.title} />
        </div>
      </section>

      {/* Overview + Challenge */}
      <section className="pd-content">
        <div>
          <p className="pd-section-label">Overview</p>
          <h3 className="pd-section-title">About the Project</h3>
          <p className="pd-section-body">{project.overview}</p>
        </div>
        <div>
          <p className="pd-section-label">Challenge</p>
          <h3 className="pd-section-title">The Problem</h3>
          <p className="pd-section-body">{project.challenge}</p>
        </div>
      </section>

      {/* Highlights */}
      <section className="pd-highlights">
        <div className="pd-highlights-header">
          <p className="pd-section-label">Highlights</p>
          <h3 className="pd-section-title">Key Contributions</h3>
        </div>
        <div className="pd-highlights-grid">
          {project.highlights.map((item, i) => (
            <div className="pd-highlight-item" key={i}>
              <span className="pd-highlight-num">{String(i + 1).padStart(2, "0")}</span>
              <p className="pd-highlight-text">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Outcome */}
      <section className="pd-outcome">
        <div className="pd-outcome-inner">
          <p className="pd-section-label">Outcome</p>
          <blockquote className="pd-outcome-quote">{project.outcome}</blockquote>
        </div>
      </section>

      {/* Footer Navigation */}
      <nav className="pd-footer-nav">
        <button
          className="pd-footer-nav-btn"
          onClick={() => navigate(`/project/${prevProject.id}`)}
        >
          <MdArrowBack /> {prevProject.title}
        </button>
        <button
          className="pd-footer-nav-btn primary"
          onClick={() => navigate("/")}
        >
          All Projects
        </button>
        <button
          className="pd-footer-nav-btn"
          onClick={() => navigate(`/project/${nextProject.id}`)}
        >
          {nextProject.title} <MdArrowForward />
        </button>
      </nav>
    </div>
  );
};

export default ProjectDetail;
