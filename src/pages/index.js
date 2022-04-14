import About from '../components/About'
import FadeIn from '../components/FadeIn'
import Projects from '../components/Projects'
import React from 'react'
import MyHelmet from '../components/MyHelmet'

const Home = () => {
  return (
    <FadeIn>
      <MyHelmet title='Jakub Ziemba' link='https://jakub.works' />
      <About />
      <Projects />
    </FadeIn>
  )
}

export default Home
