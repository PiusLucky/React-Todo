import React, { Component } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

import { v4 as uuid } from 'uuid';



class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: '',
    editItem: false
  }

  handleChange = (e) => {
    // Initially item is empty, but when u type into it
    // we want it to change its value to the current state, 
    // that's where we use setState to retrieve the current
    // value via the event target, In summary setState is
    // used to change the initial state
    this.setState({
      item: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const newItem = {
      id: this.state.id,
      title: this.state.item
    }
    const updatedItems = [...this.state.items, newItem]
    this.setState({
      items: updatedItems,
      item: '',
      id: uuid(),
      editItem: false
    })
  }

  clearList = () => {
    this.setState({
      // this sets the items property to an empty array again
      items: []
    })
  }


  handleSpecificDelete = (id) => {
    const filteredItems = this.state.items
      .filter(item => item.id !== id)
    this.setState({
      items: filteredItems
    })
  }


  handleEdit = id => {
    const selectedItem = this.state.items.find(
      item => item.id === id
    )
    const otherItems = this.state.items.filter(
      item => item.id !== id
    )
    console.log(selectedItem)
    this.setState({
      item: selectedItem.title, // 'Hello'
      items: otherItems,
      editItem: true, // True
      id: id // xxxx-xxx-xxx
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4" >
            <h3 className="text-capitalize text-center">
              todo form
            </h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              handleClear={this.clearList}
              handleDelete={this.handleSpecificDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>

      </div>

    )
  }
}

export default App;
