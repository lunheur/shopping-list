import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types'

export const getItems = () => {
  return {
    type: GET_ITEMS
  }
}

export const addItem = name => {
  return {
    type: ADD_ITEM,
    name
  }
}

export const deleteItem = id => {
  return {
    type: DELETE_ITEM,
    id
  }
}
