import React from "react";

export default function EduInfo({ eduInfo, handleSubmit, register, onSubmit }) {
    return (
        <div className="part">
            <h1>Education Information</h1>
            <section>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="field">
                        <label htmlFor="eduname">University Name</label>
                        <input type="text" id="eduname"
                            {...register('eduname')} />
                    </div>

                    <div className="field">
                        <label htmlFor="eduloc">University Location</label>
                        <input type="text" id="eduloc"
                            {...register('eduloc')} />
                    </div>

                    <div className="field">
                        <label htmlFor="edudeg">Degree</label>
                        <input type="text" id="edudeg"
                            {...register('edudeg')} />
                    </div>

                    <div className="field">
                        <label htmlFor="edumaj">Major</label>
                        <input type="text" id="edumaj"
                            {...register('edumaj')} />
                    </div>

                    <div className="field">
                        <label htmlFor="edusdate">Start Date</label>
                        <input type="month" id="edusdate"
                            {...register('edusdate')} />
                    </div>

                    <div className="field">
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