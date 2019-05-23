import React from 'react'


const filhosComProps = (props) =>
 React.Children.map(props.children, filho => {
    return React.cloneElement(filho, { ...props })
})


export {filhosComProps}