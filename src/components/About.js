import React from 'react'
import styled from 'styled-components'

import { Wrapper, Description } from '../styled'

const About = () => {
  return (
    <StyledWrapper id='about'>
      <Description>
        <p>
          Hi,
          <br /> My name is Jakub and I’m a web developer, designer and musician
          based in Warsaw, Poland.
        </p>
        <p>
          As a creative I’m driven by art, technology, music and design. I
          strive to create digital experiences that are focused on simplicity,
          aesthetics and emotions.
        </p>
        <p>I work in React, Gatsby, Framer Motion, GSAP and more.</p>
      </Description>
    </StyledWrapper>
  )
}

const StyledWrapper = styled(Wrapper)`
  padding-top: 1.5rem;
  position: relative;
`

export default About
