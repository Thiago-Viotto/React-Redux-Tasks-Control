import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Todo from '../todo/todo'

//o Redirect faz com que qualquer url errada digitada a página inicial seja carregada
//ao clicar em about, o componente about será carregado
export default props => (
    <Router history={hashHistory}>
        <Route path='/todos' component={Todo}></Route>
        <Redirect from='*' to='/todos'></Redirect>
    </Router>
)