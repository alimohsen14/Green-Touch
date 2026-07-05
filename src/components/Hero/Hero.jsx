import { useEffect, useState } from 'react'
import './Hero.css'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 200)
    return () => clearTimeout(timer)
  }, [])

  const handleScrollTo = (e, id) => {
    e.preventDefault()
    const target = document.getElementById(id)
    if (target) {
      const offset = 80
      const top = target.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section className={`hero ${loaded ? 'loaded' : ''}`} id="home">
      <div className="hero-bg">
        <img src="/images/hero.png" alt="حديقة فاخرة" className="hero-img" />
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          شركة متخصصة في تصميم المناظر الطبيعية
        </div>
        <h1 className="hero-title">
          نحو حدائق<br />
          <em>تنبض بالحياة</em>
        </h1>
        <p className="hero-subtitle">
          نحوّل مساحاتك الخارجية إلى تحف فنية خضراء تجمع بين الجمال والوظيفة.
          بخبرةٍ راسخة في تصميم وتنسيق الحدائق، نقدم حلولاً تجمع بين الإبداع والجودة والاحترافية.
        </p>

        <div className="hero-slogan">
          <span className="slogan-badge">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="slogan-icon">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            سرعة بالإنجاز ومصداقية بالعمل
          </span>
        </div>

        <div className="hero-actions">
          <a
            href="#projects"
            className="btn-primary"
            onClick={(e) => handleScrollTo(e, 'projects')}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
            مشاريعنا
          </a>
          <a
            href="#contact"
            className="btn-outline"
            onClick={(e) => handleScrollTo(e, 'contact')}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 13.5 19.79 19.79 0 01.003 4.85 2 2 0 012 2.69h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
            </svg>
            تواصل معنا
          </a>
        </div>
      </div>

    </section>
  )
}
