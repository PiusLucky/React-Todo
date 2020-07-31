import React, { Component } from 'react'
import TodoItem from './TodoItem'


export default class TodoList extends Component {
    render() {
        const { items, handleClear, handleDelete, handleEdit } = this.props
        return (
            <ul className="list-group my-5">
                <h3 className="text-capitalize text-center">
                    my special list
                </h3>
                {
                    items.map(item => {
                        return <TodoItem key={item.id} title={item.title} deleteItem={() => handleDelete(item.id)} EditItem={() => handleEdit(item.id)} itemkey={item.id} />
                    })
                }

                <button
                    type="button"
                    className="btn btn-danger btn-block text-capitalize mt-5"
                    onClick={handleClear}
                >
                    clear list
                </button>
            </ul>
        )
    }
}
