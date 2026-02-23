
import React, { useState } from 'react';
import Home from './Pages/Home';
import Work from './Pages/work';
import Exp from './Pages/Exp';
import Edu from './Pages/Edu';
import Skills from './Components/Skills';
import Certificate from './Pages/cert';
import About from './Pages/About';
import Contact from './Pages/Contact';


function App() {
  return (
    <>
      
      <Home />
      <Work/>
      <Exp/>
      <Skills/>
      <Edu/>
      <Certificate/>
      <About/>
      <Contact/>
     
    </>
  )
}

export default App
