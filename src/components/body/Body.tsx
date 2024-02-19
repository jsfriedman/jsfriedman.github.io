import React, { FC } from "react";
import birdLogo from '../../assets/bird_transparent.png';
import './Body.css';
import AboutMe from "../aboutme/AboutMe";
import Shelfscan from "../shelfscan/Shelfscan";

interface bodyProps {
    activeSection: string;
};

const Body: FC<bodyProps> = ({ activeSection }) => {
    return (
        <div className='centered'>
            {(activeSection === 'Resume' || activeSection==='Thoughts') &&
                <>
                    <h1>Under Construction</h1>
                    <img src={birdLogo} width="25%" height="25%"></img>
                </>
            }
            {activeSection==='About Me' && <AboutMe/>}
            {activeSection === 'Shelfscan' && <Shelfscan/>}
        </div>
    )
}
export default Body;