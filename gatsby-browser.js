import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { wrapRootElement as wrap } from './root-wrapper'

export const wrapPageElement = ({ element }) => (
  <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
)

export const wrapRootElement = wrap
