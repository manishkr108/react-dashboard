import React, { Component } from 'react';
import './footer.css';

export class Footer extends Component {
  render() {
    return (
     <footer id='footer' className='footer'>
        <div className="copyright">
            &copy; Copyright{' '}
            <strong>
                <span>Manish Tech Tip</span>
            </strong>
            . All Right Reserved
        </div>

        <div className='credits'>
Designed By <a href='#'>Manish</a>
        </div>

     </footer>
    )
  }
}

export default Footer