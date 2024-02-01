import { FC } from "react";
import './Header.css';

interface headerProps {
    buttonOnClickFn: (section:string) => void;
    activeSection: string;
};

const Header: FC<headerProps> = ({buttonOnClickFn, activeSection}) => {

    const projects = ['Shelfscan'];
    const button1Label = "About Me";
    const button2Label = "Resume";
    const button3Label = "Projects";
    const button4Label = "Thoughts";

    return(
        <div className="header">
            <button onClick={() => buttonOnClickFn(button1Label)} className={activeSection===button1Label ? "highlited" : "normal"}>{button1Label}</button>
            <button onClick={() => buttonOnClickFn(button2Label)} className={activeSection===button2Label ? "highlited" : "normal"}>{button2Label}</button>
            <button onClick={() => buttonOnClickFn(button3Label)} className={activeSection===button3Label ? "highlited" : "normal"}>{button3Label}</button>
            {activeSection===button3Label && projects.map((project)=>(<button onClick={() => buttonOnClickFn(project)} className={activeSection===project ? "highlited" : "normal"}>{project}</button>))}
            <button onClick={() => buttonOnClickFn(button4Label)} className={activeSection===button4Label ? "highlited" : "normal"}>{button4Label}</button>
        </div>
    )
}
export default Header;