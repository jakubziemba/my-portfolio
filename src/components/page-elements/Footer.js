import React from 'react'
import styled from 'styled-components'

export default function Footer() {
  return (
    <StyledFooter>
      <div className='copy'>
        <p>Copyright © 2021 Jakub Ziemba. All rights reserved. </p>
      </div>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};

  .copy {
    text-align: center;
    font-size: 0.6rem;

    p:first-child {
      margin-bottom: 0.1rem;
    }
  }
`
