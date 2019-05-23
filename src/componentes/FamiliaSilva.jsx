import React from 'react'
import Mebro from './Mebro'

export default props =>
    <div>
        <Mebro nome='Alberto' sobrenome={props.sobrenome} />
        <Mebro nome='dd' sobrenome={props.sobrenome} />
        <Mebro nome='ww' sobrenome={props.sobrenome} />
        <Mebro nome='xx' sobrenome={props.sobrenome} />
    </div>