import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

import StarSvg from '../../assets/star.inline.svg'

const Header = ({ isVisible, setIsVisible }) => {
  const isMdScreen = useMediaQuery({ minWidth: 768 })
  return (
    <Nav>
      <div className='logoContainer'>
        <Link to='/' id='logo'>
          Jakub Ziemba
        </Link>
      </div>
      {!isMdScreen && <Star onClick={() => setIsVisible(!isVisible)} />}
      {isMdScreen && (
        <Menu>
          <AnchorLink to='/#projects' title='Projects' stripHash>
            Projects
          </AnchorLink>
          <Link to='/contact'>Contact</Link>
        </Menu>
      )}
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 4.5rem;
  background: transparent;
  padding: 0 0.75rem;
  color: ${({ theme }) => theme.colors.txt};
  position: sticky;
  top: 0;
  z-index: 1;
  mix-blend-mode: difference;
  isolation: isolate;

  @supports (backdrop-filter: blur(2px)) {
    backdrop-filter: blur(2px);
  }

  @supports not (backdrop-filter: blur(2px)) {
    background-color: transparent;
  }

  .logoContainer {
    margin-top: 0.5rem;
  }

  #logo {
    text-decoration: none;
    font-size: ${({ theme }) => theme.fontSize.mdsm};
    font-family: ${({ theme }) => theme.font.sans};
    cursor: pointer;
    color: ${({ theme }) => theme.colors.txt};
    mix-blend-mode: difference;

    &::visited,
    &::active,
    &::link {
      color: ${({ theme }) => theme.colors.txt};
    }
  }

  @media (min-width: 768px) {
    padding: 0 1.25rem;

    #logo {
      font-size: ${({ theme }) => theme.fontSize.md};
    }
  }
`

const Star = styled(StarSvg)`
  position: fixed;
  top: 0.75rem;
  right: 0.75rem;
  width: 50px;
  height: 50px;
  z-index: 1;
  cursor: pointer;
  mix-blend-mode: difference;
`

const Menu = styled.div`
  font-size: ${({ theme }) => theme.fontSize.md};
  display: flex;
  justify-content: space-between;
  width: 200px;
`

export default Header
