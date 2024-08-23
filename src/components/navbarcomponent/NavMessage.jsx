import React from 'react'

function NavMessage() {
  return (
    <li className='nav-item dropdown'>
     
      <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
        <i className='bi bi-chat-left-text'></i>
        <span className="badge bg-success badge-number">4</span>
      </a>

      <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow messages'>
          <li className='dropdown-header'>you have 4 messages
          <a href='#'>
          <span className='badge rounded-pill bg-primary p-2 ms-2'>View all</span> 
          </a>
          </li>

          <li>
            <hr className='dropdown-divider' />
          </li>

          <li className='message-item'>
            {/* <i className='bi bi-exclamation-circle text-warning'></i> */}
            <div>
              <h4>Lorem Ipsume</h4>
              <p>quae doloreme aerum vertis</p>
              <p>30 min. ago</p>
            </div>
          </li>

          <li>
            <hr className='dropdown-divider' />
          </li>

          <li className='message-item'>
            {/* <i className='bi bi-x-circle text-danger'></i> */}
            <div>
              <h4>atue message </h4>
              <p>quae city aerum vertis</p>
              <p>1 hr. ago</p>
            </div>
          </li>

          <li>
            <hr className='dropdown-divider'/>
          </li>

          <li className='message-item'>
            {/* <i className='bi bi-check-circle text-success'></i> */}
            <div>
              <h4>Site message rupe</h4>
              <p>More like city aerum vertis</p>
              <p>1 hr. ago</p>
            </div>
          </li>

          <li>
            <hr className='dropdown-divider'/>
          </li>

          <li className='message-item'>
            {/* <i className='bi bi-info-circle text-primary'></i> */}
            <div>
              <h4>data backup </h4>
              <p>que  like data aerum vertis</p>
              <p>1 hr. ago</p>
            </div>
          </li>

          <li>
            <hr className='dropdown-divider'/>
          </li>

          <li className='dropdown-footer'>
            <a href='#'>show all notification</a>
          </li>


      </ul>
    </li>
  )
}

export default NavMessage