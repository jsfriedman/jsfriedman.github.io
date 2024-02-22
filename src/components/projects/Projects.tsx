import React, { useState } from "react";
import "./Projects.css";
import Shelfscan from "../shelfscan/Shelfscan";

const Projects = () => {

    const [displayShelfscan, setDisplayShelfscan] = useState<boolean>(false);

    if(displayShelfscan){
        return(<Shelfscan/>);
    }
    else{
    return(
    <>
        <div className="centered-button">
            <button onClick={() => setDisplayShelfscan(true)} style={{height:'128px', width:'256px', margin:'16px'}}>Shelfscan</button>
        </div>
    </>
    )}
    
}
export default Projects;