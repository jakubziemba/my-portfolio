import React from 'react'
import { Link } from 'gatsby'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
const Menu = ({ isVisible, setIsVisible }) => {
  const isMdScreen = useMediaQuery({ minWidth: 768 })

  return (
    <>
      {!isMdScreen && (
        <Wrapper isVisible={isVisible}>
          <div className='close'>
            <button onClick={() => setIsVisible(!isVisible)}>X</button>
          </div>
          <div className='menu'>
            <div className='title'>
              <h2>Menu</h2>
            </div>
            <div className='links'>
              <h1>
                <Link to='/' onClick={() => setIsVisible(!isVisible)}>
                  Home
                </Link>
              </h1>
              <h1>
                <AnchorLink
                  to='/#projects'
                  title='Projects'
                  stripHash
                  onAnchorLinkClick={() => setIsVisible(!isVisible)}
                >
                  Projects
                </AnchorLink>
              </h1>
              <h1>
                <Link to='/contact' onClick={() => setIsVisible(!isVisible)}>
                  Contact
                </Link>
              </h1>
            </div>
          </div>
        </Wrapper>
      )}
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.txt};
  font-family: ${({ theme }) => theme.font.slab};
  font-weight: ${({ theme }) => theme.fontWeight.md};
  transition: all 0.2s ease;
  height: 100vh;
  transform: ${({ isVisible }) =>
    isVisible ? `translateX(0%)` : `translateX(100%)`};
  width: 100%;
  z-index: 3;

  .close {
    display: flex;
    justify-content: flex-end;
    position: absolute;
    top: 2rem;
    right: 1rem;
    width: 100%;

    button {
      font-family: ${({ theme }) => theme.font.slab};
      font-size: ${({ theme }) => theme.fontSize.md};
      background-color: ${({ theme }) => theme.colors.bg};
      color: ${({ theme }) => theme.colors.txt};
      border: none;
      outline: none;
      cursor: pointer;
      padding: 0;
    }
  }

  .menu {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    height: 100%;
    /* padding-top: 5rem; */
    align-self: center;
    text-align: right;
    width: 100%;
    padding-right: 1rem;
    line-height: 4rem;

    .title {
      position: relative;
      padding-bottom: 2rem;

      &:after {
        content: '';
        position: absolute;
        height: 3px;
        width: 6.5rem;
        right: 0;
        bottom: 2.25rem;
        background: ${({ theme }) => theme.colors.bg};
      }
    }

    h1 {
      font-size: 3.5rem;
      margin-bottom: 1rem;
      position: relative;
    }

    h2 {
      font-size: ${({ theme }) => theme.fontSize.lg};
    }

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.txt};
    }
  }
`

export default Menu
