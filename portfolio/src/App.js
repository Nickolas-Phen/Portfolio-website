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
        <p className="desc">Heavenly writing is an app created in collaboration of 6 people including myslef for our software engineering class. We were tasked to create a website for a client who's job 
          was doing astrology readings and were given a set of guidelines for creating the website. The website was made so that a person could sign up for an account and enter information
          like their birthday, time of birth, and location of birth, and from there the website would determine the zodiac sign, ascendent sign, and solar sign and would give out horoscopes
          and advice based on those combinations with the information in the database.
          <p>Link to github: <a href="https://github.com/Nickolas-Phen/HeavenlyWriting">Heavenly Writing</a></p>  
        </p>

        <p className="desc">Trail Tracker is an app I created together with 3 friends for our Python programming class. The app was created to function as a sort of journal or diary for 
          avid hikers that allowed them to record infromation about the hikes they took. It stored pieces of data like where one went hiking, how many hikes they have been on, distance traveled,
          elevation gained and lost, and an average distance and elevation of all their hikes combined. It also displayed on the map where each hike had taken place.
          <p>Link to github: <a href="https://github.com/Nickolas-Phen/TrailTracker">TrailTracker</a></p> 
        </p>
        <img src={images.tt} alt="TrailTracker" width="800" height="auto"></img>
        
      </body>
      <body >
        <h1>Contact</h1>
        <p className="Center-header">Email: nickolas.phen@gmail.com<span className="tab"/>Phone #: (954)-651-5196
          <p className="Center-header">GitHub: <a href="https://github.com/Nickolas-Phen">Nickolas Phen</a><span className="tab"/>Resume: <a href="NickolasPhen Resume.pdf" download>Resume</a></p>
        </p>
      </body>
    </React.Fragment>
    
  );
}

export default App;
