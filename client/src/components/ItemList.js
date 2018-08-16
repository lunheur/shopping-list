import React from 'react'
import { Container, ListGroup, ListGroupItem } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import PropTypes from 'prop-types'

import AddItemButton from './AddItemButton'
import RemoveItemButton from './RemoveItemButton'

const ItemList = (items, onAddItem, onRemoveItem) => (
  <Container>
    <AddItemButton onAddItem={name => onAddItem(name)} />
    <ListGroup>
      <TransitionGroup className='shopping-list'>
        {items.map(({ id, name }) => (
          <CSSTransition key={id} timeout={500} classNames='fade'>
            <ListGroupItem>
              {name}
              <RemoveItemButton
                itemId={id}
                onRemoveItem={id => onRemoveItem(id)}
              />
            </ListGroupItem>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ListGroup>
  </Container>
)

ItemList.propTypes = {
  items: PropTypes.object.isRequired,
  onAddItem: PropTypes.func.isRequired,
  onRemoveItem: PropTypes.func.isRequired
}

export default ItemList
