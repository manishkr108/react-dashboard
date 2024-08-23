import React from 'react'

function NavItem({nav}) {
  return (
    <li key={nav.id} className='nav-item'>
         <a className='nav-link collapsed' href='#'>
            <i className={nav.icon}></i>
                <span>{nav.name}</span>
        {/* <i className='bi bi-chevron-down ms-auto'></i> */}
        </a>
    </li>
  )
}

export default NavItem