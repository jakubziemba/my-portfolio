import React from 'react'
import { Helmet } from 'react-helmet'

const MyHelmet = ({ title, link, children }) => {
  return (
    <Helmet>
      <meta charSet='utf-8' />
      <title>{title}</title>
      <link rel='canonical' href={link} />
      {children}
    </Helmet>
  )
}

export default MyHelmet
