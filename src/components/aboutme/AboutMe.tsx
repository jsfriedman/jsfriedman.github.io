import React, { FC } from "react";
import aboutMePic1 from '../../assets/about_me_1.jpg';
import './AboutMe.css';

const AboutMe:FC = () => {
    return(
    <div className="flexrow">
        <div>
            <img src={aboutMePic1} style={{borderRadius:'10px'}}></img>
        </div>
        <div>
            <p>My name is Jonny Friedman, and I'm trying too hard to find exactly the right words to say here so I'm just typing 
                away in hopes that by typing enough and simply getting started that getting around to exactly what I want to say will be easier.
                This website is built in React.</p>
            <br/>
            <p>For work, I do Full Stack Engineering and Data Science in Renewable Energy. 
                For <i>not</i> work, check out my Hobbies tab
            </p>
            <br/>
            <p>I figured I should have a personal site </p>
        </div>
    </div>
    )
};

export default AboutMe;