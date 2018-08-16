import React, { Component } from 'react'
import { Container, ListGroup, ListGroupItem } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import PropTypes from 'prop-types'

import uuid from 'uuid'

import { connect } from 'react-redux'
import { getItems } from '../../actions/ItemActions'

import AddItemButton from './AddItemButton'
import RemoveItemButton from './RemoveItemButton'

class ShoppingList extends Component {
  constructor (props) {
    super(props)
    this.handleAddItem = this.handleAddItem.bind(this)
    this.handleRemoveItem = this.handleRemoveItem.bind(this)
  }

  componentDidMount () {
    this.props.getItems()
  }

  handleAddItem (name) {
    if (name) {
      this.setState(prevState => ({
        items: [...prevState.items, { id: uuid(), name }]
      }))
    }
  }
  handleRemoveItem (id) {
    this.setState(prevState => ({
      items: prevState.items.filter(item => item.id !== id)
    }))
  }

  render () {
    const { items } = this.props.item
    return (
      <Container>
        <AddItemButton onAddItem={this.handleAddItem} />
        <ListGroup>
          <TransitionGroup className='shopping-list'>
            {items.map(({ id, name }) => (
              <CSSTransition key={id} timeout={500} classNames='fade'>
                <ListGroupItem>
                  {name}
                  <RemoveItemButton
                    itemId={id}
                    onRemoveItem={this.handleRemoveItem}
                  />
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    )
  }
}

ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  item: state.item
})

export default connect(mapStateToProps, { getItems })(ShoppingList)
