import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className="navbar bg-info">
   <div className="container-fluid">
     <a className="navbar-brand" href="#">
       <img src="data:image/jpeg;base64,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" alt="Logo" width="50" height="50" className="d-inline-block align-text-top rounded-5"/> &nbsp;
      <span className='fw-bold'>PhotoGallery</span>
     </a>
   </div>
 </nav>
    </>
  )
}

export default Navbar