import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export default function AboutSection() {
  return (
    <div>
      <div className='description'>
        <div className='til'>
          <div className='hide'>
            <h2>We work to make</h2>
          </div>
          <div className='hide'>
            <h2>your dreams</h2>
          </div>
          <div className='hide'>
            <h2>come true</h2>
          </div>
        </div>
        <p>
          Contact us for any photography or videography ideas that you have.
        </p>
        <button>Contact Us</button>
      </div>
      <div className='image'>
        <StaticImage
          alt='A photo of me'
          src='../images/me.JPG'
          placeholder='blurred'
        />
      </div>
    </div>
  )
}
