import React, { Component } from 'react'
import { Button } from 'reactstrap'

class RemoveItemButton extends Component {
  constructor (props) {
    super(props)
    this.handleRemove = this.handleRemove.bind(this)
  }

  handleRemove () {
    this.props.onRemoveItem(this.props.itemId)
  }

  render () {
    return (
      <Button
        className='float-right rounded-circle'
        color='light'
        size='sm'
        onClick={this.handleRemove}
      >
        <span className='oi oi-x' />
      </Button>
    )
  }
}

export default RemoveItemButton
