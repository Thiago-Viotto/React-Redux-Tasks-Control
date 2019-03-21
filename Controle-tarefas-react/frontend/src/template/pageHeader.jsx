import React from 'react'
import img from '../img/livro.png'
import img2 from '../img/livro2.png'
import img3 from '../img/livro3.png'
import '../template/custom.css'

export default props => (
    <header className='page-header'>
            <img src={img} />
            <img src={img2} />
            <img src={img3} />
            <h2>{props.name} <small>{props.small}</small></h2>
    </header>
)

