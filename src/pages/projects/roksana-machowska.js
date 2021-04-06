import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { ProjectTitle, Wrapper, Description } from '../../styled'

const Machowska = () => {
  return (
    <Wrapper>
      <ProjectTitle>Roksana Machowska</ProjectTitle>
      <LinksContainer>
        <Link href='https://machowska.art' target='_blank'>
          Link to website <span className='arrow'>&#8594;</span>
        </Link>
        <Link
          href='https://github.com/jakubziemba/machowska-portfolio'
          target='_blank'
        >
          Github <span className='arrow'>&#8594;</span>
        </Link>
      </LinksContainer>
      <StyledDescription>
        <p>
          Every artist wants a website that will contemplate their art. After
          seeing the client's work, consulting the ideas and inspirations, I
          first designed and then developed the portfolio website.
        </p>
        <p>
          Because of the inherent minimalism and abstract nature of Roksana's
          works, we've decided to keep the design as minimal as possible,
          letting the images, typography and animations play the main role.
        </p>
        <p>
          For the developement, I've chosen to use React (Next.js) with CSS
          Modules and Framer Motion for the animations.
        </p>
      </StyledDescription>
      <StaticImage
        src='../../images/machowska-ipad.jpeg'
        alt="Roksana Machowska's welcome page for iPad"
        placeholder='blurred'
        style={{ marginBottom: `1rem` }}
      />
      <StaticImage
        src='../../images/machowska-paintings.jpeg'
        alt="Roksana Machowska's painting page"
        placeholder='blurred'
        style={{ marginBottom: `1rem` }}
      />
      <StaticImage
        src='../../images/machowska-about.jpeg'
        alt="Roksana Machowska's about page"
        placeholder='blurred'
      />
    </Wrapper>
  )
}

const LinksContainer = styled.div`
  display: flex;
`

const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.txt};
  font-weight: bold;
  margin-right: 1rem;
  position: relative;
`

const StyledDescription = styled(Description)`
  margin-top: 1.5rem;

  p {
    font-size: ${({ theme }) => theme.fontSize.mdsm};
    margin-bottom: 1.25rem;
  }
`

export default Machowska
