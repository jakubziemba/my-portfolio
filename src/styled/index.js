import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
`

export const Title = styled.div`
  display: flex;
  padding: 1rem 0 0.75rem 0;
  font-family: ${({ theme }) => theme.font.sans};
  font-size: 3rem;
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
`

export const ProjectDescription = styled(Description)`
  margin-top: 1.5rem;

  p {
    font-size: ${({ theme }) => theme.fontSize.mdsm};
    margin-bottom: 1.25rem;
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
`
