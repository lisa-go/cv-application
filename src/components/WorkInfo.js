import React from "react";

function WorkInfo ({ handleChange, workInfo }) {

    return (
        <div className="part">
            <h1>Work Experience</h1>
            <section>
                <div className="field" id="sworkname">
                    <label htmlFor="workname">Company Name</label>
                    <input type="text" id="workname"
                        value={workInfo.workname} onChange={handleChange}></input>
                </div>

                <div className="field" id="sworkpos">
                    <label htmlFor="workpos">Position Title</label>
                    <input type="text" id="workpos"
                        value={workInfo.workpos} onChange={handleChange}></input>
                </div>

                <div className="field" id="sworkmt">
                    <label htmlFor="workmt">Main Tasks</label>
                    <textarea id="workmt"
                        value={workInfo.workmt} onChange={handleChange}></textarea>
                </div>

                <div className="field" id="sworksdate">
                    <label htmlFor="worksdate">Start Date</label>
                    <input type="month" id="worksdate"
                        value={workInfo.worksdate} onChange={handleChange}></input>
                </div>

                <div className="field" id="sworkedate">
                    <label htmlFor="workedate">End Date</label>
                    <input type="month" id="workedate"
                        value={workInfo.workedate} onChange={handleChange}></input>
                </div>

                <div id="sworkcur">
                    <label htmlFor="workcur">Are you currently still working here?</label>
                    <input type="checkbox" id="workcur"
                        value={workInfo.workcur} onChange={handleChange}></input>
                </div>

            </section>
        </div> 
    )
  
}

export default WorkInfo;