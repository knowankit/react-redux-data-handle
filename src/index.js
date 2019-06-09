import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import { contactReducer } from './reducers/contact-reducer'
import { drinkReducer } from './reducers/drink-reducer'
import { foodReducer } from './reducers/food-reducer'

const combinedReducers = combineReducers({
  drink: drinkReducer,
  contact: contactReducer,
  food: foodReducer
})
const store = createStore(combinedReducers,
  {
    drink: '',
    contact: {}
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// console.log(store.getState())

// store.dispatch(action)
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
