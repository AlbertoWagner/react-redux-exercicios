import React, { useState , useEffect } from 'react'


export default props => {

    const [contador , setContador] = useState(100)
    const [status , setStatus] = useState('Par')


    useEffect(() =>{
        contador % 2 === 0 ? setStatus('Par') : setStatus('Impar')

    })


    return (
        <div>
            <div>{contador}</div>
            <div>{status}</div>

        <button onClick={()=>setContador(contador+1)}>++</button>
    </div>
    )
 



 
}