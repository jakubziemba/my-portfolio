import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { gsap } from 'gsap'

import Footer from './page-elements/Footer'
import Header from './page-elements/Header'
import Menu from './page-elements/Menu'
import '../styles/fonts.css'

const Layout = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false)
  const wrapperRef = useRef()

  useEffect(() => {
    gsap.fromTo(
      [wrapperRef.current],
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 1 }
    )
  }, [])

  useEffect(() => {
    if (isVisible) {
      document.body.classList.add('noscroll')
      document.querySelector('html').scrollTop = window.scrollY
    } else {
      document.body.classList.remove('noscroll')
    }
  }, [isVisible])

  return (
    <div ref={wrapperRef} style={{ opacity: 0 }}>
      <Header isVisible={isVisible} setIsVisible={setIsVisible} />
      <Menu isVisible={isVisible} setIsVisible={setIsVisible} />
      <Main>{children}</Main>
      <Footer />
    </div>
  )
}

const Main = styled.main`
  padding: 0rem 0.75rem;
  min-height: calc(93vh - 9.75rem);

  @media (min-width: 768px) {
    padding: 0 1.25rem;
  }
`

export default Layout
