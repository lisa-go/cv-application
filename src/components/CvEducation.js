import React from "react";
import DeleteBtn from "./DeleteBtn";

export default function CvEducation({ edu, isHovering, handleMouseOver, handleMouseOut, removeElement }) {
    return (
        <div className="CVedu" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >
            <div className="EduName">{edu.eduname}</div>
            <div className="EduDate">
                <div className="EduSdate">{edu.edusdate} to</div>
                <div className="EduEdate">{edu.eduedate}</div>
            </div>
            <div className="EduLoc">{edu.eduloc}</div>
            <div className="EduDeg">{edu.edudeg}</div>
            <div className="EduMaj">{edu.edumaj}</div>

            {isHovering && (
                <DeleteBtn id={edu.eduid} edu={edu} removeElement={removeElement} />
            )}

        </div>
    )
}