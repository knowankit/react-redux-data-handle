import { UPDATE_CONTACT } from '../actions/contact-action'

export function contactReducer (state = '', { type, data }) {
  switch (type) {
    case UPDATE_CONTACT: return data
    default: return state
  }
}
