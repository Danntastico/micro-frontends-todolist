import React from 'react';
import TodoForm from './TodoForm.jsx';
import TodoItem from './TodoItem.jsx';
import DoneItem from './DoneItem.jsx';
import Header from './Header.jsx';

export default class TodoList extends React.Component {
    state = {
        todos: [],
        todoToShow: 'active'
    };

    addTodo = (todo) => {
        this.setState({
            todos: [todo, ...this.state.todos]
        })
    }

    toggleComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        complete: !todo.complete
                    }
                } else {
                    return todo;
                }
            })
        })
    }

    updateTodoToShow = (s) => {
        this.setState({
            todoToShow: s
        })
    }

    render() {

        let todos = [];
        let doneTodos = [];
        todos = this.state.todos.filter(todo => !todo.complete);
        doneTodos = this.state.todos.filter(todo => todo.complete);
        return (
            <div>
                <div className="row d-flex flex-column px-4">
                    <div className="col-12 shadow-sm mt-2 bg-white">
                        <div className="todolist not-done">
                        <Header/>
                            <h2>Todos</h2>
                            <TodoForm onSubmit={this.addTodo} />
                            {
                                todos.map(todo =>
                                    <TodoItem
                                        todo={todo}
                                        key={todo.id}
                                        toggleComplete={() => this.toggleComplete(todo.id)}
                                    />)
                            }
                        </div>
                        <div className="float-right mt-5">
                            <p className="text-secondary">Left: {todos.filter(todo => (
                                !todo.complete
                            )).length} </p>
                        </div>
                    </div>
                    {
                        doneTodos.length > 0 && (
                            <div className="col-12 p-4 shadow-sm mt-1 p-2 bg-light">
                                <div className="todolist">
                                    <h4 className="text-success">Done</h4>
                                    {
                                        doneTodos.map(todo =>
                                            <DoneItem
                                                todo={todo}
                                                key={todo.id}
                                                toggleComplete={() => this.toggleComplete(todo.id)}
                                            />)
                                    }
                                </div>
                            </div>
                        )
                    }

                </div>
            </div>
        )
    }
}