import { servicesData } from '../../data/siteData'
import ServiceCard from './ServiceCard'
import './Services.css'

export default function Services() {
  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">خدماتنا</span>
          <h2 className="section-title">كل ما تحتاجه لحديقة أحلامك</h2>
          <p className="section-desc">
            نقدم باقة متكاملة من الخدمات الاحترافية لتحويل أي مساحة خارجية إلى بيئة خضراء فاخرة
          </p>
        </div>

        <div className="services-grid">
          {servicesData.map((svc) => (
            <ServiceCard key={svc.id} service={svc} />
          ))}
        </div>
      </div>
    </section>
  )
}
