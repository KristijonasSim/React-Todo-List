import React from 'react'
import './sidebar.scss'
import { useGlobalContext } from './Context'
import { links } from '../data/data'

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar, openSidebar, todos } = useGlobalContext()
  const handleSidebar = () => {
    if(isSidebarOpen === false){
      openSidebar()
    }else{
      closeSidebar()
    }

  }
  return (
      <div className='boxas'>
        <button onClick={handleSidebar} className="btn">PANEL</button>
          <div className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
        <ul className='links'>
            {links.map((link) => {
              const { id, url, text, icon } = link;
              return (
                <li key={id} >
                  <a href={url}>
                  <div className='icon'>{icon}</div> 
                    {text}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
  )
}

export default Sidebar