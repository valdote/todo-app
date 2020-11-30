import React, {useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

function TodoList() {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        try{
            if(!todo.text || /^\s*$/.test(todo.text)) {
                throw Error
            }
        }catch(error) {
            console.log(error)
        }
        const newTodos = [todo, ...todos]

        setTodos(newTodos);
        console.log(todo, ...todos)
    };

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        });
        setTodos(updatedTodos);
    };

    const updateTodo = (todoId, newValue) => {
        try{
            if(!todoId.text || /^\s*$/.test(todoId.text)) {
                throw new Error('Ojo con las tareas en blanco.')
            }
        }catch(error) {
            console.log(error)
        }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr)
    };
    
    return (
        <div>
        <h1>Que piensas hacer hoy?</h1>
         <TodoForm onSubmit={addTodo} />   
         <Todo 
         todos={todos} 
         completeTodo={completeTodo} 
         updateTodo={updateTodo}
         removeTodo={removeTodo}
         />
        </div>
    )
}

export default TodoList
