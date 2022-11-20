import React from "react";

function CvGenerated ({ genInfo, eduInfo, workInfo }) {
    
    
    return (
        <div id="CV">
            <div className="CVname">{genInfo.fullname}</div>
           
            {eduInfo.eduname}
            {workInfo.workname}
        </div>
    )
  
}

export default CvGenerated;