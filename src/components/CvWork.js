import React from "react";

function CvWork ({ wrk }) {
    
    
    return (
        <div className="CVwork">
            <div className="WorkName">{wrk.workname}</div>
            <div className="WorkDate">
                <div className="WorkSdate">{wrk.worksdate} to</div>
                <div className="WorkEdate">{wrk.workedate}</div>
            </div>
            <div className="WorkPos">{wrk.workpos}</div>
            <div className="WorkCur">{wrk.workcur}</div>
            <div className="WorkMt">{wrk.workmt}</div>
        </div>
    )
  
}

export default CvWork;