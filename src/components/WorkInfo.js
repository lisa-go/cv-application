import React from "react";
import AddBtn from "./AddBtn";
import DeleteBtn from "./DeleteBtn";

function WorkInfo () {

    return (
        <div className="part">
            <h1>Work Experience</h1>
            <section>
                <div className="field" id="sworkname">
                    <label htmlFor="workname">Company Name</label>
                    <input type="text" id="workname"></input>
                </div>

                <div className="field" id="sworkpos">
                    <label htmlFor="workpos">Position Title</label>
                    <input type="text" id="workpos"></input>
                </div>

                <div className="field" id="sworkmt">
                    <label htmlFor="workmt">Main Tasks</label>
                    <textarea id="workmt"></textarea>
                </div>

                <div className="field" id="sworksdate">
                    <label htmlFor="worksdate">Start Date</label>
                    <input type="month" id="worksdate"></input>
                </div>

                <div className="field" id="sworkedate">
                    <label htmlFor="workedate">End Date</label>
                    <input type="month" id="workedate"></input>
                </div>

                <div id="sworkcur">
                    <label htmlFor="workcur">Are you currently still working here?</label>
                    <input type="checkbox" id="workcur"></input>
                </div>

                <AddBtn />
                <DeleteBtn />
            </section>
        </div> 
    )
  
}

export default WorkInfo;