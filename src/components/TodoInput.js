import React, { Component } from 'react'

export default class TodoInput extends Component {
    render() {
        const { item, handleChange, handleSubmit, handleEdit, editItem } = this.props
        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <i className="fa fa-lightbulb"></i>
                            </div>
                        </div>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="add a todo item"
                            value={item}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className=
                        {
                            editItem ? "btn btn-block btn-success mt-3" : "btn btn-block btn-primary mt-3"
                        }
                    >
                        {
                            editItem ? <i className="fa fa-save"></i> : <i className="fa fa-plus"></i>
                        }
                        {
                            editItem ? " edit item" : " add item"
                        }

                    </button>
                </form>
            </div>

        )
    }
}
