import React, {useState, useEffect} from 'react'
import './Skills.scss';
import { Link } from 'react-router-dom'

const Skills = () => {
  const [letterClassabout, setLetterClassabout] = useState('text-animates');

  useEffect(() => {
    return () => setTimeout(() => {
      setLetterClassabout('text-animates-hover')
    }, 2500)
  }, [])
  return (
    <div className='skill-page-container'>
      <span className="tags top-tags">&lt;/html&gt; <br /><span className='top-body'>&lt;body&gt;</span></span>
      <div className="skill-page-section">
        <div className="skill-page-left">
          <div className="skill-page-left-text">
            <span className='h2tag-about'>&lt;/h2&gt;</span>
            <h2>
              <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                setTimeout(() => {
                  document.getElementById('hello1a').classList.remove('text-my')
                }, 1000);
              }} className={`${letterClassabout} _1`} id='hello1a'>S</span>
              <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                setTimeout(() => {
                  document.getElementById('hello1b').classList.remove('text-my')
                }, 1000);
              }} className={`${letterClassabout} _2`} id='hello1b'>k</span>
              <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                setTimeout(() => {
                  document.getElementById('hello1c').classList.remove('text-my')
                }, 1000);
              }} className={`${letterClassabout} _3`} id='hello1c'>i</span>
              <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                setTimeout(() => {
                  document.getElementById('hello1d').classList.remove('text-my')
                }, 1000);
              }} className={`${letterClassabout} _4`} id='hello1d'>l</span>
              <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                setTimeout(() => {
                  document.getElementById('hello35a').classList.remove('text-my')
                }, 1000);
              }} className={`${letterClassabout} _5`} id='hello35a'>l</span>
              <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                setTimeout(() => {
                  document.getElementById('hello36a').classList.remove('text-my')
                }, 1000);
              }} className={`${letterClassabout} _6`} id='hello36a'>s</span>
              <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                setTimeout(() => {
                  document.getElementById('hello37a').classList.remove('text-my')
                }, 1000);
              }} className={`${letterClassabout} _7`} id='hello37a'>&nbsp;</span>
              <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                setTimeout(() => {
                  document.getElementById('hello38a').classList.remove('text-my')
                }, 1000);
              }} className={`${letterClassabout} _8`} id='hello38a'>&</span>
              <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                setTimeout(() => {
                  document.getElementById('hello39a').classList.remove('text-my')
                }, 1000);
              }} className={`${letterClassabout} _9`} id='hello39a'>&nbsp;</span>
              <br />
              <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                setTimeout(() => {
                  document.getElementById('hello40a').classList.remove('text-my')
                }, 1000);
              }} className={`${letterClassabout} _10`} id='hello40a'>E</span>
              <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                setTimeout(() => {
                  document.getElementById('hello41a').classList.remove('text-my')
                }, 1000);
              }} className={`${letterClassabout} _11`} id='hello41a'>x</span>
              <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                setTimeout(() => {
                  document.getElementById('hello42a').classList.remove('text-my')
                }, 1000);
              }} className={`${letterClassabout} _12`} id='hello42a'>p</span>
              <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                setTimeout(() => {
                  document.getElementById('hello43a').classList.remove('text-my')
                }, 1000);
              }} className={`${letterClassabout} _13`} id='hello43a'>e</span>
              <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                setTimeout(() => {
                  document.getElementById('hello44a').classList.remove('text-my')
                }, 1000);
              }} className={`${letterClassabout} _14`} id='hello44a'>r</span>
              <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                setTimeout(() => {
                  document.getElementById('hello45a').classList.remove('text-my')
                }, 1000);
              }} className={`${letterClassabout} _15`} id='hello45a'>i</span>
              <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                setTimeout(() => {
                  document.getElementById('hello46a').classList.remove('text-my')
                }, 1000);
              }} className={`${letterClassabout} _16`} id='hello46a'>e</span>
              <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                setTimeout(() => {
                  document.getElementById('hello47a').classList.remove('text-my')
                }, 1000);
              }} className={`${letterClassabout} _17`} id='hello47a'>n</span>
              <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                setTimeout(() => {
                  document.getElementById('hello48a').classList.remove('text-my')
                }, 1000);
              }} className={`${letterClassabout} _18`} id='hello48a'>c</span>
              <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                setTimeout(() => {
                  document.getElementById('hello49a').classList.remove('text-my')
                }, 1000);
              }} className={`${letterClassabout} _19`} id='hello49a'>e</span>
            </h2>
            <span className='h2tag-about-bottom'>&lt;/h2&gt;</span>
            <span className='ptag-about'>&lt;p&gt;</span>
            <p>Since beginning my journey as a freelance developer, I’ve done remote work for agencies, consulted for startups, and collaborated with talented people to create web products for both business and consumer use.
              <br />
              <br />
              I create successful responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development, HTML, CSS, JS, building small and medium web apps, custom plugins, features, animations, and coding interactive layouts.
              <br />
              <br />
              I also have full-stack developer experience with popular open-source CMS like (WordPress, wix, strapi, Node.js and others) .
              <br />
              <br />
              Visit my <Link to='https://www.linkedin.com/in/asadleghari'>LinkedIn</Link> profile for more details or just <Link to='/Contact'>contact</Link> me.
            </p>
            <span className='ptag-about'>&lt;/p&gt;</span>
          </div>
        </div>
        <div className="skill-page-right">
            <div className="spr-card-container">
              <header>Fullstack developer</header>
              <section>
                <p>TCG - Fish</p>
                <p style={{fontSize: '1.25rem'}}>2021 - 2022</p>
              </section>
              <footer>Worked as a fullstack web developer for a startup.</footer>
            </div>
            <div className="spr-card-container">
              <header>Frontend developer</header>
              <section>
                <p>Freelancer</p>
                <p style={{fontSize: '1.25rem'}}>2021 - Onwards</p>
              </section>
              <footer>Worked as a Freelancer for multiple clients around the world.</footer>
            </div>
        </div>
      </div>
      <span className="tags bottom-tags">&lt;body&gt;<br /><span className='bottom-html'>&lt;/html&gt;</span></span>
    </div>
  )
}

export default Skills