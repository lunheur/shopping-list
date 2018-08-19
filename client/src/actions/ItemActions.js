import axios from 'axios'
import {
  GET_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  FETCHING_ITEMS
} from '../actions/types'

export const getItems = () => dispatch => {
  dispatch(setItemsFetching())
  axios.get('/api/items').then(res => {
    dispatch({
      type: GET_ITEMS,
      items: res.data.map(({ _id, name }) => ({ id: _id, name }))
    })
  })
}

export const addItem = item => dispatch => {
  axios.post('/api/items', item).then(res => {
    dispatch({
      type: ADD_ITEM,
      item: { id: res.data._id, name: res.data.name }
    })
  })
}

export const deleteItem = id => dispatch => {
  axios.delete(`/api/items/${id}`).then(res =>
    dispatch({
      type: DELETE_ITEM,
      id
    })
  )
}

export const setItemsFetching = () => {
  return {
    type: FETCHING_ITEMS
  }
}
