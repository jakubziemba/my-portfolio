import React from 'react'
import styled from 'styled-components'

export default function Menu({ isVisible, setIsVisible }) {
  console.log(isVisible)
  return (
    <Wrapper isVisible={isVisible}>
      <div className='close'>
        <button onClick={() => setIsVisible(!isVisible)}>X</button>
      </div>
      <div className='menu'>
        <h1>Menu</h1>
        <h2>About</h2>
        <h2>Work</h2>
        <h2>Contact</h2>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.font.slab};
  font-weight: ${({ theme }) => theme.fontWeight.md};
  transition: all 0.2s ease;
  height: 100vh;
  transform: ${({ isVisible }) =>
    isVisible ? `translateX(0%)` : `translateX(100%)`};
  width: 100%;
  z-index: 1;
  /* opacity: 0; */
  overflow-y: scroll;
  /* padding-bottom: 3rem; */

  .close {
    display: flex;
    justify-content: flex-end;
    /* align-self: flex-start; */
    /* padding-right: 2rem; */
    padding: 2rem 2rem 0rem 2rem;
    width: 100%;
    font-size: ${({ theme }) => theme.fontSize.lg};

    button {
      /* background: none; */
      font-family: ${({ theme }) => theme.font.slab};
      font-size: ${({ theme }) => theme.fontSize.lg};
      color: ${({ theme }) => theme.colors.primary};
      background-color: ${({ theme }) => theme.colors.secondary};
      border: none;
      outline: none;
      cursor: pointer;
    }
  }

  .menu {
    padding-top: 5rem;
    align-self: center;
    text-align: right;
    width: 100%;
    padding-right: 2rem;
    line-height: 4rem;

    h1 {
      font-size: 4rem;
      margin-bottom: 2rem;
    }

    h2 {
      font-size: ${({ theme }) => theme.fontSize.xl};
    }
  }
`
