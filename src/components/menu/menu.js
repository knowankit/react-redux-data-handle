import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Menu extends Component {
  render () {
    return (
      <div className='menu text-center'>
        <ul>
          <li><Link to='/'><i className="fas fa-home fa-3x"></i></Link></li>
          {/*<li><Link to='/personal'>Personal</Link></li>*/}
          <li><Link to='/food'><i className="fas fa-bread-slice fa-3x"></i></Link></li>
          <li><Link to='/drinks'><i className="fas fa-beer fa-3x"></i></Link></li>
          <li><Link to='/contact'><i className="fas fa-address-book fa-3x" ></i></Link></li>
        </ul>
      </div>
    )
  }
}

export default Menu
