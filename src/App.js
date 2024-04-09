import './App.css';
import { useState } from 'react';
import './components/css/Header-Footer.css'
import Header from "./components//header/Header";
import './components/css/style.css'
import Banner from './components/index/Banner';
import './components/css/global.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Course from './components/Pages/Course';
import Toutrial from './components/Pages/Toutrial';
import Blog from './components/Pages/Blog';
import Contact from './components/Pages/Contact';
import Cms from './components/Courses/Cms';
import Html from './components/Courses/Html';
import Css from './components/Courses/Css';
import Javascript from './components/Courses/Javascript';
import Jquery from './components/Courses/Jquery';
import Python from './components/Courses/Python';

function App() {
  const [mode, setMode] = useState('light'); //Wheather dark Mode is enable or not.

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.querySelector("body").setAttribute("data-theme", "dark")
      document.body.style.color = "white";
    } else {
      setMode('light')
      document.querySelector("body").setAttribute("data-theme", "light")
      document.body.style.color = "black";

    }
  }

  return (
    <>

      <BrowserRouter>
        <Header mode={mode} toggleMode={toggleMode} />
        <Routes>
           <Route exact path="/" element={<Banner />}></Route>
           <Route exact path="/course" element={<Course />}></Route>
           <Route exact path="/toutrial" element={<Toutrial />}></Route>
           <Route exact path="/blog" element={<Blog />}></Route>
           <Route exact path="/contact" element={<Contact />}></Route>
           
            {/* ------------------Course Route----------- */}
           <Route exact path="/html" element={<Html />}></Route>
           <Route exact path="/css" element={<Css />}></Route>
           <Route exact path="/javascript" element={<Javascript />}></Route>
           <Route exact path="/jquery" element={<Jquery />}></Route>
           <Route exact path="/python" element={<Python />}></Route>
           <Route exact path="/cms" element={<Cms />}></Route>
        </Routes>
        {/* <Banner />
        */}
      </BrowserRouter>

    </>
  );
}

export default App;
