import React, { useState } from 'react'
import styled from 'styled-components'

import Footer from './page-elements/Footer'
import Header from './page-elements/Header'
import Menu from './page-elements/Menu'
import '../styles/fonts.css'

const Layout = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <>
      <Header isVisible={isVisible} setIsVisible={setIsVisible} />
      <Menu isVisible={isVisible} setIsVisible={setIsVisible} />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}

const Main = styled.main`
  padding: 0rem 0.75rem;
`

export default Layout
