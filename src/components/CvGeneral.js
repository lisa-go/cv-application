import React, { useState } from "react";
import DeleteBtn from "./DeleteBtn";
import callIcon from "../images/call.svg";
import emailIcon from "../images/alternate_email.svg";
import homeIcon from "../images/home.svg";

export default function CvGeneral({ genInfo, skill, removeElement, file }) {

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
            <div className="GenCon">
                <img src={callIcon} />
                {genInfo.phone}
            </div>
            <div className="GenCon">
                <img src={emailIcon} />
                {genInfo.email}
            </div>
            <div className="GenCon">
                <img src={homeIcon} />
                {genInfo.address}
            </div>
        </div>
    )
}