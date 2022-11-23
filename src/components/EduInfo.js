import React from "react";

function EduInfo ({ eduInfo, handleSubmit, register, onSubmit }) {
    return (
        <div className="part">
            <h1>Education Information</h1>
            <section>
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="field" id="seduname">
                    <label htmlFor="eduname">University Name</label>
                    <input type="text" id="eduname"
                        {...register('eduname')} />
                </div>

                <div className="field" id="seduloc">
                    <label htmlFor="eduloc">University Location</label>
                    <input type="text" id="eduloc"
                        {...register('eduloc')} />
                </div>

                <div className="field" id="sedudeg">
                    <label htmlFor="edudeg">Degree</label>
                    <input type="text" id="edudeg"
                        {...register('edudeg')} />
                </div>

                <div className="field" id="sedumaj">
                    <label htmlFor="edumaj">Major</label>
                    <input type="text" id="edumaj"
                        {...register('edumaj')} />
                </div>

                <div className="field" id="sedusdate">
                    <label htmlFor="edusdate">Start Date</label>
                    <input type="month" id="edusdate"
                        {...register('edusdate')} />
                </div>

                <div className="field" id="seduedate">
                    <label htmlFor="eduedate">End Date</label>
                    <input type="month" id="eduedate"
                        {...register('eduedate')} />
                </div>

                <button type="submit">Add</button>
                </form>
            </section> 
        </div>
    )
  
}

export default EduInfo;