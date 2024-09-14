import React from 'react';
import profileImage from '../../images/profile.gif';

function NavAvtar({ onLogout }) {
  const handleLogoutClick = (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    onLogout(); // Call the passed logout function
  };

  return (
    <li className='nav-item dropdown pe3'>
      <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
        <img src={profileImage} alt='profile' className='rounded-circle' />
        <span className='d-none d-md-block dropdown-toggle ps-2'>Manish Kumar</span>
      </a>

      <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow profile'>
        <li className='dropdown-header'>
          <h6>Manish</h6>
          <span>Full stack Developer</span>
        </li>

        <li>
          <hr className='dropdown-divider' />
        </li>

        <li>
          <a className='dropdown-item d-flex align-items-center' href='users-profile.html'>
            <i className='bi bi-person'></i>
            <span>My Profile</span>
          </a>
        </li>

        <li>
          <hr className='dropdown-divider' />
        </li>

        <li>
          <a className='dropdown-item d-flex align-items-center' href='users-profile.html'>
            <i className='bi bi-gear'></i>
            <span>Account Settings</span>
          </a>
        </li>

        <li>
          <hr className='dropdown-divider' />
        </li>

        <li>
          <a className='dropdown-item d-flex align-items-center' href='users-profile.html'>
            <i className='bi bi-question-circle'></i>
            <span>Need Help?</span>
          </a>
        </li>

        <li>
          <hr className='dropdown-divider' />
        </li>

        <li>
          <a className='dropdown-item d-flex align-items-center' href='#' onClick={handleLogoutClick}>
            <i className='bi bi-box-arrow-right'></i>
            <span>Sign Out</span>
          </a>
        </li>
      </ul>
    </li>
  );
}

export default NavAvtar;
