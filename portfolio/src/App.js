import React from 'react'
import './App.css';
import images from './images/index.js';
import Button from '@material-ui/core/Button';


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
          <p className="bio">Hi, my name is Nickolas Phen and I am a senior at the University of Florida working towards a Bachelor's of Science with Computer Science as my major and 
            Electrical Engineering as my minor. When I was younger I always enjoyed playing videogames and building things, be it in a videogame or something physical like Legos,
            which eventually led to my passion for coding as I wanted to combine the two things I enjoyed by being able to create my own videogames. But as I grew older I realized that 
            there is a lot more to making videogames than just coding, and that there is a much broader spectrum to coding and computer science than just making videogames.
          
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
        <img src={images.hw} className="img-style" alt="Heavenly Writing" width="800" height="auto"/>
        <p className="desc">
          <h1>Heavenly Writing</h1>
          Heavenly writing is an app created in collaboration of 6 people including myslef for our software engineering class. We were tasked to create a website for a client who's job 
          was doing astrology readings and were given a set of guidelines for creating the website. The website was made so that a person could sign up for an account and enter information
          like their birthday, time of birth, and location of birth, and from there the website would determine the zodiac sign, ascendent sign, and solar sign and would give out horoscopes
          and advice based on those combinations with the information in the database.
          <h1> 
            <a href="https://github.com/Nickolas-Phen/HeavenlyWriting" target="_blank" rel="noreferrer">
            <Button variant="outlined" color="primary" >GitHub </Button>
            </a>
          </h1>  
        </p>

        <p className="desc">
          <h1>Trail Tracker</h1>
          Trail Tracker is an app I created together with 3 friends for our Python programming class. The app was created to function as a sort of journal or diary for 
          avid hikers that allowed them to record infromation about the hikes they took. It stored pieces of data like where one went hiking, how many hikes they have been on, distance traveled,
          elevation gained and lost, and an average distance and elevation of all their hikes combined. It also displayed on the map where each hike had taken place.
          <h1> 
            <a href="https://github.com/Nickolas-Phen/TrailTracker" target="_blank" rel="noreferrer">
            <Button variant="outlined" color="primary">GitHub </Button>
            </a>
          </h1> 
        </p>
        <img src={images.tt} className="img-style" alt="TrailTracker" width="800" height="auto"/>

        <img src={images.rc} className="img-style" alt="RoboCode" width="800" height="auto"/>
        <p className="desc">
          <h1>RoboCode</h1>
          For my robocode project I built a very simplistic AI for a tank using the public robocode libraries and modifying some pre-existing algorithms for things like
          predictive shooting and strafing in order to create my own tank, snek, that would try to strafe and fire at an enemy when it was a certain distance away, 
          but when an enemy got too close snek would try to ram into the enemy and fire point blank. This tank was then used in a team battle for my AI for computer games class
          where we held a tournament style battle where teams would pit their tanks against others to see who's AI was better.
          <h1> 
            <a href="https://github.com/Nickolas-Phen/Robocode" target="_blank" rel="noreferrer">
            <Button variant="outlined" color="primary">GitHub </Button>
            </a>
          </h1>  
        </p>

        <p className="desc">
          <h1>Portfolio Webste</h1>
          My portfolio website was primarily developed using React and was created so that people could not only read a brief description about myself,
          but also see some of the skills I am familiar with as well as some of the projects that I have worked on before.
          <h1> 
            <a href="https://github.com/Nickolas-Phen/Portfolio-website" target="_blank" rel="noreferrer">
            <Button variant="outlined" color="primary">GitHub </Button>
            </a>
          </h1>  
        </p>
        <img src={images.pw} className="img-style" alt="Portfolio Website" width="800" height="auto"/>

        <img src={images.cc} className="img-style" alt="Crypto Cup" width="800" height="auto"/>
        <p className="desc">
          <h1>Crypto Cup</h1>
          Crypto Cup is a fantasy styled cryptocurrency app developed by me and a group of team members for
          our senior design project. Players would create cups to compete in with others by creating a portfolio
          based around different cryptocurrencies and seeing whose portfolio was worth the most by the end of the
          cup. This app was developed using Next.js and React, Firebase, and Typescript as well as incorporating
          Web 3.0 and smart contracts in order for users to connect their Ethereum wallets to the webapp so users
          could participate and win cups.
          <h1> 
            <a href="https://github.com/Nickolas-Phen/cryptocup" target="_blank" rel="noreferrer">
            <Button variant="outlined" color="primary">GitHub </Button>
            </a>
          </h1>  
        </p>

      </body>
      <body >
        <h1>Contact</h1>
        <p className="Center-header">
          Email: nickolas.phen@gmail.com
          <span className="tab"/>
          Phone #: (954)-651-5196
          <p className="Center-header">
            <a href="https://github.com/Nickolas-Phen" target="_blank" rel="noreferrer">
            <Button variant="contained" color="primary">My GitHub </Button>
            </a>
            <span className="tab"/>
              <a href="Nickolas Phen Resume.pdf" download>
                <Button variant="contained" color="primary">Resume </Button>
              </a>
          </p>
        </p>
      </body>
      <small>*RoboCode image taken from google images, original site is robocode.sourceforge.io</small>
    </React.Fragment>
    
  );
}

export default App;
