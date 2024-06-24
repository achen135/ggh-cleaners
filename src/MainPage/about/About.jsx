import React from 'react'
import './About.css'

const About = () => {
  return (
    <>
    <div className='about-container'>

      <div className='about-title'>About GGH</div>

      <hr className='about-hr'/>

      <div className='about-description'>

        <div className='about-img-container'>
        <img className='about-img' src="./powerwash.jpg" alt="imagine this a tuff pic of us cleaning" />
        </div>

        <div className='about-bio-container'>
        <div className='about-bio'>We just a group of rad tad good guys hustling, tryna make it big type beat. we be cleaning stuff, all kinds of stuff. Hollar at us!</div>
        </div>

      </div>

    </div>
    </>
  )
}

export default About