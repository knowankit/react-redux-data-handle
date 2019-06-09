export const UPDATE_FOOD = 'UPDATE_FOOD'

export function updateFood (foodName) {
  return {
    type: UPDATE_FOOD,
    data: foodName
  }
}
