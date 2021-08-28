import About from '../components/About'
import FadeIn from '../components/FadeIn'
import Projects from '../components/Projects'
import React from 'react'
import SEO from '../components/SEO'

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
