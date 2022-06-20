import React from 'react'
import './Dump.scss';

const Dump = () =>{
  
  return (
    <div className='dump-page-container'>
      <span className="tags top-tags">&lt;/html&gt; <br /><span className='top-body'>&lt;body&gt;</span></span>
      <div className="dump-page-section">
        <h1>This Page is <br /> Under Maintenance</h1>
      </div>
      <span className="tags bottom-tags">&lt;body&gt;<br /><span className='bottom-html'>&lt;/html&gt;</span></span>
    </div>
  )
  
}

export default Dump
