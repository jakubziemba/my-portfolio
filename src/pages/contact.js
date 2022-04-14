import React from 'react'
import styled from 'styled-components'

import FadeIn from '../components/FadeIn'
import MyHelmet from '../components/MyHelmet'
import { Description, Link, Title, Wrapper } from '../styled'

const Contact = () => {
  return (
    <FadeIn>
      <Wrapper>
        <MyHelmet title='Contact page' link='https://jakub.works/contact' />
        <Title>Contact</Title>
        <Description>
          <p>
            I'm always open to new opportunities, so if you'd like to work
            together, please send me a message through any of the channels:{' '}
          </p>
          <Links>
            <li>
              <StyledLink to='mailto:ziemba.jak@gmail.com'>
                Email <span className='arrow'>&#8594;</span>
              </StyledLink>
            </li>
            <li>
              <StyledLink to='https://twitter.com/saintjcob' target='_blank'>
                Twitter <span className='arrow'>&#8594;</span>
              </StyledLink>
            </li>
            <li>
              <StyledLink to='https://instagram.com/saintjcob' target='_blank'>
                Instagram <span className='arrow'>&#8594;</span>
              </StyledLink>
            </li>
            <li>
              <StyledLink to='https://t.me/saintjcob' target='_blank'>
                Telegram <span className='arrow'>&#8594;</span>
              </StyledLink>
            </li>
          </Links>
          <p>...or find me on GitHub: </p>
          <Links>
            <StyledLink to='https://github.com/jakubziemba' target='_blank'>
              GitHub <span className='arrow'>&#8594;</span>
            </StyledLink>
          </Links>
        </Description>
      </Wrapper>
    </FadeIn>
  )
}

const Links = styled.ul`
  margin-top: 3rem;
  margin-bottom: 5rem;
`

const StyledLink = styled(Link)`
  display: inline-block;
  margin: 0.5rem 0rem;
  font-size: ${({ theme }) => theme.fontSize.xllg};
  transition: transform 0.2s ease;

  @media (min-width: 768px) {
    &:hover {
      transform: translateX(0.6rem);
    }
  }
`

export default Contact
