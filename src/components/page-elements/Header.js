import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

export default function Header({ isVisible, setIsVisible }) {
  return (
    <Nav>
      <div className='logo'>
        <Link to='/' id='logo'>
          JZ
        </Link>
      </div>
      <div className='navigation'>
        {/* <Link to='/'>About</Link>
        <Link to='/work'>Work</Link>
        <Link to='/contact'>Contact</Link> */}
        <button onClick={() => setIsVisible(!isVisible)}>Menu</button>
      </div>
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 5rem;
  width: 100%;
  background-color: #000;
  padding: 0 1rem;
  color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);

  #logo {
    text-decoration: none;
    font-size: 1.8rem;
    font-family: ${({ theme }) => theme.font.slab};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primary};

    &::visited,
    &::active,
    &::link {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  .navigation {
    display: flex;
    justify-content: space-between;
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.font.slab};

    button {
      background: ${({ theme }) => theme.colors.primary};
      border: none;
      font-family: ${({ theme }) => theme.font.slab};
      font-size: ${({ theme }) => theme.fontSize.base};
      padding: 0.5rem 0.5rem;
      outline: none;
      cursor: pointer;
    }

    a {
      text-decoration: none;
      cursor: pointer;

      &:active {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`
