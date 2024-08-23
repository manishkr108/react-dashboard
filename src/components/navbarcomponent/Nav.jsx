import React from 'react';
import './nav.css';
import NavNotice from './NavNotice';
import NavMessage from './NavMessage';
import NavAvtar from './NavAvtar';

function Nav() {
  return (
    <nav className="header-nav ms-auto">
      <ul className='d-flex align-items-center'>
        <NavNotice />
        <NavMessage />
        <NavAvtar />
      </ul>
    </nav>
  )
}

export default Nav