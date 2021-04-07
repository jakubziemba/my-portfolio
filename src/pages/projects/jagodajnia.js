import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Links from '../../components/Links'
import { ProjectTitle, Wrapper, ProjectDescription } from '../../styled'
import { jagodajniaText } from '../../data'

const Jagodajnia = () => {
  return (
    <Wrapper>
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
  )
}

export default Jagodajnia
