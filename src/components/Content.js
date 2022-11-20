import React, { useState } from "react";
import EduInfo from "./EduInfo";
import WorkInfo from "./WorkInfo";
import GenInfo from "./GenInfo";
import CvGenerated from "./CvGenerated";

function Content () {
    const [genInfo, setGenInfo] = useState({
        photo: '',
        fullname: '',
        email: '',
        phone: ''
    })

    const [eduInfo, setEduInfo] = useState({
        eduname: '',
        eduloc: '',
        edudeg: '',
        edumaj: '',
        edusdate: '',
        eduedate: '',
        educom: 'No'
    })

    const [workInfo, setWorkInfo] = useState({
        workname: '',
        workpos: '',
        workmt: '',
        worksdate: '',
        workedate: '',
        workcur: 'No'
    })
    
      const handleChangeGen = event => {
        const field = event.target.id;
        const value = event.target.value;
        setGenInfo(values => ({...values, [field]: value}));
      }

      const handleChangeEdu = event => {
        const field = event.target.id;
        const value = event.target.value;
        setEduInfo(values => ({...values, [field]: value}));
      }

      const handleChangeWork = event => {
        const field = event.target.id;
        const value = event.target.value;
        setWorkInfo(values => ({...values, [field]: value}));
      }

    return (
            <div id="content">
                <div id="form">
                    <GenInfo handleChange={handleChangeGen} genInfo={genInfo} />
                    <EduInfo handleChange={handleChangeEdu} eduInfo={eduInfo} />
                    <WorkInfo handleChange={handleChangeWork} workInfo={workInfo} />
                </div>
                <CvGenerated genInfo={genInfo} eduInfo={eduInfo} workInfo={workInfo} />
            </div>
        )
    
}

export default Content;