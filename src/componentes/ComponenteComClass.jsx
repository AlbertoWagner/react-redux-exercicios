import React, { Component } from 'react'

export default class ComponeteComClass extends Component {
    render() {
        return (
            <h1>{this.props.valor || 'ola'}</h1>
        )
    }
}