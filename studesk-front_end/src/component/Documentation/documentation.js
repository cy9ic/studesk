import React from 'react'
import "./doc.css"
import { Link } from 'react-router-dom'

export default function Documentation() {
  return (
    <>
    
      
    
    
    <div className='temp'>

    <button className='doc-btn' onClick={()=>{
        window.location.href="https://victorious-hare-beret.cyclic.app/docs/";
    }} >API Documentation</button>
    <button className='doc-btn'>Backend Documentation</button>
    <button className='doc-btn'>Front-end Documentation</button>
    
    </div>


    </>
  )
}
