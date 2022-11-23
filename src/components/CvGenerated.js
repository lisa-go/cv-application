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
                   <CvEducation key={edu.eduid} edu={edu} /> 
                )
            })}
            
            {workInfo.map(wrk => {
                return (
                    <CvWork key={wrk.workid} wrk={wrk} />
                )
            })}
            
        </div>
    )
  
}

export default CvGenerated;