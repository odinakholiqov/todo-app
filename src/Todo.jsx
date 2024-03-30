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
    console.log(todos)

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
            <ul>
                {todos.map(todo => {
                    return (
                        <li key={todo.id}>
                            <label>
                                <input type="checkbox" checked={todo.completed}/>
                                {todo.title}
                            </label>
                            <button>
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