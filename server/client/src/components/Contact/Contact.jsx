import React, {useState, useEffect} from 'react'
import './Contact.scss';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Contact = () => {
  const [letterClassabout, setLetterClassabout] = useState('text-animates');

  useEffect(() => {
    return () => setTimeout(() => {
      setLetterClassabout('text-animates-hover')
    }, 2500)
  }, [])
  return (
    <div className='contact-page-container'>
      <span className="tags top-tags">&lt;/html&gt; <br /><span className='top-body'>&lt;body&gt;</span></span>
      <div className="contact-page-section">
        <div className="contact-page-left">
          <span className='h2tag-contact'>&lt;h2&gt;</span>
          <h2>
            <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
              setTimeout(() => {
                document.getElementById('hello1a').classList.remove('text-my')
              }, 1000);
            }} className={`${letterClassabout} _11`} id='hello1a'>C</span>
            <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
              setTimeout(() => {
                document.getElementById('hello1b').classList.remove('text-my')
              }, 1000);
            }} className={`${letterClassabout} _12`} id='hello1b'>o</span>
            <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
              setTimeout(() => {
                document.getElementById('hello1c').classList.remove('text-my')
              }, 1000);
            }} className={`${letterClassabout} _13`} id='hello1c'>n</span>
            <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
              setTimeout(() => {
                document.getElementById('hello1d').classList.remove('text-my')
              }, 1000);
            }} className={`${letterClassabout} _14`} id='hello1d'>t</span>
            <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
              setTimeout(() => {
                document.getElementById('hello35a').classList.remove('text-my')
              }, 1000);
            }} className={`${letterClassabout} _15`} id='hello35a'>a</span>
            <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
              setTimeout(() => {
                document.getElementById('hello36a').classList.remove('text-my')
              }, 1000);
            }} className={`${letterClassabout} _16`} id='hello36a'>c</span>
            <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
              setTimeout(() => {
                document.getElementById('hello37a').classList.remove('text-my')
              }, 1000);
            }} className={`${letterClassabout} _17`} id='hello37a'>t</span>
            <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
              setTimeout(() => {
                document.getElementById('hello38a').classList.remove('text-my')
              }, 1000);
            }} className={`${letterClassabout} _18`} id='hello38a'>&nbsp;</span>
            <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
              setTimeout(() => {
                document.getElementById('hello39a').classList.remove('text-my')
              }, 1000);
            }} className={`${letterClassabout} _19`} id='hello39a'>m</span>
            <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
              setTimeout(() => {
                document.getElementById('hello40a').classList.remove('text-my')
              }, 1000);
            }} className={`${letterClassabout} _20`} id='hello40a'>e</span>
          </h2>
          <span className='h2tag-contact-bottom'>&lt;/h2&gt;</span>
          <span className='ptag-contact'>&lt;p&gt;</span>
          <p>I’m interested in freelance opportunities - especially ambitious or large projects. However, if you have other request or question, don’t hesitate to use the form.</p>
          <span style={{ marginBottom: '2rem' }} className='ptag-contact'>&lt;/p&gt;</span>
          <span className='formtag-contact'>&lt;form&gt;</span>
          <form className='form-contact' action="">
            <div className="name-email">
              <div className="name-contact-form fromLeft">
                <input placeholder='Name' id='name' type="text" />
              </div>
              <div className="email-contact-form" >
                <input placeholder='Email' id='email' type="email" required/>
              </div>
            </div>
            <div className="subject-contact-form">
              <input placeholder='Subject' id='subject' type="text" />
            </div>
            <div className="message-contact-form">
              <textarea placeholder='Message' name="" id="" cols="100" rows="20" required></textarea>
            </div>
            <div style={{ alignSelf: 'flex-end'}}>
              <button className='send-button'>Send Message!</button>
            </div>
          </form>
          <span className='formtag-contact'>&lt;/form&gt;</span>
        </div>
        <div className="contact-page-right"></div>
      </div>
      <span className="tags bottom-tags">&lt;body&gt;<br /><span className='bottom-html'>&lt;/html&gt;</span></span>
    </div>
  )
}

export default Contact