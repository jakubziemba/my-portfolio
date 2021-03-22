import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const theme = {
  font: {
    slab: 'BN Naples',
    sans: '"Poppins", sans-serif',
    serif: '"Rokkit", serif',
  },
  fontSize: {
    xs: '0.5rem',
    sm: '0.75rem',
    base: '1rem',
    mdsm: '1.25rem',
    md: '1.5rem',
    lg: '2rem',
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
    primary: '#F3EBD6',
    secondary: '#000000',
  },
}

export const GlobalStyle = createGlobalStyle`
  ${reset}


  *, *:before, *:after {
    box-sizing: border-box;
  }

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: ${({ theme }) => theme.font.sans};
    font-size: ${({ theme }) => theme.fontSize.base};
    font-weight: 400;
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.txt};
    /* min-height: 100vh; */
  }
  
  body {
    background: ${({ theme }) => theme.colors.primary};
    /* min-height: 100vh; */
    position: relative;
  }
`
