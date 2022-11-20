import React from "react";
import AddBtn from "./AddBtn";
import DeleteBtn from "./DeleteBtn";

function EduInfo ({ handleChange, eduInfo }) {
    return (
        <div className="part">
            <h1>Education Information</h1>
            <section>
                <div className="field" id="seduname">
                    <label htmlFor="eduname">University Name</label>
                    <input type="text" id="eduname"
                        value={eduInfo.eduname} onChange={handleChange}></input>
                </div>

                <div className="field" id="seduloc">
                    <label htmlFor="eduloc">University Location</label>
                    <input type="text" id="eduloc"
                        value={eduInfo.eduloc} onChange={handleChange}></input>
                </div>

                <div className="field" id="sedudeg">
                    <label htmlFor="edudeg">Degree</label>
                    <input type="text" id="edudeg"
                        value={eduInfo.edudeg} onChange={handleChange}></input>
                </div>

                <div className="field" id="sedumaj">
                    <label htmlFor="edumaj">Major</label>
                    <input type="text" id="edumaj"
                        value={eduInfo.edumaj} onChange={handleChange}></input>
                </div>

                <div className="field" id="sedusdate">
                    <label htmlFor="edusdate">Start Date</label>
                    <input type="month" id="edusdate"
                        value={eduInfo.edusdate} onChange={handleChange}></input>
                </div>

                <div className="field" id="seduedate">
                    <label htmlFor="eduedate">End Date</label>
                    <input type="month" id="eduedate"
                        value={eduInfo.eduedate} onChange={handleChange}></input>
                </div>

                <div id="seducom">
                    <label htmlFor="educom">Completed?</label>
                    <input type="checkbox" id="educom"
                        value={eduInfo.educom} onChange={handleChange}></input>
                </div>

                <AddBtn />
                <DeleteBtn />
            </section> 
        </div>
    )
  
}

export default EduInfo;