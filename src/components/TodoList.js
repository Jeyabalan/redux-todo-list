import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { doneTodo } from '../store/actions/done.action';

function TodoList() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    return (
        <div className="mt-3 container-fluid w-100">
            <table className="table">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Todo</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map((todo, index) => {
                            let style = {}
                            if (todo.completed) {
                                style = {
                                    "text-decoration": "line-through"
                                }
                            }
                            return <tr key={todo.id}>
                                <td style={style}>{index + 1}</td>
                                <td style={style}>{todo.text}</td>
                                {
                                    todo.completed === false && <td>
                                        <button className="btn btn-class btn-primary" onClick={() => dispatch(doneTodo(todo.id))}>Done</button>
                                    </td>
                                }
                            </tr>
                        })
                    }
                    {
                        todos.length === 0 ? <tr>No more TODO</tr> : ''
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TodoList
