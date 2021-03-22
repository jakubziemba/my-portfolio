import '../styles/fonts.css'

import React, { useState } from 'react'

import Header from './page-elements/Header'
import Menu from './page-elements/Menu'
import { motion } from 'framer-motion'
import styled from 'styled-components'

export default function Layout({ children }) {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <>
      <Wrapper isVisible={isVisible}>
        <Menu isVisible={isVisible} setIsVisible={setIsVisible} />
        <motion.main
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          transition={{
            type: 'spring',
            mass: 0.35,
            stiffness: 75,
            duration: 0.3,
          }}
        >
          <Header isVisible={isVisible} setIsVisible={setIsVisible} />
          {children}
        </motion.main>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  /* transition: all 0.2s ease-in-out; */
  /* margin-right: ${({ isVisible }) => (isVisible ? `4rem` : ``)}; */
`
