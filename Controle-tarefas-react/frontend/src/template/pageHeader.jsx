import React from 'react'
import img from '../img/livro.png'
import '../template/custom.css'

export default props => (
    <header className='page-header'>
        <img src={img}/>
        <h2>{props.name} <small>{props.small}</small></h2>
       
    </header>
)

