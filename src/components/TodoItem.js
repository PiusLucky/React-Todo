import React, { Component } from 'react'

export default class TodoItem extends Component {
    render() {
        // title from the TodoList component which comes from the App component
        //  title > TodoList > App
        const { itemkey, title, deleteItem, EditItem, editBoolean } = this.props
        return (
            <React.Fragment>
                <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                    <h6>{title}
                    </h6>
                    <div className="todo-icon">
                        <span className="mx-2 text-success" onClick={EditItem}>
                            <i className="fas fa-pen"></i>
                        </span>
                        <span className="mx-2 text-danger" onClick={deleteItem}>
                            <i className="fas fa-trash"></i>
                        </span>
                    </div>

                </li>
                <p className="text-success">ID: {itemkey} </p>
            </React.Fragment>
        )
    }
}
