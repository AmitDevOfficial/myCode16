import React from 'react';
import './html.css';
import Sidebar from './Sidebar';

export default function Html() {
  return (
    <>
      <div className='main-template'>
        <div className="sideBar">
          <Sidebar />
        </div>
        <div className="template">
          <h1>template</h1>
        </div>
      </div>
    </>
  )
}
