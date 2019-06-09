import { UPDATE_DRINK } from '../actions/drink-action'

export function drinkReducer (state = '', { type, data }) {
  switch (type) {
    case UPDATE_DRINK: return data
    default: return state
  }
}
