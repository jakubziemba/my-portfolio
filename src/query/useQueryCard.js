import { graphql, useStaticQuery } from 'gatsby'

const useQueryCard = () => {
  const data = useStaticQuery(
    graphql`
      query MyQuery {
        allFile(filter: { extension: { regex: "/(jpg)|(jpeg)|(png)/" } }) {
          edges {
            node {
              id
              name
              childImageSharp {
                gatsbyImageData(quality: 90, placeholder: BLURRED)
              }
            }
          }
        }
      }
    `
  )

  return data
}

export default useQueryCard
