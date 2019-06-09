import React, { Component } from 'react'
import { Menu } from '../menu'
import { Home } from '../home'
import { Personal } from '../personal'
import Contact from '../contact/contact'
import Drinks from '../drinks/drinks'
import Food from '../food/food'

import { BrowserRouter as Router, Route } from 'react-router-dom'

export class MainArea extends Component {
  render () {
    return (
      <Router>
        <div className='container-fluid main-area'>
          <div className='row'>
            <div className='menu-top'> <Menu /></div>
            <div className='menu-col d-none'> <Menu /></div>
            <div className='col-md-12'>
              <Route exact path='/' component={Home} />
              <Route exact path='/personal' component={Personal} />
              <Route exact path='/drinks' component={Drinks} />
              <Route exact path='/food' component={Food} />
              <Route exact path='/contact' component={Contact} />
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

export default MainArea
