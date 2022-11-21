import React, { useState } from "react";
import { useForm } from "react-hook-form";
import EduInfo from "./EduInfo";
import WorkInfo from "./WorkInfo";
import GenInfo from "./GenInfo";
import CvGenerated from "./CvGenerated";

function Content () {
    const [genInfo, setGenInfo] = useState({
        photo: '',
        fullname: '',
        email: '',
        phone: '',
        address: '',
        introduction: '',
        skills: ''
    })

    const [eduInfo, setEduInfo] = useState([{
        eduname: 'harvard',
        eduloc: 'state',
        edudeg: 'cs',
        edumaj: 'programming',
        edusdate: '2010-06',
        eduedate: '2013-06'
    }])

    const [workInfo, setWorkInfo] = useState({
        workname: '',
        workpos: '',
        workmt: '',
        worksdate: '',
        workedate: '',
        workcur: ''
    })
    
    const handleChangeGen = event => {
      const field = event.target.id;
      const value = event.target.value;
      setGenInfo(values => ({...values, [field]: value}));
    }

    const handleChangeWork = event => {
      const field = event.target.id;
      const value = event.target.value;
      setWorkInfo(values => ({...values, [field]: value}));
    }

    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
      console.log(data);
      setEduInfo([...eduInfo, {
        eduname: data.eduname, 
        eduloc: data.eduloc,
        edudeg: data.edudeg,
        edumaj: data.edumaj,
        edusdate: data.edusdate,
        eduedate: data.eduedate 
      }]);
      console.log(eduInfo)
    }

    return (
            <div id="content">
                <div id="form">
                    <GenInfo handleChange={handleChangeGen} genInfo={genInfo} />
                    <EduInfo eduInfo={eduInfo} handleSubmit={handleSubmit} register={register} onSubmit={onSubmit} />
                    <WorkInfo handleChange={handleChangeWork} workInfo={workInfo} />
                </div>
                <CvGenerated genInfo={genInfo} eduInfo={eduInfo} workInfo={workInfo} />
            </div>
        )
    
}

export default Content;