import React from "react";
import DeleteBtn from "./DeleteBtn";

function CvWork ({ wrk, isHovering, handleMouseOver, handleMouseOut, removeElement2 }) {
    
    
    return (
        <div className="CVwork" id={wrk.workid} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >
            <div className="WorkName">{wrk.workname}</div>
            <div className="WorkDate">
                <div className="WorkSdate">{wrk.worksdate} to</div>
                <div className="WorkEdate">{wrk.workedate}</div>
            </div>
            <div className="WorkPos">{wrk.workpos}</div>
            <div className="WorkCur">{wrk.workcur}</div>
            <div className="WorkMt">{wrk.workmt}</div>

            {isHovering && (
                <DeleteBtn divid={wrk.workid} wrk={wrk} removeElement={removeElement2} />
        )}

        </div>
    )
  
}

export default CvWork;