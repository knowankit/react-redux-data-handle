import { UPDATE_FOOD } from '../actions/food-action'

export function foodReducer (state = '', { type, data }) {
  switch (type) {
    case UPDATE_FOOD: return data
    default: return state
  }
}
