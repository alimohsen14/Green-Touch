import { projectsData } from '../../data/siteData'
import ProjectCard from './ProjectCard'
import './Projects.css'

export default function Projects() {
  const handleScrollToContact = (e) => {
    e.preventDefault()
    const target = document.getElementById('contact')
    if (target) {
      const offset = 80
      const top = target.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">أعمالنا</span>
          <h2 className="section-title">مشاريعنا المميزة</h2>
          <p className="section-desc">
            نخبة من مشاريعنا الأكثر إبهاراً التي تجسّد فلسفتنا في الجمال والإتقان
          </p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="projects-cta">
          <a href="#contact" className="btn-primary" onClick={handleScrollToContact}>
            عرض جميع المشاريع
          </a>
        </div>
      </div>
    </section>
  )
}
