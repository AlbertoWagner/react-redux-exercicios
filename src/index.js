import React from 'react';
import ReactDOM from 'react-dom';
//import Primeiro from './componentes/PrimeiroComponete'
//import { CompA, CompB } from './componentes/DoisComponetes'
// import MulteElemete from './componentes/MultiElementos'
import Familia from './componentes/Familia'
import Membro from './componentes/Mebro'
// import FamiliaSilva from './componentes/FamiliaSilva'

const elemento = document.getElementById('root')

ReactDOM.render(
  <div>
    <Familia sobrenome='Oliveira'>
      <Membro nome='Aberto' />
      <Membro nome='Maria' />
    </Familia>
    {/* <FamiliaSilva sobrenome='Silva'/> */}
    {/* <FamiliaSilva/> */}
    {/* <MulteElemete/> */}
    { /* <Primeiro name={'alberto'}></Primeiro>
    <CompA valor='10' />
    <CompB valor='13' />
    <CompB valor='133' ></CompB>*/}
  </div>
  , elemento);
