import './App.css';
import { useState } from 'react';
import './components/css/Header-Footer.css'
import Header from "./components/header/Header";
import './components/css/style.css'
import Banner from './components/index/Banner';
import './components/css/global.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Course from './components/Pages/Course/Course';
import Toutrial from './components/Pages/Toutrial/Toutrial';
import Blog from './components/Pages/Blog/Blog';
import Contact from './components/Pages/Contact/Contact';
import Html from './components/Courses/Html/Html';
import Css from './components/Courses/Css/Css';
import Jquery from './components/Courses/Jquery/Jquery';
import Python from './components/Courses/Python/Python';
import Cms from './components/Courses/Cms/Cms';
import Notes from './components/index/Notes';
import UserDashboard from './components/index/UserDashboard';
import Footer from './components/header/Footer';
  


function App() {
  const [mode, setMode] = useState('light'); //Wheather dark Mode is enable or not.
  // eslint-disable-next-line
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
          <Route exact path="/notes" element={<Notes />}></Route>
          <Route exact path="/user" element={<UserDashboard />}></Route>

          <Route exact path="/html" element={<Html />}></Route>
          <Route exact path="/css" element={<Css />}></Route>
          <Route exact path="/jquery" element={<Jquery />}></Route>
          <Route exact path="/jquery" element={<Jquery />}></Route>
          <Route exact path="/python" element={<Python />}></Route>
          <Route exact path="/cms" element={<Cms />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
