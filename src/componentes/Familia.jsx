import React from 'react'
import { filhosComProps } from '../utils/ultils'

export default props =>
    <div>
        <h1>Família</h1>
         {/* {React.Children.map(props.children, filho => {
            return React.cloneElement(filho, { ...props })})

        } **  */}
        {{filhosComProps(props)}  }
        {/* {React.cloneElement(props.children, { ...props })} } */}
        {/* {React.cloneElement(props.children,{sobrenome : props.sobrenome} )} */ }
        {/* {props.children} */ }
    </div>