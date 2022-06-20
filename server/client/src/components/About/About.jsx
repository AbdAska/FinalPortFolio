import React, {useState, useEffect} from 'react'
import './About.scss';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faNodeJs,
  faCss3,
  faGithub,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'

const About = () => {
  const [letterClassabout, setLetterClassabout] = useState('text-animates');

  useEffect(() => {
    setTimeout(() => {
      setLetterClassabout('text-animates-hover')
    }, 2000)
  }, [])
  return (
    <div className='about-page-container'>
      <span className="tags top-tags">&lt;/html&gt; <br /><span className='top-body'>&lt;body&gt;</span></span>
      <div className="about-page-section">
        <div className="about-page-left">
          <div className="about-page-left-text">
            <span className='h2tag-about'>&lt;/h2&gt;</span>
            <h2>
              <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                setTimeout(() => {
                  document.getElementById('hello1a').classList.remove('text-my')
                }, 1000);
              }} className={`${letterClassabout} _1`} id='hello1a'>M</span>
              <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                setTimeout(() => {
                  document.getElementById('hello1b').classList.remove('text-my')
                }, 1000);
              }} className={`${letterClassabout} _2`} id='hello1b'>y,</span>
              <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                setTimeout(() => {
                  document.getElementById('hello1c').classList.remove('text-my')
                }, 1000);
              }} className={`${letterClassabout} _3`} id='hello1c'>&nbsp;</span>
              <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                setTimeout(() => {
                  document.getElementById('hello1d').classList.remove('text-my')
                }, 1000);
              }} className={`${letterClassabout} _4`} id='hello1d'>M</span>
              <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                setTimeout(() => {
                  document.getElementById('hello35a').classList.remove('text-my')
                }, 1000);
              }} className={`${letterClassabout} _5`} id='hello35a'>y</span>
              <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                setTimeout(() => {
                  document.getElementById('hello36a').classList.remove('text-my')
                }, 1000);
              }} className={`${letterClassabout} _6`} id='hello36a'>s</span>
              <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                setTimeout(() => {
                  document.getElementById('hello37a').classList.remove('text-my')
                }, 1000);
              }} className={`${letterClassabout} _7`} id='hello37a'>e</span>
              <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                setTimeout(() => {
                  document.getElementById('hello38a').classList.remove('text-my')
                }, 1000);
              }} className={`${letterClassabout} _8`} id='hello38a'>l</span>
              <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                setTimeout(() => {
                  document.getElementById('hello39a').classList.remove('text-my')
                }, 1000);
              }} className={`${letterClassabout} _9`} id='hello39a'>f</span>
              <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                setTimeout(() => {
                  document.getElementById('hello40a').classList.remove('text-my')
                }, 1000);
              }} className={`${letterClassabout} _10`} id='hello40a'>&nbsp;</span>
              <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                setTimeout(() => {
                  document.getElementById('hello41a').classList.remove('text-my')
                }, 1000);
              }} className={`${letterClassabout} _11`} id='hello41a'>&</span>
              <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                setTimeout(() => {
                  document.getElementById('hello44a').classList.remove('text-my')
                }, 1000);
              }} className={`${letterClassabout} _14`} id='hello44a'>&nbsp;</span>
              <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                setTimeout(() => {
                  document.getElementById('hello45a').classList.remove('text-my')
                }, 1000);
              }} className={`${letterClassabout} _15`} id='hello45a'>I</span>
            </h2>
            <span className='h2tag-about-bottom'>&lt;/h2&gt;</span>
            <span className='ptag-about'>&lt;p&gt;</span>
            <p>I’m a Front-End Developer located in Pakistan. I have a serious passion for UI effects, animations and creating intuitive, dynamic user experiences.
              <br />
              <br />
              Well-organised person, problem solver, independent employee with high attention to detail. Fan of Anime, Gamming, TV series and English literature. A family person.
              <br />
              <br />
              Interested in the entire frontend spectrum and working on ambitious projects with positive people.
            </p>
            <Link style={{marginBottom: '2.25rem'}} to='/Contact'>Let's make something special.</Link>
            <span className='ptag-about'>&lt;/p&gt;</span>
          </div>
        </div>
        <div className="about-page-right">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNodeJs} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGithub} color="white" />
            </div>
          </div>
        </div>
      </div>
      <span className="tags bottom-tags">&lt;body&gt;<br /><span className='bottom-html'>&lt;/html&gt;</span></span>
    </div>
  )
}

export default About
