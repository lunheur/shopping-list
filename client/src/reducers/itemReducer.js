import {
  GET_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  FETCHING_ITEMS
} from '../actions/types'

const initialState = {
  items: [],
  isFetchingItems: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: action.items,
        isFetchingItems: false
      }
    case ADD_ITEM:
      return {
        ...state,
        items: [action.item, ...state.items]
      }
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.id)
      }
    case FETCHING_ITEMS:
      return {
        ...state,
        isFetchingItems: true
      }
    default:
      return state
  }
}
