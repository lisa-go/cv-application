import React, { useState } from "react";
import CvEducation from "./CvEducation";
import CvGeneral from "./CvGeneral";
import CvWork from "./CvWork";

function CvGenerated ({ genInfo, skill, eduInfo, workInfo, removeElement, removeElement2, removeElement3, file }) {

    const [isHovering, setIsHovering] = useState(false);
        const handleMouseOver = () => {
        setIsHovering(true);
        };
        const handleMouseOut = () => {
        setIsHovering(false);
        };

    const [isHovering1, setIsHovering1] = useState(false);
        const handleMouseOver1 = () => {
        setIsHovering1(true);
        };
        const handleMouseOut1 = () => {
        setIsHovering1(false);
        };

    return (
        <div id="CV">
            <CvGeneral file={file} genInfo={genInfo} skill={skill} removeElement={removeElement3} />
            
            <div className="title1">Education</div>
            {eduInfo.map(edu => {
                if (edu.show === true) {
                return (
                   <CvEducation key={edu.eduid} edu={edu} 
                   handleMouseOver={handleMouseOver} handleMouseOut={handleMouseOut} 
                   isHovering={isHovering} removeElement={removeElement} /> 
                )
                }
            })}
            
            <div className="title2">Work Experience</div>
            {workInfo.map(wrk => {
                if (wrk.show === true) {
                return (
                    <CvWork key={wrk.workid} wrk={wrk} 
                    handleMouseOver={handleMouseOver1} handleMouseOut={handleMouseOut1} 
                    isHovering={isHovering1} removeElement2={removeElement2} />
                )
                }
            })}
            
        </div>
    )
  
}

export default CvGenerated;