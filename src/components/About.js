import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

import { Wrapper, Description } from '../styled'

const About = () => {
  return (
    <StyledWrapper id='about'>
      <Container>
        <ImageWrapper>
          <div className='cover'>
            <StaticImage
              src='../images/me.jpg'
              alt='Picture of Jakub Ziemba'
              placeholder='blurred'
              quality='100'
              layout='fullWidth'
              style={{ marginBottom: `1rem`, marginTop: `0` }}
            />
          </div>
        </ImageWrapper>
      </Container>
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

const Container = styled.div`
  width: 100%;
`

const ImageWrapper = styled.div`
  margin-bottom: 2rem;
  position: relative;

  .cover {
    width: 100%;
    position: relative;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(255, 205, 28, 0.15);
      mix-blend-mode: multiply;
      z-index: 1;
      pointer-events: none;
    }

    img {
      width: 100%;
      object-fit: cover;
      filter: brightness(1.2);
      z-index: 0;
    }
  }

  @media (min-width: 768px) {
    margin-top: -3rem;
  }
`

export default About
