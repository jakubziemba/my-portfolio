import React from 'react'
import styled from 'styled-components'

import Card from './Card'
import { Title, Wrapper } from '../styled'

const Projects = () => {
  return (
    <StyledWrapper id='projects'>
      <Title>Projects</Title>
      <Card />
    </StyledWrapper>
  )
}

const StyledWrapper = styled(Wrapper)`
  position: relative;
`

export default Projects
