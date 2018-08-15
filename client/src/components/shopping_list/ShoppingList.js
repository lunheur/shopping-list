import React, { Component } from 'react'
import { Container, ListGroup, ListGroupItem } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import uuid from 'uuid'
import AddItemButton from './AddItemButton'
import RemoveItemButton from './RemoveItemButton'

class ShoppingList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      items: [
        { id: uuid(), name: 'Eggs' },
        { id: uuid(), name: 'Milk' },
        { id: uuid(), name: 'Steak' },
        { id: uuid(), name: 'Water' }
      ]
    }
    this.handleAddItem = this.handleAddItem.bind(this)
    this.handleRemoveItem = this.handleRemoveItem.bind(this)
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
    const { items } = this.state
    return (
      <Container>
        <AddItemButton onAddItem={this.handleAddItem} />
        <ListGroup>
          <TransitionGroup className='shopping-list'>
            {items.map(({ id, name }) => (
              <CSSTransition key={id} timeout={500} classNames='fade'>
                <ListGroupItem>
                  <RemoveItemButton itemId={id} onRemoveItem={this.handleRemoveItem} />
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    )
  }
}

export default ShoppingList
