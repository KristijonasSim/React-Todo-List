import React, { useState, useContext, useEffect } from 'react';
import { GetLocalStorage } from '../services/localStorage';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [todos, setTodos] = useState(GetLocalStorage());

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  todos.forEach((o, i) => o.id = i + 1)
  
  const addTodo = (text, priority) => {
    const newTodos = [...todos, { text, priority }]
    setTodos(newTodos)
  }


  const removeTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id))
  }


  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        addTodo,
        removeTodo,
        todos,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
