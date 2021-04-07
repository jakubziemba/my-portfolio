import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;

  @media (min-width: 768px) {
    margin-top: 2rem;
  }
`

export const Title = styled.h1`
  display: flex;
  padding: 1rem 0 0.75rem 0;
  font-family: ${({ theme }) => theme.font.sans};
  font-size: 3rem;

  @media (min-width: 768px) {
    font-size: 3.5rem;
    font-weight: 700;
  }
`

export const ProjectTitle = styled(Title)`
  font-size: 3rem;
  padding-top: 1rem;
  margin-left: -4px;
`

export const Description = styled.div`
  margin-bottom: 2rem;

  p {
    font-size: 1.75rem;
    line-height: 140%;
    margin-bottom: 0.625rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (min-width: 768px) {
    max-width: 70%;

    p {
      font-size: ${({ theme }) => theme.fontSize.xllg};
      margin-bottom: 1rem;
    }
  }
`

export const ProjectDescription = styled(Description)`
  margin-top: 1.5rem;

  p {
    font-size: ${({ theme }) => theme.fontSize.mdsm};
    margin-bottom: 1.25rem;
  }

  @media (min-width: 768px) {
    p {
      font-size: ${({ theme }) => theme.fontSize.lg};
    }
  }
`

export const LinksContainer = styled.div`
  display: flex;
`

export const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.txt};
  font-weight: bold;
  margin-right: 1rem;
  position: relative;

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.mdsm};
  }
`
