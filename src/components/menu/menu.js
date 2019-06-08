import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Menu extends Component {
  render () {
    return (
      <div className='menu text-center'>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/personal'>Personal</Link></li>
          <li><Link to='/food'>Food</Link></li>
          <li><Link to='/drinks'>Drinks</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </div>
    )
  }
}

export default Menu
