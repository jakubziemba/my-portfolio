import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const theme = {
  font: {
    sans: 'Standard, sans-serif',
  },
  fontSize: {
    xs: '0.5rem',
    sm: '0.75rem',
    base: '1rem',
    mdsm: '1.25rem',
    md: '1.5rem',
    lg: '2rem',
    xllg: '2.5rem',
    xl: '3rem',
  },
  fontWeight: {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  },
  lineHeight: {
    xs: '80%',
    sm: '90%',
    base: '100%',
    md: '120%',
    lg: '130%',
    xl: '140%',
  },
  colors: {
    bg: '#030303',
    txt: '#FCFCFC',
  },
}

export const GlobalStyle = createGlobalStyle`
  ${reset}


  *, *:before, *:after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: "Standard", sans-serif;
    background: #030303;
    color: #FCFCFC;
  }
  
  body {
    background: #030303;
    height: 100vh;
    position: relative;
  }

  a {
    text-decoration: none;
    color: #FCFCFC;
  }
`
