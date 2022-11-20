import React from "react";

function CvGenerated ({ genInfo, eduInfo, workInfo }) {
    
    
    return (
        <div id="CV">
            <div className="CVgen">
                <div className="GenPhoto">{genInfo.photo}</div>
                <div className="GenName">{genInfo.fullname}</div>
                <div className="GenIntro">{genInfo.introduction}</div>
                <div className="GenSkills">{genInfo.skills}</div>
                <div className="GenPhone">{genInfo.phone}</div>
                <div className="GenEmail">{genInfo.email}</div>
                <div className="GenAddress">{genInfo.address}</div>
            </div>
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
            <div className="CVwork">
                <div className="WorkName">{workInfo.workname}</div>
                <div className="WorkDate">
                    <div className="WorkSdate">{workInfo.worksdate} to</div>
                    <div className="WorkEdate">{workInfo.workedate}</div>
                </div>
                <div className="WorkPos">{workInfo.workpos}</div>
                <div className="WorkCur">{workInfo.workcur}</div>
                <div className="WorkMt">{workInfo.workmt}</div>
            </div>

        </div>
    )
  
}

export default CvGenerated;