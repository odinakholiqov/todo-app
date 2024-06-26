import { useState } from "react"

function Todo() {
    const [newItem, setNewItem] = useState("")
    const [todos, setTodos] = useState([])

    function handleSubmit(e) {
        e.preventDefault()

        setTodos((currentTodos) => {
            return [...currentTodos, {id: crypto.randomUUID(), title: newItem, completed: false},
            ]
        })

        setNewItem("")
    }

    function toggleTodo(id, completed) {
        setTodos(currentTodos => {
            return currentTodos.map(todo => {
                if (todo.id === id) {
                    return {...todo, completed}
                }
                return todo
            })
        })
    }

    function deleteTodo(id) {
        setTodos(currentTodos => {
            return currentTodos.filter(todo => todo.id !== id)
            })
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="item">New Item</label>
                    <input
                        value={newItem}
                        onChange={e => setNewItem(e.target.value)}
                        type="text"
                        id="item"
                    />
                </div>
                <button>Add</button>
            </form>
            
            <h1>Todo List</h1>
            {todos.length === 0 && "No Todos"}
            <ul>
                {todos.map(todo => {
                    return (
                        <li key={todo.id}>
                            <label>
                                <input type="checkbox" checked={todo.completed} onChange={e => toggleTodo(todo.id, e.target.checked)}/>
                                {todo.title}
                            </label>
                            <button onClick={() => deleteTodo(todo.id)}>
                                Delete
                            </button>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default Todo