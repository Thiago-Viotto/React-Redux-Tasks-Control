import React from 'react'
import IconButton from '../template/iconButton'

import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {markAsDone, markAdPending, remove} from './todoActions'

const TodoList = props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    <IconButton style='sucess' icon='check' onClick={() => props.markAsDone(todo)} hide={todo.done} />
                    <IconButton style='warning' icon='undo' onClick={() => props.markAdPending(todo)} hide={!todo.done} />
                    <IconButton style='danger' icon='trash-o' onClick={() => props.remove(todo)} hide={!todo.done}/>
                </td>
            </tr>
        ))

    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='todoActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

//todo e list vem do reducers.js
const mapStateToProps = state => ({list: state.todo.list})
const mapDispatchToProps = dispatch =>
    bindActionCreators({markAsDone,markAdPending, remove}, dispatch)
export default connect(mapStateToProps,mapDispatchToProps) (TodoList)

