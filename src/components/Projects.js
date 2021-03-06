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
  display: flex;
  justify-content: center;
  position: relative;
`

export default Projects
