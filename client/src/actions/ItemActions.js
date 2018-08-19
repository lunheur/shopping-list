import {
  GET_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  FETCHING_ITEMS
} from '../actions/types'

export const getItems = () => {
  return {
    type: GET_ITEMS
  }
}

export const addItem = item => {
  return {
    type: ADD_ITEM,
    item
  }
}

export const deleteItem = id => {
  return {
    type: DELETE_ITEM,
    id
  }
}

export const setItemsFetching = () => {
  return {
    type: FETCHING_ITEMS
  }
}
