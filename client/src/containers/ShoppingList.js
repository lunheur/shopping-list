import { connect } from 'react-redux'
import { getItems, addItem, deleteItem } from '../actions/ItemActions'

import ItemList from '../components/ItemList'

const mapStateToProps = state => {
  return {
    items: state.items.items
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddItem: item => {
      dispatch(addItem(item))
    },
    onRemoveItem: id => {
      dispatch(deleteItem(id))
    },
    getItems: () => {
      dispatch(getItems())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList)
