import React, { FC } from "react";
import './Header.css';

interface headerProps {
    buttonOnClickFn: (section:string) => void;
    activeSection: string;
};

const Header: FC<headerProps> = ({buttonOnClickFn, activeSection}) => {

    const projects = ['Shelfscan'];

    return(
        <div className="header">
            <button onClick={() => buttonOnClickFn("Home")}>Home</button>
            <button onClick={() => buttonOnClickFn("About Me")}>About Me</button>
            <button onClick={() => buttonOnClickFn("Resume")}>Resume</button>
            <button onClick={() => buttonOnClickFn("Projects")}>Projects</button>
            {activeSection==='Projects' && projects.map((project)=>(<button onClick={() => buttonOnClickFn(project)}>{project}</button>))}
            <button onClick={() => buttonOnClickFn("Thoughts")}>Thoughts</button>
        </div>
    )
}
export default Header;