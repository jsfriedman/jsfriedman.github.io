import React from "react";
import resume from '../../assets/resume.pdf';

const Resume = () => {
    return(
    <>
        <iframe src={resume} width="75%" height="1000px" style={{marginTop: '24px'}}></iframe>
    </>
    )
};
export default Resume;