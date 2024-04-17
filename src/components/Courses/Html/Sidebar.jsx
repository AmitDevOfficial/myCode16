  // import React from 'react'
  // // import { Link } from 'react-router-dom';
  // import Htmlhome from './InnerCourse/Htmlhome';
  // import Htmlintro from './InnerCourse/Htmlintro';

  // export default function Sidebar({ handleClick }) {


  //   return (
  //     <div className='content'>
  //       <h3>HTML Course</h3>  
  //       <ul>
  //         <li onClick={() => handleClick(Htmlhome)}>HTML Home</li>
  //         <li onClick={() => handleClick(Htmlintro)}>HTML Intro</li>
  //       </ul>
  //     </div>
  //   )
  // }


import React from 'react';
import { Link } from 'react-router-dom';
import Htmlhome from './InnerCourse/Htmlhome';
import Htmlintro from './InnerCourse/Htmlintro';

export default function Sidebar({ handleClick }) {
  const handleLinkClick = (Component, event) => {
    event.preventDefault(); // Prevent the default navigation behavior
    handleClick(Component);
  };

  return (
    <div className='content'>
      <h3>HTML Course</h3>  
      <ul>
        <li>
          <Link to="/html_home" onClick={(e) => handleLinkClick(Htmlhome, e)}>HTML Home</Link>
        </li>
        <li>
          <Link to="/html_intro" onClick={(e) => handleLinkClick(Htmlintro, e)}>HTML Intro</Link>
        </li>
      </ul>
    </div>
  );
}

