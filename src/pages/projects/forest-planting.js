import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Links from '../../components/Links'
import { ProjectTitle, Wrapper, ProjectDescription } from '../../styled'
import { forestText } from '../../data'

const ForestPlanting = () => {
  return (
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
        style={{ marginBottom: `1rem` }}
        quality='100'
      />
      <StaticImage
        src='../../images/forest-planting-one.jpeg'
        alt='Forest Planting section one'
        placeholder='blurred'
        style={{ marginBottom: `1rem` }}
        quality='100'
      />
      <StaticImage
        src='../../images/forest-planting-three.jpeg'
        alt='Forest Planting section three'
        placeholder='blurred'
        style={{ marginBottom: `1rem` }}
        quality='100'
      />
      <StaticImage
        src='../../images/forest-planting-modal.jpeg'
        alt='Forest Planting section three modal with horizontal timeline'
        placeholder='blurred'
        quality='100'
      />
    </Wrapper>
  )
}

export default ForestPlanting
