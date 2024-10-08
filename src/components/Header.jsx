import React from 'react';
import './header.css';
import Logo from './Logo';
import SearchBar from './SearchBar';
import Nav from './navbarcomponent/Nav';


function Header({onLogout}) {
  return (
    <header id="header" className='header fixed-top d-flex align-items-center'>
        {/* //*logo*/}
        <Logo />
        {/* //*serchbar*/}
        <SearchBar />
         {/*//*nav*/}
         <Nav  onLogout={onLogout} />
    </header>
  )
}

export default Header