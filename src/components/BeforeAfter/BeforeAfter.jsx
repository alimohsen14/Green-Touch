import { useState, useRef, useEffect } from 'react'
import './BeforeAfter.css'

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50) // percentage
  const containerRef = useRef(null)
  const isDragging = useRef(false)

  const handleMove = (clientX) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    let percentage = (x / rect.width) * 100
    percentage = Math.max(5, Math.min(95, percentage)) // constrain between 5% and 95%
    setSliderPosition(percentage)
  }

  const handleMouseDown = (e) => {
    isDragging.current = true
    handleMove(e.clientX)
  }

  const handleTouchStart = (e) => {
    isDragging.current = true
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX)
    }
  }

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging.current) return
      handleMove(e.clientX)
    }

    const handleTouchMove = (e) => {
      if (!isDragging.current) return
      if (e.touches[0]) {
        handleMove(e.touches[0].clientX)
      }
    }

    const handleMouseUp = () => {
      isDragging.current = false
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('touchmove', handleTouchMove, { passive: false })
    window.addEventListener('touchend', handleMouseUp)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('touchend', handleMouseUp)
    }
  }, [])

  return (
    <section className="before-after section" id="before-after">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">التحول</span>
          <h2 class="section-title">قبل وبعد</h2>
          <p className="section-desc">
            اشهد الفرق المذهل — نحول الفراغات الجرداء إلى حدائق تنبض بالحياة
          </p>
        </div>

        <div className="comparison-wrapper">
          <div
            className="comparison-container"
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          >
            <div className="comparison-before">
              <img src="/images/before_after.png" alt="قبل التصميم" className="comp-img comp-before-img" />
              <span className="comp-label before-label">قبل</span>
            </div>
            <div
              className="comparison-after"
              style={{ width: `${sliderPosition}%` }}
            >
              <img src="/images/before_after.png" alt="بعد التصميم" className="comp-img comp-after-img" />
              <span className="comp-label after-label">بعد</span>
            </div>
            <div
              className="comparison-handle"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="handle-line"></div>
              <div className="handle-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M8 3L3 8l5 5M16 3l5 5-5 5" />
                </svg>
              </div>
              <div className="handle-line"></div>
            </div>
          </div>
          <div className="comparison-hint">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M8 3L3 8l5 5M16 3l5 5-5 5" />
            </svg>
            حرّك المقبض لرؤية الفرق
          </div>
        </div>
      </div>
    </section>
  )
}
