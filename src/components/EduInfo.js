import React from "react";
import AddBtn from "./AddBtn";
import DeleteBtn from "./DeleteBtn";

function EduInfo () {
    return (
        <div className="part">
            <h1>Education Information</h1>
            <section>
                <div className="field" id="seduname">
                    <label htmlFor="eduname">University Name</label>
                    <input type="text" id="eduname"></input>
                </div>

                <div className="field" id="seduloc">
                    <label htmlFor="eduloc">University Location</label>
                    <input type="text" id="eduloc"></input>
                </div>

                <div className="field" id="sedudeg">
                    <label htmlFor="edudeg">Degree</label>
                    <input type="text" id="edudeg"></input>
                </div>

                <div className="field" id="sedumaj">
                    <label htmlFor="edumaj">Major</label>
                    <input type="text" id="edumaj"></input>
                </div>

                <div className="field" id="sedusdate">
                    <label htmlFor="edusdate">Start Date</label>
                    <input type="month" id="edusdate"></input>
                </div>

                <div className="field" id="seduedate">
                    <label htmlFor="eduedate">End Date</label>
                    <input type="month" id="eduedate"></input>
                </div>

                <div id="seducom">
                    <label htmlFor="educom">Completed?</label>
                    <input type="checkbox" id="educom"></input>
                </div>

                <AddBtn />
                <DeleteBtn />
            </section> 
        </div>
    )
  
}

export default EduInfo;