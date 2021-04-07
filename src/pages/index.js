import React from 'react'

import FadeIn from '../components/FadeIn'
import SEO from '../components/SEO'
import About from '../components/About'
import Projects from '../components/Projects'

const Home = () => {
  return (
    <FadeIn>
      <SEO title='Jakub Ziemba' link='https://jakub.works' />
      <About />
      <Projects />
    </FadeIn>
  )
}

export default Home
