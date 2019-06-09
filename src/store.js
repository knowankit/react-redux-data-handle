import { createStore } from 'redux'

function reducer () {
  return 'State'
}

const store = createStore(reducer)

console.log(store.getState())
