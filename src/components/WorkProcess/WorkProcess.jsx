import { processData } from '../../data/siteData'
import './WorkProcess.css'

export default function WorkProcess() {
  return (
    <section className="process section" id="process">
      <div className="process-bg"></div>
      <div className="container">
        <div className="section-header light">
          <span className="section-tag light">طريقة عملنا</span>
          <h2 className="section-title">من الفكرة إلى الحديقة</h2>
          <p className="section-desc">
            منهجية متقنة في خمس مراحل تضمن لك نتيجة تفوق تخيّلك
          </p>
        </div>

        <div className="process-timeline">
          {processData.map((step) => (
            <div className="process-step visible" id={step.id} key={step.id}>
              <div className="step-number">{step.num}</div>
              <div className="step-connector"></div>
              <div className="step-card">
                <div className="step-icon">
                  {step.icon}
                </div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
