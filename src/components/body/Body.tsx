import React, { FC } from "react";
import birdLogo from '../../assets/bird_transparent.png';
import './Body.css';

interface bodyProps {
    activeSection: string;
};

const Body: FC<bodyProps> = ({ activeSection }) => {
    return (
        <div className='centered'>
            {activeSection === 'Home' &&
                <>
                    <h1>Under Construction</h1>
                    <img src={birdLogo} width="25%" height="25%"></img>
                </>
            }
            {activeSection && <p>{activeSection}</p>}
        </div>
    )
}
export default Body;