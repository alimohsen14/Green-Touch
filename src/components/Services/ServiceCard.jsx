import { useState } from 'react'

export default function ServiceCard({ service }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="service-card visible"
      id={`svc-${service.id}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="service-img-wrap">
        <div className={`service-img ${service.bgClass}`}>
          {service.icon}
        </div>
      </div>
      <div
        className="service-icon-badge"
        style={{
          transform: hovered ? 'translateY(-4px) rotate(-8deg)' : 'none',
          transition: 'transform 0.3s ease'
        }}
      >
        {service.badgeIcon}
      </div>
      <div className="service-body">
        <h3>{service.title}</h3>
        <p>{service.desc}</p>
      </div>
      <div className="service-hover-line"></div>
    </div>
  )
}
