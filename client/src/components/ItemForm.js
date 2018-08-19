import React, { Component } from 'react'
import {
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  Button
} from 'reactstrap'
import PropTypes from 'prop-types'

class ItemForm extends Component {
  constructor (props) {
    super(props)
    this.state = { itemInput: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    event.preventDefault()
    this.setState({ itemInput: event.target.value })
  }

  handleSubmit (event) {
    event.preventDefault()
    const name = this.state.itemInput.trim().replace(/\s{2,}/, ' ')
    this.setState({ itemInput: '' })
    if (!name) return
    this.props.onAddItem(name)
  }

  render () {
    return (
      <Form onSubmit={this.handleSubmit} className='mb-3'>
        <FormGroup>
          <InputGroup>
            <Input
              name='name'
              placeholder={this.props.placeholder}
              value={this.state.itemInput}
              onChange={this.handleChange}
            />
            <InputGroupAddon addonType='append'>
              <Button color='dark' type='submit'>
                <span className='oi oi-plus px-3' />
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </FormGroup>
      </Form>
    )
  }
}

ItemForm.propTypes = {
  placeholder: PropTypes.string,
  onAddItem: PropTypes.func.isRequired
}
export default ItemForm
