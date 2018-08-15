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
        className='remove-btn'
        color='danger'
        size='sm'
        onClick={this.handleRemove}
      >
        {this.props.children || String.fromCharCode(215) /* 215: &times; "x" */}
      </Button>
    )
  }
}

export default RemoveItemButton
