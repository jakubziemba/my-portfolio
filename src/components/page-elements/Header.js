import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import StarSvg from '../../assets/star.inline.svg'

const Header = ({ isVisible, setIsVisible }) => {
  return (
    <Nav>
      <div className='logo'>
        <Link to='/' id='logo'>
          Jakub Ziemba
        </Link>
      </div>
      <Star onClick={() => setIsVisible(!isVisible)} />
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 4rem;
  background-color: ${({ theme }) => theme.colors.bg};
  padding: 0 0.75rem;
  color: ${({ theme }) => theme.colors.txt};

  .logo {
    margin-top: 0.5rem;
  }

  #logo {
    text-decoration: none;
    font-size: ${({ theme }) => theme.fontSize.mdsm};
    font-family: ${({ theme }) => theme.font.sans};
    cursor: pointer;
    color: ${({ theme }) => theme.colors.txt};

    &::visited,
    &::active,
    &::link {
      color: ${({ theme }) => theme.colors.txt};
    }
  }
`

const Star = styled(StarSvg)`
  position: fixed;
  top: 1rem;
  right: 0.75rem;
  width: 50px;
  height: 50px;
  z-index: 2;
  cursor: pointer;
`

export default Header
