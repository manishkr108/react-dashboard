import React from 'react';
import './logo.css';

function Logo() {
    const HandleToggleSideBar = () =>{
        document.body.classList.toggle('toggle-sidebar');
    };
  return (
    <div className='d-flex align-items-center justify-content-between'>
        <a href='' className="logo d-flex align-items-center">
            <span className="d-none d-lg-block">Admin dashbord</span>
        </a>
        <i className="bi bi-list toggle-sidebar-btn" onClick={HandleToggleSideBar}></i>
    </div>
  );
}

export default Logo