import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

import FadeIn from '../../components/FadeIn'
import MyHelmet from '../../components/MyHelmet'
import Links from '../../components/Links'
import { ProjectTitle, Wrapper, ProjectDescription } from '../../styled'
import { machowskaText } from '../../data'

const Machowska = () => {
  return (
    <FadeIn>
      <Wrapper>
        <MyHelmet
          title='Roksana Machowska portfolio'
          link='https://jakub.works/projects/roksana-machowska'
        />
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
    </FadeIn>
  )
}

const ImageWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
`
export default Machowska
