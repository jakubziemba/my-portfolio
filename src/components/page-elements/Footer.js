import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <StyledFooter>
      <div className='copy'>
        <p>Copyright © 2022. All rights reserved. </p>
      </div>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  display: flex;
  justify-content: flex-start;
  margin-top: 6.25rem;
  background-color: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.txt};
  padding: 0.75rem 0.75rem 1.5rem;
  line-height: 1.2;

  .copy {
    font-size: 1rem;
  }

  @media (min-width: 768px) {
    padding: 0.75rem 1.25rem 1.5rem;
  }
`

export default Footer
