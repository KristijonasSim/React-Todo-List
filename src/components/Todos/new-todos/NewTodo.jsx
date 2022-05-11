import React,{ useState } from 'react'
import { useGlobalContext } from '../../sidebar/Context'
import './NewTodo.scss'
const NewTodos = () => {

  const [value, setValue ] = useState()
  const [priority, setPriority] = useState()

  const { addTodo, todos } = useGlobalContext()
  console.log(todos)

  
  const handleSubmit = (e) => {
    e.preventDefault()
    if(!value){
      alert('You must enter some value')
      return
    }
    if(!priority){
      alert('You must enter a priority')
      value = []
    }
    addTodo(value, priority)
    setPriority('')
    setValue('')
  }

  return (
      <div className='NewTodoContainer'>
        <div className='MainNewContainer'>
          <h1>Create new Todo</h1>
          <div className='NewContainer'>
            <div className='NewContainerTop'>
              <input
                className='NewTodoInput'
                label="Add new Todo"
                value={value}
                placeholder="Add new Todo"
                onChange={e => setValue(e.target.value)}
              />
              <button onClick={handleSubmit} className="SubmitButton">Submit</button>
              <div>

              </div>
            </div>
           </div>
           <div className='SelectArea'>
              <h3> Task Priority</h3>
              <select
                  value={priority}
                  onChange={(e) => {
                    const selectedPriority = e.target.value;
                    setPriority(selectedPriority);
                  }}
                >
                  <option disabled selected value>Select</option>
                  <option value="High priority">High </option>
                  <option value="Medium priority">Medium </option>
                  <option value="Low priority">Low </option>
            </select>

            </div>
        </div>
      </div>
  )
}

export default NewTodos