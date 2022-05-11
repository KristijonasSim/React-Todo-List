import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppProvider } from './components/sidebar/Context';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EditTodos from './components/Todos/edit-todos/edit-task';
import NewTodos from './components/Todos/new-todos/NewTodo';
import Sidebar from './components/sidebar/sidebar';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <Sidebar/>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<App />} />
            <Route path='/edit' element={<EditTodos />} />
            <Route path='/new' element={<NewTodos />} />
          </Routes>
        </BrowserRouter>
    </AppProvider>
  </React.StrictMode>
);

