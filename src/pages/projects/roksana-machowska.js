import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

import Links from '../../components/Links'
import { ProjectTitle, Wrapper, ProjectDescription } from '../../styled'
import { machowskaText } from '../../data'

const Machowska = () => {
  return (
    <Wrapper>
      <ProjectTitle>Roksana Machowska</ProjectTitle>
      <Links
        pageURL='https://machowska.art'
        githubURL='https://github.com/jakubziemba/machowska-portfolio'
      />
      <ProjectDescription>
        {machowskaText.map((text, id) => (
          <p key={id}>{text}</p>
        ))}
      </ProjectDescription>
      <ImageWrapper>
        <StaticImage
          src='../../images/machowska-ipad.jpeg'
          alt="Roksana Machowska's welcome page for iPad"
          placeholder='blurred'
          quality='100'
          layout='fullWidth'
          style={{ marginBottom: `1rem` }}
        />
        <StaticImage
          src='../../images/machowska-paintings.jpeg'
          alt="Roksana Machowska's painting page"
          placeholder='blurred'
          quality='100'
          layout='fullWidth'
          style={{ marginBottom: `1rem` }}
        />
        <StaticImage
          src='../../images/machowska-about.jpeg'
          alt="Roksana Machowska's about page"
          placeholder='blurred'
          quality='100'
          layout='fullWidth'
          style={{ marginBottom: `1rem` }}
        />
      </ImageWrapper>
    </Wrapper>
  )
}

const ImageWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
`
export default Machowska
