import React from 'react'
import { GlobalStyle } from './src/theme/global-style'
import { wrapRootElement as wrap } from './root-wrapper'

export const wrapRootElement = wrap

export const wrapPageElement = ({ element }) => (
  <>
    <GlobalStyle />
    {element}
  </>
)
