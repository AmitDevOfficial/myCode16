import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Login from '../index/Login';

// eslint-disable-next-line 
export default function (props) {

  return (
    <>
      <header className='navbar'>
        <div className="container main-header">
          <div className="logo">
            <h1><Link to="/">CODE16</Link></h1>
          </div>
          <div className="menu">
            <ul>
              <li><Link to="/">Home</Link></li> 
              <li><Link to="/course">Course</Link></li>
              <li><Link to="/toutrial">Tutorial</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li className="btn"><Link to='/contact'>Contact</Link></li>
            </ul>
          </div>
          <div className='right-side-l-i'>
            <div className='headBtn'>
              <ul>
                <li className='headBtn-one'><Login login="Login"/></li>
                <li className='headBtn-two'>Sign Up</li>
              </ul>
            </div>
            <div className='change-body'>
              <FontAwesomeIcon onClick={props.toggleMode} icon={faMoon} size="2x" color="#9333ea" />
            </div>
          </div>
        </div>
        <div className="course-menu">
          <ul>
            <li><Link to="/html">Html</Link></li>
            <li><Link to="/css">Css</Link></li>
            <li><Link to="/javascript">Javascript</Link></li>
            <li><Link to="/jquery">Jquery</Link></li>
            <li><Link to="/python">Python</Link></li>
            <li><Link to="/cms">CMS</Link></li>
          </ul>
        </div>
      </header>
    </>
  );
}
