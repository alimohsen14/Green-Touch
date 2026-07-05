import { testimonialsData } from '../../data/siteData'
import './Testimonials.css'

export default function Testimonials() {
  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">آراء عملائنا</span>
          <h2 className="section-title">ماذا يقول عملاؤنا</h2>
          <p className="section-desc">رضا عملائنا هو مقياس نجاحنا الحقيقي</p>
        </div>

        <div className="testimonials-grid">
          {testimonialsData.map((test) => (
            <div
              className={`testimonial-card visible ${test.featured ? 'featured' : ''}`}
              id={test.id}
              key={test.id}
            >
              <div className="test-quote-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              <div className="test-stars">
                <span>★★★★★</span>
              </div>
              <p className="test-text">{test.text}</p>
              <div className="test-author">
                <div className="test-avatar">{test.initials}</div>
                <div className="test-info">
                  <span className="test-name">{test.name}</span>
                  <span className="test-role">{test.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
