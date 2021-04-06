import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <StyledFooter>
      <div className='copy'>
        <p>Copyright © 2021. All rights reserved. </p>
      </div>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  display: flex;
  justify-content: flex-start;
  /* align-items: center; */
  height: 3rem;
  margin-top: 6.25rem;
  background-color: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.txt};
  padding: 0.75rem;

  .copy {
    /* text-align: center; */
    font-size: 1rem;

    p:first-child {
      margin-bottom: 0.1rem;
    }
  }
`

export default Footer
