import React from 'react';
import './App.css';
import Header from './components/header/Header'
import Home from './components/Home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills'; 
import Services from './components/services/Services';
import Projects from './components/projects/Projects';
import Qualification from './components/qualification/Qualification';
import Testmonials from './components/testmonials/Testmonials';

function App() {
  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About />
        < Skills />
        < Services />
        < Projects />
        < Qualification />
        < Testmonials/>
    </main>
    </>
  );
}

export default App;
