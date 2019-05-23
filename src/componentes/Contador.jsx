import React, { Component } from 'react'


export default class Contador extends Component {


    state = {
        numero : 0
    }
    maisUm = () => this.setState({numero: this.state.numero+1})
    menosUm = () => this.setState({numero: this.state.numero-1})
    altereNumero = (diferenca) => this.setState({numero: this.state.numero+diferenca})


    render() {
        return (
            <div>
                <div>Número : {this.state.numero}</div>
                <button onClick={this.maisUm}>Inc</button>
                <button onClick={this.menosUm}>Dec</button>
                <button onClick={()=>this.altereNumero(10)}>Diferença</button>
            </div>
        )
    }


}