import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateFood } from '../../actions/food-action'

export class Food extends Component {
  constructor (props) {
    super(props)
    this.state = {
      food: ''
    }
    this.updateFood = this.updateFood.bind(this)
  }

  updateFood (value) {
    this.setState({
      food: value
    }, () => {
      this.props.onUpdateFood(this.state.food)
    })
  }
  render () {
      console.log(this.props)
    return (
      <div className='mx-auto food'>
        <div className='row'>
          <button type='button' className='btn btn-primary mx-auto' onClick={() => this.updateFood('Pizza')}>
              Pizza <span className='badge badge-light'><i className='fas fa-pizza-slice'></i></span>
          </button>
          <button type='button' className='btn btn-warning mx-auto' onClick={() => this.updateFood('Hamburger')}>
              Hamburger<span className='badge badge-light'><i className='fas fa-hamburger'></i></span>
          </button>
          <button type='button' className='btn btn-danger mx-auto' onClick={() => this.updateFood('Hot Dog')}>
              Hot Dog <span className='badge badge-light'><i className='fas fa-hotdog'></i></span>
          </button>
          <button type='button' className='btn btn-dark mx-auto' onClick={() => this.updateFood('Waffel')}>
              Waffel <span className='badge badge-light'><i className='fas fa-stroopwafel'></i></span>
          </button>
        </div>
        <div className='row'>
          <button type='button' className='btn btn-light mx-auto mt-4'>
              You Selected - {this.props.food} <span className='badge badge-light'><i className='fas fa-utensils'></i></span>
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  food: state.food
})

const mapActionsToProps = {
  onUpdateFood: updateFood
}

export default connect(mapStateToProps, mapActionsToProps)(Food)

Food.propTypes = {
  food: PropTypes.string,
  onUpdateFood: PropTypes.func
}
