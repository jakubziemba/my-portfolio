import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import FadeIn from '../../components/FadeIn'
import SEO from '../../components/SEO'
import Links from '../../components/Links'
import { ProjectTitle, Wrapper, ProjectDescription } from '../../styled'
import { jagodajniaText } from '../../data'

const Jagodajnia = () => {
  return (
    <FadeIn>
      <Wrapper>
        <SEO
          title='Jagodajnia - Jagoda Kamczacka'
          link='https://jakub.works/projects/jagodajnia'
        />
        <ProjectTitle>Jagodajnia</ProjectTitle>
        <Links
          pageURL='https://kamczacka-jagoda.pl'
          githubURL='https://github.com/jakubziemba/jagody'
        />
        <ProjectDescription>
          {jagodajniaText.map((text, id) => (
            <p key={id}>{text}</p>
          ))}
        </ProjectDescription>
        <StaticImage
          src='../../images/jagodajnia-main.jpeg'
          alt='Jagodajnia home page'
          placeholder='blurred'
          quality='100'
          layout='fullWidth'
          style={{ marginBottom: `1rem` }}
        />
        <StaticImage
          src='../../images/jagodajnia-text.jpeg'
          alt="Jagodajnia home page 'about' section "
          placeholder='blurred'
          quality='100'
          layout='fullWidth'
        />
      </Wrapper>
    </FadeIn>
  )
}

export default Jagodajnia
