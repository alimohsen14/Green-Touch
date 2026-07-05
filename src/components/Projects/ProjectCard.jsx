export default function ProjectCard({ project }) {
  return (
    <div className={`project-card visible ${project.large ? 'large' : ''}`} id={project.id}>
      <div className="project-img-wrap">
        <img src={project.image} alt={project.alt} className="project-img" />
        <div className="project-overlay">
          <div className="project-info">
            <span className="project-category">{project.category}</span>
            <h3>{project.title}</h3>
            <p className="project-location">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {project.location}
            </p>
            <p className="project-desc">{project.desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
