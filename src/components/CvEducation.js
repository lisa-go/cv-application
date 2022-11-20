import React from "react";

function CvEducation ({ eduInfo }) {
    
    
    return (
        <div className="CVedu">
            <div className="EduName">{eduInfo.eduname}</div>
            <div className="EduDate">
                <div className="EduSdate">{eduInfo.edusdate} to</div>
                <div className="EduEdate">{eduInfo.eduedate}</div>
             </div>
             <div className="EduLoc">{eduInfo.eduloc}</div>
            <div className="EduCom">{eduInfo.educom}</div>
            <div className="EduDeg">{eduInfo.edudeg}</div>
            <div className="EduMaj">{eduInfo.edumaj}</div>
        </div>

    )
  
}

export default CvEducation;