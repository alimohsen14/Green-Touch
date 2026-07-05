import './Footer.css'

export default function Footer() {
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
    <>
      <footer className="footer" id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="footer-grid">
              <div className="footer-brand-col">
                <div className="footer-brand">
                  <div className="footer-logo">
                    <img src="/images/logo.png" alt="لمسة خضراء" className="footer-logo-img" />
                  </div>
                  <div className="footer-brand-text">
                    <span className="footer-brand-name">لمسة خضراء</span>
                    <span className="footer-brand-sub">Green Touch</span>
                  </div>
                </div>
                <p className="footer-desc">
                  شركة متخصصة في تصميم وتنفيذ الحدائق والمناظر الطبيعية الفاخرة. نحوّل أحلامك الخضراء إلى واقع مذهل بأيدي خبراء متخصصين.
                </p>
                <div className="footer-social">
                  <a href="https://www.facebook.com/share/1GbtUTfUyp/?mibextid=wwXIfr" className="footer-social-btn" aria-label="فيسبوك" target="_blank" rel="noopener noreferrer">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                    </svg>
                  </a>
                  <a
                    href="https://wa.me/972597696749"
                    className="footer-social-btn"
                    aria-label="واتساب"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="footer-col">
                <h4 className="footer-heading">روابط سريعة</h4>
                <ul className="footer-links">
                  <li><a href="#home" onClick={(e) => handleScrollTo(e, 'home')}>الرئيسية</a></li>
                  <li><a href="#services" onClick={(e) => handleScrollTo(e, 'services')}>خدماتنا</a></li>
                  <li><a href="#projects" onClick={(e) => handleScrollTo(e, 'projects')}>مشاريعنا</a></li>
                  <li><a href="#why-us" onClick={(e) => handleScrollTo(e, 'why-us')}>لماذا نحن</a></li>
                  <li><a href="#process" onClick={(e) => handleScrollTo(e, 'process')}>طريقة عملنا</a></li>
                  <li><a href="#contact" onClick={(e) => handleScrollTo(e, 'contact')}>تواصل معنا</a></li>
                </ul>
              </div>

              <div className="footer-col">
                <h4 className="footer-heading">خدماتنا</h4>
                <ul className="footer-links">
                  <li><a href="#services" onClick={(e) => handleScrollTo(e, 'services')}>تصميم الحدائق</a></li>
                  <li><a href="#services" onClick={(e) => handleScrollTo(e, 'services')}>المناظر الطبيعية</a></li>
                  <li><a href="#services" onClick={(e) => handleScrollTo(e, 'services')}>الإضاءة الخارجية</a></li>
                  <li><a href="#services" onClick={(e) => handleScrollTo(e, 'services')}>أنظمة الري</a></li>
                  <li><a href="#services" onClick={(e) => handleScrollTo(e, 'services')}>العشب الصناعي</a></li>
                  <li><a href="#services" onClick={(e) => handleScrollTo(e, 'services')}>صيانة الحدائق</a></li>
                </ul>
              </div>

              <div className="footer-col">
                <h4 className="footer-heading">تواصل معنا</h4>
                <ul className="footer-contact-list">
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 13.5 19.79 19.79 0 01.003 4.85 2 2 0 012 2.69h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                    </svg>
                    <span dir="ltr">+972 59 769 6749</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <p>جميع الحقوق محفوظة © ٢٠٢٦ لمسة خضراء — Green Touch</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/972597696749"
        className="floating-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل عبر واتساب"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        <span className="wa-tooltip">تواصل معنا</span>
      </a>
    </>
  )
}
