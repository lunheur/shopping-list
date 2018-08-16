/* global prompt */
import React, { Component } from 'react'
import { Button } from 'reactstrap'

class AddItemButton extends Component {
  constructor (props) {
    super(props)
    this.handleAdd = this.handleAdd.bind(this)
  }

  handleAdd (e) {
    const name = prompt('Enter Item')
    this.props.onAddItem(name)
  }

  render () {
    return (
      <Button
        color='dark'
        style={{ marginBottom: '2rem' }}
        onClick={this.handleAdd}
      >
        {this.props.children || 'Add Item'}
      </Button>
    )
  }
}

export default AddItemButton
