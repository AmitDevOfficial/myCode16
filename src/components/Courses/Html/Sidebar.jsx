import React, {useState} from 'react'
// import { Link } from 'react-router-dom';
import Htmlhome from './Htmlhome';

export default function Sidebar() {
  
    const [content, setContent] = useState(null);

    const handleClick = (Component) => {
      setContent(<Component />);
    };
  
  return (
    <div className='content'>
       <h3>HTML Course</h3>
      <ul>
      <li onClick={() => handleClick(Htmlhome)}>HTML Home</li>
        {/* <li><Link to="html_intro">HTML Introduction</Link></li>
        <li><Link to="html_home">HTML Editor</Link></li>
        <li><Link to="html_home">HTML Basics</Link></li>
        <li><Link to="html_home">HTML Eolements</Link></li>
        <li><Link to="html_home">HTML Attritubtes</Link></li>
        <li><Link to="html_home">HTML Heading</Link></li>
        <li><Link to="html_home">HTML Paragrahp</Link></li>
        <li><Link to="html_home">HTML Style</Link></li>
        <li><Link to="html_home">HTML Formatting</Link></li>
        <li><Link to="html_home">HTML Qutations</Link></li>
        <li><Link to="html_home">HTML Comments</Link></li>
        <li><Link to="html_home">HTML Div</Link></li>
        <li><Link to="html_home">HTML Canvas</Link></li>
        <li><Link to="html_home">HTML Links</Link></li>
        <li><Link to="html_home">HTML Home</Link></li>
        <li><Link to="html_home">HTML Introduction</Link></li>
        <li><Link to="html_home">HTML Editor</Link></li>
        <li><Link to="html_home">HTML Basics</Link></li>
        <li><Link to="html_home">HTML Eolements</Link></li>
        <li><Link to="html_home">HTML Attritubtes</Link></li>
        <li><Link to="html_home">HTML Heading</Link></li>
        <li><Link to="html_home">HTML Paragrahp</Link></li>
        <li><Link to="html_home">HTML Style</Link></li>
        <li><Link to="html_home">HTML Formatting</Link></li>
        <li><Link to="html_home">HTML Qutations</Link></li>
        <li><Link to="html_home">HTML Comments</Link></li>
        <li><Link to="html_home">HTML Div</Link></li>
        <li><Link to="html_home">HTML Canvas</Link></li>
        <li><Link to="html_home">HTML Links</Link></li> */}
      </ul>
      {content}
    </div>
  )
}
