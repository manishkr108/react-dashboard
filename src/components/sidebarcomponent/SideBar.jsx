import React from 'react';
import './sideBar.css';

import navItem from '../../data/navItem';
import NavItem from './NavItem';

function SideBar() {
  return (
    <aside id='sidebar' className='sidebar'>
        <ul className="sidebar-nav" id='sidebar-nav'>
            <li className='nav-item'>
                <a className='nav-link' href='/'>
                <i className='bi bi-grid'></i>
                <span>Dashboard</span>
                </a>
            </li>

            <li className='nav-item'>
                <a className='nav-link collapsed' data-bs-target="#components-nav" data-bs-toggle="collapse" href='#'>
                <i className='bi bi-menu-button-wide'></i>
                <span>Documents</span>
                <i className='bi bi-chevron-down ms-auto'></i>
                </a>

                <ul id='components-nav' className='nav-content collapse' data-bs-parent="#sidebar-nav">
                    <li>
                        <a href='#'>
                            <i className='bi bi-circle'></i>
                            <span>Customers</span>
                        </a>
                    </li>

                    <li>
                        <a href='#'>
                            <i className='bi bi-circle'></i>
                            <span>Suplaires</span>
                        </a>
                    </li>

                    <li>
                        <a href='#'>
                            <i className='bi bi-circle'></i>
                            <span>Logistic</span>
                        </a>
                    </li>

                </ul>

            </li>

            <li className='nav-item'>
                <a className='nav-link collapsed' data-bs-target="#form-nav" data-bs-toggle="collapse" href='#'>
                <i className='bi bi-journal-text'></i>
                <span>Forms</span>
                <i className='bi bi-chevron-down ms-auto'></i>
                </a>

                <ul id='form-nav' className='nav-content collapse' data-bs-parent="#sidebar-nav">
                    <li>
                        <a href='#'>
                            <i className='bi bi-circle'></i>
                            <span>Application Form</span>
                        </a>
                    </li>

                    <li>
                        <a href='#'>
                            <i className='bi bi-circle'></i>
                            <span>Relese Form</span>
                        </a>
                    </li>

                    <li>
                        <a href='#'>
                            <i className='bi bi-circle'></i>
                            <span>Cancelation Form</span>
                        </a>
                    </li>
                </ul>

            </li>


            <li className='nav-item'>
                <a className='nav-link collapsed' data-bs-target="#table-nav" data-bs-toggle="collapse" href='#'>
                <i className="bi bi-layout-text-window-reverse"></i>
                <span>Table</span>
                <i className='bi bi-chevron-down ms-auto'></i>
                </a>

                <ul className='nav-content collapse' id='table-nav' data-bs-parent="#sidebar-nav">
                <li>
                        <a href='#'>
                            <i className='bi bi-circle'></i>
                            <span>generals Table</span>
                        </a>
                    </li>

                    <li>
                        <a href='#'>
                            <i className='bi bi-circle'></i>
                            <span>Data Table</span>
                        </a>
                    </li>
                </ul>
            </li>


            <li className='nav-item'>
                <a className='nav-link collapsed' data-bs-target="#chart-nav" data-bs-toggle="collapse" href='#'>
                <i className='bi bi-bar-chart'></i>
                <span>Chart</span>
                <i className='bi bi-chevron-down ms-auto'></i>
                </a>

                <ul className='nav-content collapse' id='chart-nav' data-bs-parent="#sidebar-nav">
                <li>
                        <a href='#'>
                            <i className='bi bi-circle'></i>
                            <span>generals Table</span>
                        </a>
                    </li>

                    <li>
                        <a href='#'>
                            <i className='bi bi-circle'></i>
                            <span>Data Table</span>
                        </a>
                    </li>
                </ul>
            </li>

            <li className='nav-heading'>Page</li>
            {navItem.map(nav => (
               <NavItem key={nav._id} nav={nav} />
            ))}
        </ul>
    </aside>
  )
}

export default SideBar