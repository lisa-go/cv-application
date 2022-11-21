import React from "react";
import CvEducation from "./CvEducation";
import CvGeneral from "./CvGeneral";
import CvWork from "./CvWork";

function CvGenerated ({ genInfo, eduInfo, workInfo }) {

    return (
        <div id="CV">
            <CvGeneral genInfo={genInfo} />
            
            {eduInfo.map(edu => {
                return (
                   <CvEducation eduInfo={eduInfo} edu={edu} /> 
                )
            })}
            
            <CvWork workInfo={workInfo} />
        </div>
    )
  
}

export default CvGenerated;