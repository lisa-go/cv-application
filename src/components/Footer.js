import React from "react";
import giticon from "../images/GitHub-Mark-Light.png"

export default function Footer() {
    return (
        <div id="footer">
            <a href="https://github.com/lisa-go">
                <img src={giticon} />
                Made by Lisa
            </a>
        </div>
    )
}