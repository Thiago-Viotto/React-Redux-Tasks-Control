import React from 'react'

import PageHeader from '../template/pageHeader'
import TodoForm from '../todo/todoForm'
import TodoList from '../todo/todoList'

export default props => (
    <div>
        <PageHeader name='Tarefas' small='Cadastro' />
        <TodoForm description={this.state.description} handleAdd={this.handleAdd}
            handleChange={this.handleChange} handleSearch={this.handleSearch}
            handleClear={this.handleClear} />
        <TodoList list={this.state.list} handleRemove={this.handleRemove}
            handleMarkAsPending={this.handleMarkAsPending} handleMarkAsDone={this.handleMarkAsDone} />
    </div>
)