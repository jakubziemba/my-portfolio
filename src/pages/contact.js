import React from 'react'
import styled from 'styled-components'

import { Description, Link, Title, Wrapper } from '../styled'

const Contact = () => {
  return (
    <Wrapper>
      <Title>Contact</Title>
      <Description>
        <p>
          I'm always open for new opportunities, so if you'd like to work
          together, please send me a message through any of the channels:{' '}
        </p>
        <StyledLink href='mailto:ziemba.jak@gmail.com'>
          Email <span className='arrow'>&#8594;</span>
        </StyledLink>
        <StyledLink href='https://twitter.com/saintjcob' target='_blank'>
          Twitter <span className='arrow'>&#8594;</span>
        </StyledLink>
        <StyledLink href='https://instagram.com/saintjcob' target='_blank'>
          Instagram <span className='arrow'>&#8594;</span>
        </StyledLink>
      </Description>
    </Wrapper>
  )
}

const StyledLink = styled(Link)`
  display: block;
  margin: 1rem 0rem;
  font-size: ${({ theme }) => theme.fontSize.xllg};

  &:first-of-type {
    margin-top: 3rem;
  }
`

export default Contact
