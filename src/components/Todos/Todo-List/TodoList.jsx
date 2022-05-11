import React from 'react'
import './TodoList.scss'

import { useGlobalContext } from '../../sidebar/Context'



const TodoList = () => {
  const { todos, removeTodo } = useGlobalContext()

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
                          <div className='text'>
                           {text}
                          </div>
                          <div className='priorityBox'>
                              <div className={`${priority === 'High priority' ? 'high' : priority === 'Low priority' ? 'low' : 'medium'}`}></div>                          
                                <div className='priority'>
                                  {priority}
                                </div>
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