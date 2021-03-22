import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
  padding: 2rem 1rem;
`

export const Title = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 0rem;
  font-family: ${({ theme }) => theme.font.slab};
  font-size: 2.2rem;
  text-transform: uppercase;
`
