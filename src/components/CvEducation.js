import React from "react";
import DeleteBtn from "./DeleteBtn";

function CvEducation ({ edu, isHovering, handleMouseOver, handleMouseOut, removeElement }) {
    
    return (
        <div className="CVedu" id={edu.eduid} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >
            <div className="EduName">{edu.eduname}</div>
            <div className="EduDate">
                <div className="EduSdate">{edu.edusdate} to</div>
                <div className="EduEdate">{edu.eduedate}</div>
             </div>
             <div className="EduLoc">{edu.eduloc}</div>
            <div className="EduCom">{edu.educom}</div>
            <div className="EduDeg">{edu.edudeg}</div>
            <div className="EduMaj">{edu.edumaj}</div>

            {isHovering && (
                <DeleteBtn divid={edu.eduid} edu={edu} removeElement={removeElement} />
        )}

        </div>

    )
  
}

export default CvEducation;