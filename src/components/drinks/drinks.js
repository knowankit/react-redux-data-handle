import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateDrink } from '../../actions/drink-action'

class Drinks extends Component {
  constructor (props) {
    super(props)
    this.state = {
      drink: ''
    }
    this.updateDrinks = this.updateDrinks.bind(this)
  }

  updateDrinks (value) {
    this.setState({
      drink: value
    }, () => {
      this.props.onUpdateDrink(this.state.drink)
    })
  }

  render () {
    console.log(this.props)
    return (
      <div className='mx-auto drinks'>
        <div className='row'>
          <button type='button' className='btn btn-primary mx-auto' onClick={() => this.updateDrinks('Cranberry')}>
            Cranberry <span className='badge badge-light'><i className='fas fa-glass-cheers'></i></span>
          </button>
          <button type='button' className='btn btn-warning mx-auto' onClick={() => this.updateDrinks('Bloody Mary')}>
            Bloody Mary <span className='badge badge-light'><i className='fas fa-glass-martini-alt'></i></span>
          </button>
          <button type='button' className='btn btn-danger mx-auto' onClick={() => this.updateDrinks('Wine')}>
            Wine <span className='badge badge-light'><i className='fas fa-wine-glass-alt'></i></span>
          </button>
          <button type='button' className='btn btn-dark mx-auto' onClick={() => this.updateDrinks('Martini')}>
            Martini <span className='badge badge-light'><i className='fas fa-cocktail'></i></span>
          </button>
        </div>
        <div className='row'>
          <button type='button' className='btn btn-light mx-auto mt-4' onClick={() => this.updateDrinks('Martini')}>
            You Selected - {this.props.drinks} <span className='badge badge-light'><i className='fas fa-cocktail'></i></span>
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  drinks: state.drink
})

const mapActionsToProps = {
  onUpdateDrink: updateDrink
}

export default connect(mapStateToProps, mapActionsToProps)(Drinks)

Drinks.propTypes = {
  drinks: PropTypes.string,
  onUpdateDrink: PropTypes.func
}
