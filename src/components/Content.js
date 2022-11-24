import React, { useState } from "react";
import { useForm } from "react-hook-form";
import EduInfo from "./EduInfo";
import WorkInfo from "./WorkInfo";
import GenInfo from "./GenInfo";
import CvGenerated from "./CvGenerated";
import { v4 as uuidv4 } from 'uuid'; 

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
        eduedate: '2013-06',
        eduid: uuidv4(),
        show: true
    }])

    const [workInfo, setWorkInfo] = useState([{
        workname: 'Google',
        workpos: 'Programmer',
        workmt: 'Program things',
        worksdate: '2013-10',
        workedate: '2014-06',
        workid: uuidv4(),
        show: true
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
        eduedate: data.eduedate,
        eduid: uuidv4(),
        show: true
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
        workid: uuidv4(),
        show: true
      }]);
      console.log(workInfo)
    }

    const removeElement = (divid) => {
      const updateElements = eduInfo.map((edu) => {
        if (divid === edu.eduid) {
          return {...edu, show: false};
        }
        return edu;
      });
      setEduInfo(updateElements);
    }

    const removeElement2 = (divid) => {
      const updateElements = workInfo.map((wrk) => {
        if (divid === wrk.workid) {
          return {...wrk, show: false};
        }
        return wrk;
      });
      setWorkInfo(updateElements);
    }

    return (
            <div id="content">
                <div id="form">
                    <GenInfo handleChange={handleChangeGen} genInfo={genInfo} />
                    <EduInfo eduInfo={eduInfo} handleSubmit={handleSubmit} register={register} onSubmit={onSubmitEdu} />
                    <WorkInfo workInfo={workInfo} handleSubmit={handleSubmit2} register={register2} onSubmit={onSubmitWork} />
                </div>
                <CvGenerated genInfo={genInfo} eduInfo={eduInfo} workInfo={workInfo} removeElement={removeElement} removeElement2={removeElement2} />
            </div>
        )
    
}

export default Content;