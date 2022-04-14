import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import MyHelmet from '../../components/MyHelmet'
import FadeIn from '../../components/FadeIn'
import Links from '../../components/Links'
import { ProjectTitle, Wrapper, ProjectDescription } from '../../styled'
import { haitText } from '../../data'

const ForestPlanting = () => {
  return (
    <FadeIn>
      <MyHelmet title='Hait' link='/projects/hait' />
      <Wrapper>
        <ProjectTitle>Hait</ProjectTitle>
        <Links figmaURL='https://www.figma.com/file/vrv4y5ndQ6ZD6wJPVfpHs8/hetti-%2F-nepal?node-id=47%3A2799' />
        <ProjectDescription>
          {haitText.map((text, id) => (
            <p key={id}>{text}</p>
          ))}
        </ProjectDescription>
        <StaticImage
          src='../../images/hait-main.jpg'
          alt='Hait desktop view'
          placeholder='blurred'
          quality='100'
          layout='fullWidth'
          style={{ marginBottom: `1rem` }}
        />
        <StaticImage
          src='../../images/hait-mobile.png'
          alt='Hait dark mode mobile view'
          placeholder='blurred'
          quality='100'
          layout='fullWidth'
          style={{ marginBottom: `1rem` }}
        />
        <StaticImage
          src='../../images/hait-admin.png'
          alt='Hait admin page'
          placeholder='blurred'
          quality='100'
          layout='fullWidth'
          style={{ marginBottom: `1rem` }}
        />
        <StaticImage
          src='../../images/hait-user-journey.png'
          alt='User journey for Hait'
          placeholder='blurred'
          quality='100'
          layout='fullWidth'
        />
      </Wrapper>
    </FadeIn>
  )
}

export default ForestPlanting
