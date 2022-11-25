import React, { useState } from "react";
import DeleteBtn from "./DeleteBtn";

function CvGeneral ({ genInfo, skill, removeElement, file }) {

    const [isHovering, setIsHovering] = useState(false);
    const handleMouseOver = () => {
    setIsHovering(true);
    };
    const handleMouseOut = () => {
    setIsHovering(false);
    };
    
    return (
        <div className="CVgen">
            <div className="photoCont">
                <img src={file} id="GenPhoto" />
            </div>
            <div className="GenName">{genInfo.fullname}</div>

            <div className="header">Introduction</div>
            <div className="GenIntro">{genInfo.introduction}</div>
            <br />

            <div className="header">Skills</div>
            <ul>
            {skill.map(sk => {
                if (sk.show === true) {
                return (
                    <li key={sk.skid} onMouseOver={handleMouseOver} 
                    onMouseOut={handleMouseOut} >{sk.skill}
                    
                    {isHovering && (
                        <DeleteBtn id={sk.skid} sk={sk} removeElement={removeElement} />
                )}
                    </li>
                )
                }
            })}        
            </ul>
            <br />

            <div className="header">Contact Details</div>
            <div className="GenPhone">{genInfo.phone}</div>
            <div className="GenEmail">{genInfo.email}</div>
            <div className="GenAddress">{genInfo.address}</div>
        </div>
    )
  
}

export default CvGeneral;