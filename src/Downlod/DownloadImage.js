import React from 'react'
import Nature from '../Images/Nature.jpg'
function DownloadImage() {
  return (
    <center>
      <img src={Nature} width={400} alt='tree' /><br />
      <a href={Nature} className='btn btn-primary m-4' download='ImageNature'>Download</a>
    </center>
  )
}

export default DownloadImage