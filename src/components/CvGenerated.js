import React from "react";
import CvEducation from "./CvEducation";
import CvGeneral from "./CvGeneral";
import CvWork from "./CvWork";

function CvGenerated ({ genInfo, eduInfo, workInfo }) {

    return (
        <div id="CV">
            <CvGeneral genInfo={genInfo} />
            <CvEducation eduInfo={eduInfo} />
            <CvWork workInfo={workInfo} />
        </div>
    )
  
}

export default CvGenerated;