import React from 'react'
import { GlobalStyle } from './src/theme/global-style'

export const wrapPageElement = ({ element }) => (
  <>
    <GlobalStyle />
    {element}
  </>
)
