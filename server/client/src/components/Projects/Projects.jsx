import React, {useState, useEffect} from 'react'
import './Projects.scss'

const Projects = () => {
  const [projectdata, setprojectdata] = useState([])
  const [isloading, setisloading] = useState(false)

  const fetchprojectsApi = async (req, res) => {
    await fetch('http://localhost:1337/api/projects', {
      method: 'get', 
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res)=> res.json()).then((resp)=> {
      setprojectdata(resp.projectData)
      setisloading(false)
    })
  }
  useEffect(() => {
    fetchprojectsApi()
  }, [])

  if (isloading) {
    return <div style={{fontSize: '10rem', textAlign: 'center', marginLeft: '20rem'}}>Loading the data...</div>
  }
  return (
    <div className='project-page-container'>
      <div className="project-page-section">
        <div className="project-images">
          {projectdata.length === 0 ? <h1>No Projects</h1> : 
              projectdata.map((item)=> {
                const {_id, url, imgLink} = item
                return (
                  <div className="each-project-img" key={_id}>
                    <img className='image-project' src={imgLink} alt="ImgLink" />
                    <div className="middle-project">
                      <a href={url} rel="noreferrer" target="_blank">
                        <div className="text-project">View Project</div>
                      </a>
                    </div>
                  </div>
                )
              })
            }
        </div>
      </div>
    </div>
  )
}

export default Projects