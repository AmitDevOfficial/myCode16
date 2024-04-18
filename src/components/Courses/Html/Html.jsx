import React, { useState } from 'react';
import './html.css';
import Sidebar from './Sidebar';
import Htmlintro from './InnerCourse/Htmlintro';


// ----------------------------This is the Main Page-------------------------------

export default function Html() {
  const [content, setContent] = useState(null);

  // Function to handle the click event for Sidebar ul li and set the content state
  const handleClick = (Component) => {
    setContent(<Component />);
  };


  const handleScroll = (e) => {
    const element = e.target;
  
    // Check if the scrollable area has reached the top or bottom
    const atTop = element.scrollTop === 0;
    const atBottom = element.scrollHeight - element.clientHeight === element.scrollTop;
  
    // If scrolling up at the top or scrolling down at the bottom, allow default behavior
    if ((atTop && e.deltaY < 0) || (atBottom && e.deltaY > 0)) {
      return;
    }
  
    // Prevent default scroll behavior
    e.preventDefault();
  
    // Manually adjust the scroll position based on the mouse wheel movement
    element.scrollTop += e.deltaY;
  };

  return (
    <>
      <div className='main-template'>
        <div className="sideBar scroll2" onWheel={handleScroll}>
          <Sidebar handleClick={handleClick}/>
        </div>
        <div className="template">
        {content === null ? <Htmlintro/> : null}
        {content}
        </div>
      </div>
    </>
  )
}
