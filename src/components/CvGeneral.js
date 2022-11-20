import React from "react";

function CvGeneral ({ genInfo }) {
    
    
    return (
        <div className="CVgen">
            <div className="GenPhoto">{genInfo.photo}</div>
            <div className="GenName">{genInfo.fullname}</div>
            <div className="GenIntro">{genInfo.introduction}</div>
            <div className="GenSkills">{genInfo.skills}</div>
            <div className="GenPhone">{genInfo.phone}</div>
            <div className="GenEmail">{genInfo.email}</div>
            <div className="GenAddress">{genInfo.address}</div>
        </div>
    )
  
}

export default CvGeneral;