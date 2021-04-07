import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const FadeIn = ({ children }) => {
  const ref = useRef()

  useEffect(() => {
    gsap.fromTo(
      [ref.current],
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7, delay: 1 }
    )
  }, [])
  return <div ref={ref}>{children}</div>
}

export default FadeIn
