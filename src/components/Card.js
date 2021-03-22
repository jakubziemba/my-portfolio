import React from 'react'
import styled from 'styled-components'

export default function Card() {
  return <CardWrapper></CardWrapper>
}

const CardWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 30rem;
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
`
