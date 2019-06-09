import { UPDATE_CONTACT } from '../actions/contact-action'

// let data = {
//   name: '',
//   email: ''
// }
export function contactReducer (state = {}, { type, data }) {
  switch (type) {
    case UPDATE_CONTACT: return data
    default: return state
  }
}
