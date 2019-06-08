import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateContact } from '../../actions/contact-action'

class Contact extends Component {
  constructor (props, context) {
    super(props, context)
    this.onUpdateContact = this.onUpdateContact.bind(this)
  }

  onUpdateContact (e) {
    this.props.onUpdateContact(e.target.value)
  }

  render () {
    console.log(this.props)
    return (
      <div className='contact mx-auto'>
        <form>
          <div className='form-group '>
            <label htmlFor='name'>Name</label>
            <div className='col-sm-10'>
              <input type='text' className='form-control' aria-describedby='name' placeholder='Name' />
            </div>
          </div>
          <div className='form-group '>
            <label htmlFor='email'>Email</label>
            <div className='col-sm-10'>
              <input type='email' className='form-control' aria-describedby='email' placeholder='Email' />
            </div>
          </div>
          <div className='form-group '>
            <label htmlFor='password' >Password</label>
            <div className='col-sm-10'>
              <input type='password' className='form-control' placeholder='Password' />
            </div>
          </div>
          <button type='submit' className='btn btn-primary' onClick={this.onUpdateContact}>Submit</button>
          <input onChange={this.onUpdateContact} />
          {this.props.contact}
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  contact: state.contact
})

const mapActionsToProps = {
  onUpdateContact: updateContact
}

export default connect(mapStateToProps, mapActionsToProps)(Contact)
