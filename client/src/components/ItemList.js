import React, { Component } from 'react'
import { Container, ListGroup, ListGroupItem } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import PropTypes from 'prop-types'

import RemoveItemButton from './RemoveItemButton'
import ItemForm from './ItemForm'

class ItemList extends Component {
  componentDidMount () {
    this.props.getItems()
  }

  render () {
    return (
      <Container>
        <ItemForm
          placeholder='Add item'
          onAddItem={name => this.props.onAddItem(name)}
        />
        <ListGroup>
          <TransitionGroup className='shopping-list'>
            {this.props.items.map(({ id, name }) => (
              <CSSTransition key={id} timeout={500} classNames='fade'>
                <ListGroupItem>
                  {name}
                  <RemoveItemButton
                    itemId={id}
                    onRemoveItem={id => this.props.onRemoveItem(id)}
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

ItemList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  onAddItem: PropTypes.func.isRequired,
  onRemoveItem: PropTypes.func.isRequired,
  getItems: PropTypes.func.isRequired
}

export default ItemList
