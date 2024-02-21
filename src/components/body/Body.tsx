import React, { FC } from "react";
import birdLogo from '../../assets/bird_transparent.png';
import './Body.css';
import AboutMe from "../aboutme/AboutMe";
import Shelfscan from "../shelfscan/Shelfscan";
import Hobbies from "../hobbies/Hobbies";
import Resume from "../resume/Resume";

interface bodyProps {
    activeSection: string;
};

const Body: FC<bodyProps> = ({ activeSection }) => {
    return (
        <div className='centered'>
            {activeSection==='About Me' && <AboutMe/>}
            {activeSection==='Resume' && <Resume/>}
            {activeSection === 'Shelfscan' &&<Shelfscan/>}
            {activeSection === 'Hobbies' && <Hobbies/>}

        </div>
    )
}
export default Body;