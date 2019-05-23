import React from 'react'

const aprovados = ['alberto', 'wagner', 'joao', 'maria']


export default props => {
    const gerarItens = itens => {
        return itens.map(item => <li>{item}</li>)
    }
    return (
        <ul>
            {gerarItens(aprovados)}
        </ul>
    )
}