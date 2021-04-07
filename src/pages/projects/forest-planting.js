import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import SEO from '../../components/SEO'
import FadeIn from '../../components/FadeIn'
import Links from '../../components/Links'
import { ProjectTitle, Wrapper, ProjectDescription } from '../../styled'
import { forestText } from '../../data'

const ForestPlanting = () => {
  return (
    <FadeIn>
      <SEO
        title='Forest Planting Website'
        link='https://jakub.works/projects/forest-planting'
      />
      <Wrapper>
        <ProjectTitle>Forest Planting</ProjectTitle>
        <Links pageURL='https://forestplanting.pl' />
        <ProjectDescription>
          {forestText.map((text, id) => (
            <p key={id}>{text}</p>
          ))}
        </ProjectDescription>
        <StaticImage
          src='../../images/forest-planting-main.jpeg'
          alt='Forest Planting home page'
          placeholder='blurred'
          quality='100'
          layout='fullWidth'
          style={{ marginBottom: `1rem` }}
        />
        <StaticImage
          src='../../images/forest-planting-one.jpeg'
          alt='Forest Planting section one'
          placeholder='blurred'
          quality='100'
          layout='fullWidth'
          style={{ marginBottom: `1rem` }}
        />
        <StaticImage
          src='../../images/forest-planting-three.jpeg'
          alt='Forest Planting section three'
          placeholder='blurred'
          quality='100'
          layout='fullWidth'
          style={{ marginBottom: `1rem` }}
        />
        <StaticImage
          src='../../images/forest-planting-modal.jpeg'
          alt='Forest Planting section three modal with horizontal timeline'
          placeholder='blurred'
          quality='100'
          layout='fullWidth'
        />
      </Wrapper>
    </FadeIn>
  )
}

export default ForestPlanting
