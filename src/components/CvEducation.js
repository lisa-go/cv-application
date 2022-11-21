import React from "react";

function CvEducation ({ eduInfo, edu }) {
    
    
    return (
        <div className="CVedu">

            <div className="EduName">{edu.eduname}</div>
            <div className="EduDate">
                <div className="EduSdate">{edu.edusdate} to</div>
                <div className="EduEdate">{edu.eduedate}</div>
             </div>
             <div className="EduLoc">{edu.eduloc}</div>
            <div className="EduCom">{edu.educom}</div>
            <div className="EduDeg">{edu.edudeg}</div>
            <div className="EduMaj">{edu.edumaj}</div>
        </div>

    )
  
}

export default CvEducation;