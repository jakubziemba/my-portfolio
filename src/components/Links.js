import React from 'react'

import { LinksContainer, Link } from '../styled'

const Links = ({ pageURL, githubURL }) => {
  return (
    <LinksContainer>
      {pageURL && (
        <Link href={`${pageURL}`} target='_blank'>
          Link to website <span className='arrow'>&#8594;</span>
        </Link>
      )}
      {githubURL && (
        <Link href={`${githubURL}`} target='_blank'>
          Github <span className='arrow'>&#8594;</span>
        </Link>
      )}
    </LinksContainer>
  )
}

export default Links
