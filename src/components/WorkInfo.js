import React from "react";

function WorkInfo ({ handleSubmit, register, onSubmit, workInfo }) {

    return (
        <div className="part">
            <h1>Work Experience</h1>
            <section>
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="field" id="sworkname">
                    <label htmlFor="workname">Company Name</label>
                    <input type="text" id="workname"
                        {...register('workname')} />
                </div>

                <div className="field" id="sworkpos">
                    <label htmlFor="workpos">Position Title</label>
                    <input type="text" id="workpos"
                        {...register('workpos')} />
                </div>

                <div className="field" id="sworkmt">
                    <label htmlFor="workmt">Main Tasks</label>
                    <textarea id="workmt"
                        {...register('workmt')} />
                </div>

                <div className="field" id="sworksdate">
                    <label htmlFor="worksdate">Start Date</label>
                    <input type="month" id="worksdate"
                        {...register('worksdate')} />
                </div>

                <div className="field" id="sworkedate">
                    <label htmlFor="workedate">End Date</label>
                    <input type="month" id="workedate"
                        {...register('workedate')} />
                </div>

                <div id="sworkcur">
                    <label htmlFor="workcur">Are you currently still working here?</label>
                    <input type="checkbox" id="workcur"
                        {...register('workcur')} />
                </div>

                <button type="submit">Add</button>
            </form>
            </section>
        </div> 
    )
  
}

export default WorkInfo;