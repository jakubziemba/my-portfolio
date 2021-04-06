import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

import useQueryCard from 'query/useQueryCard'
import projects from '../data'

const Card = () => {
  const data = useQueryCard()
  const photos = data.allFile.edges

  return (
    <>
      {projects.map(project => (
        <Link key={project.path} to={`/projects/${project.path}`}>
          <CardWrapper key={project.path}>
            <Title>{project.title}</Title>
            <Date>{project.date}</Date>
            <Role>{project.role}</Role>
            <Tech>{project.tech}</Tech>
            {photos.map(photo => {
              if (photo.node.name === `${project.path}-main`) {
                return (
                  <GatsbyImage
                    key={photo.node.name}
                    image={photo.node.childImageSharp.gatsbyImageData}
                    alt={photo.node.name}
                    style={{
                      borderBottomLeftRadius: `10px`,
                      borderBottomRightRadius: `10px`,
                      height: `170px`,
                    }}
                    objectPosition='50% 0%'
                  />
                )
              }
              return null
            })}
          </CardWrapper>
        </Link>
      ))}
    </>
  )
}

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(8px);
  border-radius: 10px;
  margin-bottom: 1.5rem;
  z-index: 2;
`

const Title = styled.div`
  display: flex;
  max-width: 70%;
  line-height: 122%;
  padding: 1.125rem 1rem 0rem 1rem;
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-family: ${({ theme }) => theme.font.sans};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`

const Date = styled.h3`
  padding: 0.5rem 1rem 0rem 1rem;
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-transform: uppercase;
  color: #717171;
`

const Tech = styled.div`
  display: flex;
  padding: 0.25rem 1rem 1rem;
  font-size: 1.125rem;
  line-height: 140%;
`

const Role = styled(Tech)`
  padding: 0.75rem 1rem 0rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`

export default Card
