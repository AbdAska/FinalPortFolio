import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Home.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowDownLong} from '@fortawesome/free-solid-svg-icons'
import {
  faNodeJs,
  faCss3,
  faGithub,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'

import { AnimationOnScroll } from 'react-animation-on-scroll';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [projectdata, setprojectdata] = useState([])
  // const [isloading, setisloading] = useState(true)

  useEffect(() => {
    return () => setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  const fetchprojectsApi = async (req, res) => {
    await fetch('http://localhost:1337/api/projects', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res)=> res.json()).then((resp)=> {
      setprojectdata(resp.projectData)
      // setisloading(false)
    })
  }
  useEffect(() => {
    fetchprojectsApi()
  }, [])

//   if (isloading) {
//     return <div style={{fontSize: '10rem', textAlign: 'center', marginLeft: '20rem'}}>Loading the data...</div>
//   }
  return (
    <div className="page-container">
      <span className="tags top-tags">&lt;/html&gt; <br /><span className='top-body'>&lt;body&gt;</span></span>
      <div className="Sections">
        <section className="Home-Section">
          <div className="home-text-zone">
            <span className='h1tag-top'>&lt;/h1&gt;</span>
            <h1>
              <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => { setTimeout((e) => {
                  document.getElementById('hello').classList.remove('text-my')
                }, 1000); }} className={letterClass} id='hello'>H</span>
                <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                  setTimeout(() => {
                    document.getElementById('hello1').classList.remove('text-my')
                  }, 1000);
                }} className={`${letterClass} _12`} id='hello1'>i,</span>
                <br />
                <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my')}} onMouseLeave={(e) => { setTimeout(() => {
                  document.getElementById('hello2').classList.remove('text-my')
                }, 1000);
                }} className={`${letterClass} _13`} id='hello2'>I</span>
                <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my')}} onMouseLeave={(e) => { setTimeout(() => {
                  document.getElementById('hello3').classList.remove('text-my')
                }, 1000);
                }} className={`${letterClass} _14`} id='hello3'>’m&nbsp;</span>
                <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my')}} onMouseLeave={(e) => { setTimeout(() => {
                    document.getElementById('hello11111').classList.remove('text-my')
                  }, 1000);
                }} className={`${letterClass} _15`} id='hello11111'>A</span>
                <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                  setTimeout(() => {
                    document.getElementById('hello6').classList.remove('text-my')
                  }, 1000);
                }} className={`${letterClass} _16`} id='hello6'>s</span>
                <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                  setTimeout(() => {
                    document.getElementById('hello7').classList.remove('text-my')
                  }, 1000);
                }} className={`${letterClass} _17`} id='hello7'>k</span>
                <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                  setTimeout(() => {
                    document.getElementById('hello8').classList.remove('text-my')
                  }, 1000);
                }} className={`${letterClass} _18`} id='hello8'>a</span>
                
                <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                  setTimeout(() => {
                    document.getElementById('heo8').classList.remove('text-my')
                  }, 1000);
                }} className={`${letterClass} _18`} id='heo8'>r</span>
                
                <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                  setTimeout(() => {
                    document.getElementById('heo9').classList.remove('text-my')
                  }, 1000);
                }} className={`${letterClass} _18`} id='heo9'>i</span>
                <br />
                <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                  setTimeout(() => {
                    document.getElementById('hello9').classList.remove('text-my')
                  }, 1000);
                }} className={`${letterClass} _19`} id='hello9'>w</span>
                <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                  setTimeout(() => {
                    document.getElementById('hello10').classList.remove('text-my')
                  }, 1000);
                }} className={`${letterClass} _20`} id='hello10'>e</span>
                <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                  setTimeout(() => {
                    document.getElementById('hello11').classList.remove('text-my')
                  }, 1000);
                }} className={`${letterClass} _21`} id='hello11'>b</span>
                <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                  setTimeout(() => {
                    document.getElementById('hello12').classList.remove('text-my')
                  }, 1000);
                }} className={`${letterClass} _22`} id='hello12'>&nbsp;d</span>
                <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                  setTimeout(() => {
                    document.getElementById('hello13').classList.remove('text-my')
                  }, 1000);
                }} className={`${letterClass} _23`} id='hello13'>e</span>
                <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                  setTimeout(() => {
                    document.getElementById('hello99').classList.remove('text-my')
                  }, 1000);
                }} className={`${letterClass} _24`} id='hello99'>v</span>
                <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                  setTimeout(() => {
                    document.getElementById('hello14').classList.remove('text-my')
                  }, 1000);
                }} className={`${letterClass} _25`} id='hello14'>e</span>
                <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                  setTimeout(() => {
                    document.getElementById('hello15').classList.remove('text-my')
                  }, 1000);
                }} className={`${letterClass} _26`} id='hello15'>l</span>
                <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                  setTimeout(() => {
                    document.getElementById('hello16').classList.remove('text-my')
                  }, 1000);
                }} className={`${letterClass} _27`} id='hello16'>o</span>
                <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                  setTimeout(() => {
                    document.getElementById('hello17').classList.remove('text-my')
                  }, 1000);
                }} className={`${letterClass} _28`} id='hello17'>p</span>
                <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                  setTimeout(() => {
                    document.getElementById('hello18').classList.remove('text-my')
                  }, 1000);
                }} className={`${letterClass} _29`} id='hello18'>e</span>
                <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                  setTimeout(() => {
                    document.getElementById('hello19').classList.remove('text-my')
                  }, 1000);
                }} className={`${letterClass} _30`} id='hello19'>r</span>
                <span className='h1tag-last'>&lt;/h1&gt;</span>
            </h1>
            <span className='ptag-top'>&lt;p&gt;</span>
            <p className="gray-text">Front End Developer / JavaScript Expert / MERN Stack Developer</p>
            <span className='ptag-last'>&lt;/p&gt;</span>
            <Link className='contact-button' to='/Contact'>Contact me!</Link>
          </div>
          <div className="scroll-down">
            <span className='animate-scroll'>scroll down</span>
            <FontAwesomeIcon icon={faArrowDownLong} />
          </div>
          <div className="scroll-down scroll-down-left">
            <span className='animate-scroll'>scroll down</span>
            <FontAwesomeIcon icon={faArrowDownLong} />
          </div>
        </section>
        <section className="Work-Section">
          <div className="fake-big">Work</div>
          <div className="work-heading">
            <div className="work-heading-left">
              <span className='h2tag-work'>&lt;/h2&gt;</span>
              <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInRight">
                <h2>
                    <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                      setTimeout(() => {
                        document.getElementById('hello20').classList.remove('text-my')
                      }, 1000);
                    }} className='text-animate-hover' id='hello20'>M</span>
                    <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                      setTimeout(() => {
                        document.getElementById('hello21').classList.remove('text-my')
                      }, 1000);
                    }} className='text-animate-hover' id='hello21'>y</span>
                    <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                      setTimeout(() => {
                        document.getElementById('hello22').classList.remove('text-my')
                      }, 1000);
                    }} className='text-animate-hover' id='hello22'>&nbsp;</span>
                    <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                      setTimeout(() => {
                        document.getElementById('hello23').classList.remove('text-my')
                      }, 1000);
                    }} className='text-animate-hover' id='hello23'>P</span>
                    <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                      setTimeout(() => {
                        document.getElementById('hello24').classList.remove('text-my')
                      }, 1000);
                    }} className='text-animate-hover' id='hello24'>o</span>
                    <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                      setTimeout(() => {
                        document.getElementById('hello25').classList.remove('text-my')
                      }, 1000);
                    }} className='text-animate-hover' id='hello25'>r</span>
                    <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                      setTimeout(() => {
                        document.getElementById('hello26').classList.remove('text-my')
                      }, 1000);
                    }} className='text-animate-hover' id='hello26'>t</span>
                    <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                      setTimeout(() => {
                        document.getElementById('hello27').classList.remove('text-my')
                      }, 1000);
                    }} className='text-animate-hover' id='hello27'>f</span>
                    <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                      setTimeout(() => {
                        document.getElementById('hello28').classList.remove('text-my')
                      }, 1000);
                    }} className='text-animate-hover' id='hello28'>o</span>
                    <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                      setTimeout(() => {
                        document.getElementById('hello29').classList.remove('text-my')
                      }, 1000);
                    }} className='text-animate-hover' id='hello29'>l</span>
                    <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                      setTimeout(() => {
                        document.getElementById('hello30').classList.remove('text-my')
                      }, 1000);
                    }} className='text-animate-hover' id='hello30'>i</span>
                    <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                      setTimeout(() => {
                        document.getElementById('hello31').classList.remove('text-my')
                      }, 1000);
                    }} className='text-animate-hover' id='hello31'>o</span>
                </h2>
              </AnimationOnScroll>
              <span className='h2tag-work-bottom'>&lt;/h2&gt;</span>
              <span className='ptag-work'>&lt;p&gt;</span>
              <AnimationOnScroll animateOnce={true} animateIn="animate__zoomInDown animate__slow">
                <p> A small gallery of recent projects chosen by me. I've done them all together with amazing people from companies around the globe. 
                  <br />
                  Interested to see some more?  Visit&nbsp;
                  <Link to='/Projects'>my work</Link>
                  &nbsp;page.
                </p>
              </AnimationOnScroll>
              <span className='ptag-work'>&lt;/p&gt;</span>
            </div>
            <div className="work-heading-right">
              <Link className='work-button' to='/Projects'>See more!</Link>
            </div>
          </div>
          <span className='sectiontag-work'>&lt;section&gt;</span>
          <div className="work-images">
            {projectdata.length === 0 ? <h1>No Projects</h1> : 
              projectdata.map((item)=> {
                const {_id, url, imgLink} = item
                return (
                  <div className="each-work-img" key={_id}>
                    <img className='image' src={imgLink} alt="ImgLink" />
                    <div className="middle">
                      <a href={url} rel="noreferrer" target="_blank">
                        <div className="text">View Project</div>
                      </a>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <span className='sectiontag-work'>&lt;section/&gt;</span>
        </section>
        <section className="About-Section">
          <div className="about-left">
            <span className='h2tag-about'>&lt;/h2&gt;</span>
            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInDown animate__slow">
              <h2>
                  <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                    setTimeout(() => {
                      document.getElementById('hello32').classList.remove('text-my')
                    }, 1000);
                  }} className='text-animate-hover' id='hello32'>M</span>
                  <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                    setTimeout(() => {
                      document.getElementById('hello33').classList.remove('text-my')
                    }, 1000);
                  }} className='text-animate-hover' id='hello33'>e,</span>
                  <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                    setTimeout(() => {
                      document.getElementById('hello33').classList.remove('text-my')
                    }, 1000);
                  }} className='text-animate-hover' id='hello33'>&nbsp;</span>
                  <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                    setTimeout(() => {
                      document.getElementById('hello34').classList.remove('text-my')
                    }, 1000);
                  }} className='text-animate-hover' id='hello34'>M</span>
                  <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                    setTimeout(() => {
                      document.getElementById('hello35').classList.remove('text-my')
                    }, 1000);
                  }} className='text-animate-hover' id='hello35'>y</span>
                  <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                    setTimeout(() => {
                      document.getElementById('hello36').classList.remove('text-my')
                    }, 1000);
                  }} className='text-animate-hover' id='hello36'>s</span>
                  <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                    setTimeout(() => {
                      document.getElementById('hello37').classList.remove('text-my')
                    }, 1000);
                  }} className='text-animate-hover' id='hello37'>e</span>
                  <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                    setTimeout(() => {
                      document.getElementById('hello38').classList.remove('text-my')
                    }, 1000);
                  }} className='text-animate-hover' id='hello38'>l</span>
                  <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                    setTimeout(() => {
                      document.getElementById('hello39').classList.remove('text-my')
                    }, 1000);
                  }} className='text-animate-hover' id='hello39'>f</span>
                  <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                    setTimeout(() => {
                      document.getElementById('hello40').classList.remove('text-my')
                    }, 1000);
                  }} className='text-animate-hover' id='hello40'>&nbsp;</span>
                  <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                    setTimeout(() => {
                      document.getElementById('hello41').classList.remove('text-my')
                    }, 1000);
                  }} className='text-animate-hover' id='hello41'>&</span>
                  <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                    setTimeout(() => {
                      document.getElementById('hello44').classList.remove('text-my')
                    }, 1000);
                  }} className='text-animate-hover' id='hello44'>&nbsp;</span>
                  <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                    setTimeout(() => {
                      document.getElementById('hello45').classList.remove('text-my')
                    }, 1000);
                  }} className='text-animate-hover' id='hello45'>I</span>
              </h2>
            </AnimationOnScroll>
            <span className='h2tag-about-bottom'>&lt;/h2&gt;</span>
            <span className='ptag-about'>&lt;p&gt;</span>
            <AnimationOnScroll animateOnce={true} animateIn="animate__lightSpeedInLeft animate__slow">
            <p>Since the first time i got my first PC I've been passionate about web.
              <br />
              <br />
              For a while I have been studying vast spectrum of web <Link to='/Skills'>technologies</Link> which let me gather a significant amount of various experience. Working for companies and individuals around the globe I met and learnt from amazing and ambitious people.
              <br />
              <br />
              I currently work remotely being open for new opportunities.
            </p>
            </AnimationOnScroll>
            <span className='ptag-about'>&lt;/p&gt;</span>
          </div>
          <div className="about-right">
            <cube className="cube-container">
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
            </cube>
          </div>
          <div className="scroll-down-about scroll-down-right-about">
            <span className='animate-scroll'>scroll down</span>
            <FontAwesomeIcon icon={faArrowDownLong} />
          </div>
          <div className="scroll-down-about scroll-down-left-about">
            <span className='animate-scroll'>scroll down</span>
            <FontAwesomeIcon icon={faArrowDownLong} />
          </div>
        </section>
        <section className="Blog-Section">
          <div className="fake-big-blog">Blog</div>
          <div className="blog">
            <article className='post-article'>
              <div className="post-content">
                <div className="filter-blog-tag">
                   SQL & Databases
                </div>
                <div className="blog-post-title">
                  <h5><Link to='/Dump'> MongoDB Database Queries </Link></h5>
                </div>
                <div className="blog-post-content">
                   This is an excerpt from the Mondial database that is widely...
                </div>
              </div>
            </article>
            <article className='post-article'>
              <div className="post-content">
                <div className="filter-blog-tag">
                   SQL & Databases
                </div>
                <div className="blog-post-title">
                  <h5><Link to='/Dump'> Algorithms and Data Structures (Part 1) </Link></h5>
                </div>
                <div className="blog-post-content">
                   This is an excerpt from the Mondial database that is widely...
                </div>
              </div>
            </article>
            <article className='post-article'>
              <div className="post-content">
                <div className="filter-blog-tag">
                   SQL & Databases
                </div>
                <div className="blog-post-title">
                  <h5><Link to='/Dump'> Algorithms and Data Structures (Part 2) </Link></h5>
                </div>
                <div className="blog-post-content">
                   This is an excerpt from the Mondial database that is widely...
                </div>
              </div>
            </article>
            <article className='post-article'>
              <div className="post-content">
                <div className="filter-blog-tag">
                   SQL & Databases
                </div>
                <div className="blog-post-title">
                  <h5><Link to='/Dump'> Advanced Design Techniques </Link></h5>
                </div>
                <div className="blog-post-content">
                   This is an excerpt from the Mondial database that is widely...
                </div>
              </div>
            </article>
            <article className='post-article'>
              <div className="post-content">
                <div className="filter-blog-tag">
                   SQL & Databases
                </div>
                <div className="blog-post-title">
                  <h5><Link to='/Dump'> React JS Questions & Answers 2022 </Link></h5>
                </div>
                <div className="blog-post-content">
                   This is an excerpt from the Mondial database that is widely...
                </div>
              </div>
            </article>
            <article className='post-article'>
              <div className="post-content">
                <div className="filter-blog-tag">
                   SQL & Databases
                </div>
                <div className="blog-post-title">
                  <h5><Link to='/Dump'> Ultimate Guide to CSS FlexBox Layout </Link></h5>
                </div>
                <div className="blog-post-content">
                   This is an excerpt from the Mondial database that is widely...
                </div>
              </div>
            </article>
          </div>
          <footer>
            <Link to='/Dump' className='blog-footer'> See all articles.... </Link>
          </footer>
        </section>
        <section className="Contact-Section">
          <div className="contact-left">
            <span className='h2tag-contact'>&lt;h2&gt;</span>
            <AnimationOnScroll animateOnce={true} animateIn="animate__animated animate__rubberBand animate__slow">
            <h2>
                <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                  setTimeout(() => {
                    document.getElementById('hello46').classList.remove('text-my')
                  }, 1000);
                }} className='text-animate-hover' id='hello46'>C</span>
                <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                  setTimeout(() => {
                    document.getElementById('hello47').classList.remove('text-my')
                  }, 1000);
                }} className='text-animate-hover' id='hello47'>o</span>
                <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                  setTimeout(() => {
                    document.getElementById('hello48').classList.remove('text-my')
                  }, 1000);
                }} className='text-animate-hover' id='hello48'>n</span>
                <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                  setTimeout(() => {
                    document.getElementById('hello49').classList.remove('text-my')
                  }, 1000);
                }} className='text-animate-hover' id='hello49'>t</span>
                <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                  setTimeout(() => {
                    document.getElementById('hello50').classList.remove('text-my')
                  }, 1000);
                }} className='text-animate-hover' id='hello50'>a</span>
                <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                  setTimeout(() => {
                    document.getElementById('hello51').classList.remove('text-my')
                  }, 1000);
                }} className='text-animate-hover' id='hello51'>c</span>
                <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                  setTimeout(() => {
                    document.getElementById('hello52').classList.remove('text-my')
                  }, 1000);
                }} className='text-animate-hover' id='hello52'>t</span>
                <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                  setTimeout(() => {
                    document.getElementById('hello53').classList.remove('text-my')
                  }, 1000);
                }} className='text-animate-hover' id='hello53'>&nbsp;</span>
                <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                  setTimeout(() => {
                    document.getElementById('hello54').classList.remove('text-my')
                  }, 1000);
                }} className='text-animate-hover' id='hello54'>m</span>
                <span onMouseEnter={(e) => { e.currentTarget.classList.add('text-my') }} onMouseLeave={(e) => {
                  setTimeout(() => {
                    document.getElementById('hello55').classList.remove('text-my')
                  }, 1000);
                }} className='text-animate-hover' id='hello55'>e</span>
            </h2>
            </AnimationOnScroll>
            <span className='h2tag-contact-bottom'>&lt;/h2&gt;</span>
            <span className='ptag-contact'>&lt;p&gt;</span>
            <p>I’m interested in freelance opportunities - especially ambitious or large projects. However, if you have other request or question, don’t hesitate to use the form.</p>
            <span style={{ marginBottom: '2rem' }} className='ptag-contact'>&lt;/p&gt;</span>
            <span className='formtag-contact'>&lt;form&gt;</span>
            <form className='form-contact' action="">
                <div className="name-email">
                  <div className="name-contact-form fromLeft">
                    <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp animate__slow">
                      <input placeholder='Name' id='name' type="text" />
                    </AnimationOnScroll>
                  </div>
                  <div className="email-contact-form" >
                    <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp animate__slow">
                      <input placeholder='Email' id='email' type="email" required/>
                    </AnimationOnScroll>
                  </div>
                </div>
                <div className="subject-contact-form">
                  <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp animate__slow" style={{ width: '100%'}}>
                    <input placeholder='Subject' id='subject' type="text" />
                  </AnimationOnScroll>
                </div>
                <div className="message-contact-form">
                  <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp animate__slow">
                    <textarea placeholder='Message' name="" id="" cols="100" rows="20" required></textarea>
                  </AnimationOnScroll>
                </div>
                <div style={{ alignSelf: 'flex-end'}}>
                  <button className='send-button'>Send Message!</button>
                </div>
            </form>
            <span className='formtag-contact'>&lt;/form&gt;</span>
          </div>
          <div className="contact-right"></div>
        </section>
      </div>
      <span className="tags bottom-tags">&lt;body&gt;<br /><span className='bottom-html'>&lt;/html&gt;</span></span>
    </div>
    
  )
}

export default Home
