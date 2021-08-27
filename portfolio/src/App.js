import React from 'react'
import './App.css';
import images from './images/index.js';



function App() {
  
  return (
    <React.Fragment>
      <body className="Center-header">
        <h1> I am Nickolas Phen,</h1>
        <h2>Welcome to my website</h2>
      </body>
      <body className="about-grid">
        <body className="item-a">
          <h1>About</h1>
          <p>Hi, my name is Nickolas Phen and I am a senior at the University of Florida working towards a Bachelor's of Science with Computer Science as my major and Electrical Engineering as my minor.
          
          </p>
        </body>
        <body className="item-s">
          <h1>Skills</h1>
          <h2>Proficient with:</h2>
            <img src={images.java} alt="Java" width="80" height="80"/>
            <img src={images.python} alt="Python" width="80" height="80" />
            <img src={images.cpp} alt="C++" width="80" height="80"/>
            <img src={images.sql} alt="SQL" width="80" height="80"/>
          <h2>Familiar with:</h2>
            <img src={images.matlab} alt="Matlab" width="80" height="80"/>
            <img src={images.react} alt="React" width="80" height="80" />
            <img src={images.html} alt="HTML" width="80" height="80"/>
            <img src={images.css} alt="CSS" width="80" height="80"/>
            <img src={images.vhdl} alt="VHDL" width="80" height="80"/>
            <img src={images.github} alt="SQL" width="80" height="80"/>
        </body>
      </body>
      <h1>Projects</h1>
      <body className="project-grid">
        <img src={images.hw} alt="Heavenly Writing" width="800" height="auto"></img>
        <p>Heavenly writing</p>
        <p className="projectA">Trail Tracker</p>
        <img className="projectB" src={images.tt} alt="TrailTracker" width="800" height="auto"></img>
        
      </body>
      <body >
        <h1>Contact</h1>
      </body>
    </React.Fragment>
    
  );
}

export default App;
