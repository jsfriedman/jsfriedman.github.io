import React, { FC } from "react";
import aboutMePic1 from '../../assets/about_me_1.jpg';
import './AboutMe.css';

const AboutMe:FC = () => {
    return(
    <div className="flexrow">
        <img src={aboutMePic1}></img>
        <div>
            <p>My name is Jonny Friedman, and I'm trying too hard to find exactly the right words to say here so I'm just typing 
                away in hopes that by typing enough and simply getting started that getting around to exactly what I want to say will be easier.
                I built this website using React. </p>
            <br/>
            <p>This might actually be the hardest part of putting this whole website together. I do lots of things, all the time. For work, I do Full Stack Engineering and Data Science in Renewable Energy.</p>
            <br/>
            <p>I figured I should have a personal site </p>
        </div>
    </div>
    )
};

export default AboutMe;