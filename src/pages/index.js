import { Title, Wrapper } from '../styles'

import Footer from '../components/page-elements/Footer'
import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

export default function Home() {
  return (
    <>
      <StyledWrapper>
        <StyledTitle>
          <div className='firstName'>
            <span>J</span>
            <span>a</span>
            <span>k</span>
            <span>u</span>
            <span>b</span>
          </div>
          <div className='lastName'>
            <span>Z</span>
            <span>i</span>
            <span>e</span>
            <span>m</span>
            <span>b</span>
            <span>a</span>
          </div>
        </StyledTitle>
        <div className='imageContainer'>
          <StaticImage
            src='../images/me2.JPG'
            alt="Jakub's portrait"
            quality={90}
          />
        </div>
        <Description>
          <p className='first'>
            I'm a front-end developer, designer and musician.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
            minus fuga corrupti ipsam, pariatur aliquam sequi doloribus! Ea
            ullam, alias beatae reiciendis debitis quod eos cum recusandae,
            perferendis molestiae impedit.
          </p>
        </Description>
      </StyledWrapper>
      <Footer />
    </>
  )
}

const StyledWrapper = styled(Wrapper)`
  padding: 0;
  padding-top: 2rem;

  .imageContainer {
    margin: 0;
    padding: 0;
  }
`

const StyledTitle = styled(Title)`
  .firstName {
    margin-right: 0.5rem;
  }
`

const Description = styled.div`
  padding: 1rem;
  margin-bottom: 3rem;

  p {
    font-size: ${({ theme }) => theme.fontSize.mdsm};
    line-height: ${({ theme }) => theme.lineHeight.xl};
  }

  .first {
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    margin-bottom: 1rem;
  }
`
