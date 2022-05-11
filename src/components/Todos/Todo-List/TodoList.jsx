import React, { useState } from 'react'
import './TodoList.scss'
import Sidebar from '../../sidebar/sidebar';
import NewTodos from '../new-todos/NewTodo';
import { useGlobalContext } from '../../sidebar/Context'



const TodoList = () => {
  const { todos, removeTodo } = useGlobalContext()
  console.log(todos)


  return (
        <div className='todoListContainer'>
            <div className='addTodoContainer'>
              <div className='Title'>
                  <h2>All Tasks</h2>
              </div>
                <div>
                {todos.map((todo) => {
                  const {id, text, priority } = todo 
                  return(
                    <div key={id}>
                        <div className='SingleTodo'>
                          <div className='log'>
                           {text}
                          </div>
                          <div className='kog'>
                           {priority}
                          </div>
                           <div>
                             <button 
                             onClick={() => { removeTodo(id) }}
                             className='btn-done'></button>
                           </div>
                        </div>

                    </div>
                  )
                })}
              </div>
            </div>
        </div>
  )
}

export default TodoList