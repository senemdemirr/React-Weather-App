import React from 'react'
import ImageFetch from "./ImageFetch"


function Background({backGround}) {
  return (
    <div className='backGround'>
      <div className="overlay"></div>
      <ImageFetch state ={backGround}/>
    </div>
  )
}

export default Background