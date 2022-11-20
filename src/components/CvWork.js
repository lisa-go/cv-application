import React from "react";

function CvWork ({ workInfo }) {
    
    
    return (
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
    )
  
}

export default CvWork;