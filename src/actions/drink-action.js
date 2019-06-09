export const UPDATE_DRINK = 'UPDATE_DRINK'

export function updateDrink (drinkName) {
  return {
    type: UPDATE_DRINK,
    data: drinkName
  }
}
