import React, { Component } from 'react'
import { Menu } from '../menu'
import { Home } from '../home'
import { BrowserRouter as Router, Route } from 'react-router-dom'

export class MainArea extends Component {
  render () {
    return (
      <Router>
        <div className='container-fluid main-area'>
          <div className='row'>
            <div className='col-md-3 menu-col'> <Menu /></div>
            <div className='col-md-9'>
              <Route exact path='/personal' component={Home} />
              {/* <Route path='/about' component={About} />
              <Route path='/topics' component={Topics} /> */}
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

export default MainArea
