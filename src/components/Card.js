import { GatsbyImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import React from 'react'
import projects from '../data'
import styled from 'styled-components'
import useQueryCard from 'query/useQueryCard'

const Card = () => {
  const data = useQueryCard()
  const photos = data.allFile.edges

  return (
    <>
      {projects.map(project => (
        <StyledLink
          key={project.path || project.id}
          to={project.path ? `/projects/${project.path}` : null}
        >
          <CardWrapper>
            <TextWrapper className='text'>
              <Title>{project.title}</Title>
              <Date>{project.date}</Date>
              <Role>{project.role}</Role>
              <Tech>{project.tech}</Tech>
              <Category>{project.category}</Category>
            </TextWrapper>
            {photos.map(photo => {
              if (photo.node.name === `${project.path}-main`) {
                return (
                  <ImageWrapper className='imageWrapper' key={photo.node.name}>
                    <GatsbyImage
                      image={photo.node.childImageSharp.gatsbyImageData}
                      alt={`${photo.node.name} project`}
                      objectFit='contain'
                      objectPosition='0% 100%'
                    />
                  </ImageWrapper>
                )
              }
              return null
            })}
          </CardWrapper>
        </StyledLink>
      ))}
    </>
  )
}

const CardWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(6px);
  border-radius: 10px;
  z-index: 2;
  transition: background 0.2s ease;

  @media (min-width: 768px) {
    flex-flow: row nowrap;
    justify-content: space-between;
    padding: 1.5rem 1.5rem 1.5rem 0.5rem;

    .text {
      transition: all 0.2s ease;
    }

    &:hover {
      background: rgba(255, 255, 255, 0.09);
      .text {
        transform: translateX(1rem);
      }
    }
  }

  @media (min-width: 1200px) {
    max-height: 600px;
  }
`

const TextWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;

  @media (min-width: 768px) {
    width: 50%;
  }
`

const Title = styled.h2`
  display: flex;
  max-width: 70%;
  line-height: 122%;
  padding: 1rem 1rem 0rem;
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-family: ${({ theme }) => theme.font.sans};
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  @media (min-width: 768px) {
    padding-top: 0;
    font-size: ${({ theme }) => theme.fontSize.xllg};
    margin-top: -6px;
  }

  @media (min-width: 960px) {
    max-width: 80%;
  }

  @media (min-width: 1400px) {
    margin-top: 0.5rem;
  }

  @media (min-width: 1600px) {
    margin-top: 1rem;
  }
`

const Date = styled.h3`
  padding: 0.5rem 1rem 0rem;
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-transform: uppercase;
  color: #717171;

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.mdsm};
  }
`

const Tech = styled.div`
  display: flex;
  padding: 0.25rem 1rem 1rem;
  font-size: 1.125rem;
  line-height: 140%;

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.md};
    width: 90%;
  }

  @media (min-width: 960px) {
    width: 75%;
  }
`

const Role = styled(Tech)`
  padding: 0.75rem 1rem 0rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.mdsm};
  }
`

const Category = styled(Role)`
  padding-bottom: 0.5rem;
  color: #717171;

  @media (min-width: 768px) {
    margin-top: auto;
    padding-bottom: 0;
  }
`

const ImageWrapper = styled.div`
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  overflow: hidden;
  display: flex;

  @media (min-width: 768px) {
    width: 50%;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    align-items: center;
    display: block;
  }

  @media (min-width: 1200px) {
    width: 40%;
  }
`

const StyledLink = styled(Link)`
  margin-bottom: 1rem;
`

export default Card
