import React, { Component } from 'react'


class Delete extends Component {
    render() {
        return (
            <button
                onClick={() => {
                    this.props.deleteContact(this.props.index)
                }}
            >Delete
                </button>
        )
    }
}

export default Delete;