import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateContact } from '../../actions/contact-action'

class Contact extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      name: '',
      email: ''
    }
    this.onUpdateContact = this.onUpdateContact.bind(this)
  }

  onUpdateContact (e) {
    this.setState({
      [e.target.name]: e.target.value
    },() => {
      const data = {
        name: this.state.name,
        email: this.state.email
      }
      this.props.onUpdateContact(data)
    })
  }

  render () {
    console.log(this.props)
    return (
      <div className='contact mx-auto'>
        <form>
          <div className='form-group '>
            <label htmlFor='name'>Name</label>
            <div className='col-sm-10'>
              <input type='text' name='name' value={this.state.name} className='form-control' onChange={this.onUpdateContact} aria-describedby='name' placeholder='Name' />
            </div>
          </div>
          <div className='form-group '>
            <label htmlFor='email'>Email</label>
            <div className='col-sm-10'>
              <input type='email' name='email' value={this.state.email} className='form-control' onChange={this.onUpdateContact} aria-describedby='email' placeholder='Email' />
            </div>
          </div>
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

Contact.propTypes = {
  contact: PropTypes.object,
  onUpdateContact: PropTypes.func
}
