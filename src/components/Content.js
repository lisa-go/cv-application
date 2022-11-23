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

    const [workInfo, setWorkInfo] = useState([{
        workname: 'Google',
        workpos: 'Programmer',
        workmt: 'Program things',
        worksdate: '2013-10',
        workedate: '2014-06',
        workcur: 'false'
    }])
    
    const handleChangeGen = event => {
      const field = event.target.id;
      const value = event.target.value;
      setGenInfo(values => ({...values, [field]: value}));
    }

    const {register, handleSubmit} = useForm();

    const onSubmitEdu = (data) => {
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

    const {
      register: register2,
      handleSubmit: handleSubmit2,} = useForm();

    const onSubmitWork = (wdata) => {
      console.log(wdata);
      setWorkInfo([...workInfo, {
        workname: wdata.workname,
        workpos: wdata.workpos,
        workmt: wdata.workmt,
        worksdate: wdata.worksdate,
        workedate: wdata.workedate,
        workcur: wdata.workcur
      }]);
      console.log(workInfo)
    }


    return (
            <div id="content">
                <div id="form">
                    <GenInfo handleChange={handleChangeGen} genInfo={genInfo} />
                    <EduInfo eduInfo={eduInfo} handleSubmit={handleSubmit} register={register} onSubmit={onSubmitEdu} />
                    <WorkInfo workInfo={workInfo} handleSubmit={handleSubmit2} register={register2} onSubmit={onSubmitWork} />
                </div>
                <CvGenerated genInfo={genInfo} eduInfo={eduInfo} workInfo={workInfo} />
            </div>
        )
    
}

export default Content;