import React, { useState } from "react";
import { useForm } from "react-hook-form";
import EduInfo from "./EduInfo";
import WorkInfo from "./WorkInfo";
import GenInfo from "./GenInfo";
import CvGenerated from "./CvGenerated";
import { v4 as uuidv4 } from 'uuid';
import defpic from '../images/defaultphoto.png';

export default function Content() {
  const [genInfo, setGenInfo] = useState({
    fullname: 'Jane Doe',
    email: 'janedoe@example.com',
    phone: '0123456789',
    address: '123 Example Street',
    introduction: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sit expedita sint recusandae, doloribus nisi, numquam ut voluptates quae nihil aliquam esse perspiciatis repudiandae voluptatibus maiores inventore. Sunt, cupiditate ex!'
  })

  const [skill, setSkill] = useState([{
    skill: 'Coding!',
    skid: uuidv4(),
    show: true
  }])

  const [eduInfo, setEduInfo] = useState([{
    eduname: 'Harvard University',
    eduloc: 'Massachusetts',
    edudeg: 'Bachelor of Computer Sciences',
    edumaj: 'Programming',
    edusdate: '2010-06',
    eduedate: '2013-06',
    eduid: uuidv4(),
    show: true
  }])

  const [workInfo, setWorkInfo] = useState([{
    workname: 'Google',
    workpos: 'Full Stack Developer',
    workmt: 'Program things',
    worksdate: '2013-10',
    workedate: '2014-06',
    workid: uuidv4(),
    show: true
  }])

  const handleChangeGen = event => {
    const field = event.target.id;
    const value = event.target.value;
    setGenInfo(values => ({ ...values, [field]: value }));
  }

  const { register, handleSubmit } = useForm();

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
    handleSubmit: handleSubmit2, } = useForm();

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

  const {
    register: register3,
    handleSubmit: handleSubmit3, } = useForm();

  const onSubmitSkill = (sdata) => {
    console.log(sdata);
    setSkill([...skill, {
      skill: sdata.skill,
      skid: uuidv4(),
      show: true
    }]);
    console.log(skill)
  }

  const removeElement = (id) => {
    const updateElements = eduInfo.map((edu) => {
      if (id === edu.eduid) {
        return { ...edu, show: false };
      }
      return edu;
    });
    setEduInfo(updateElements);
  }

  const removeElement2 = (id) => {
    const updateElements = workInfo.map((wrk) => {
      if (id === wrk.workid) {
        return { ...wrk, show: false };
      }
      return wrk;
    });
    setWorkInfo(updateElements);
  }

  const removeElement3 = (id) => {
    const updateElements = skill.map((sk) => {
      if (id === sk.skid) {
        return { ...sk, show: false };
      }
      return sk;
    });
    setSkill(updateElements);
  }

  const [file, setFile] = useState(defpic);
  const handleFile = (e) => {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
    console.log(file);
  }

  return (
    <div id="content">
      <div id="form">
        <GenInfo
          handleChange={handleChangeGen}
          genInfo={genInfo}
          handleSubmit={handleSubmit3}
          register={register3}
          onSubmit={onSubmitSkill}
          handleFile={handleFile} />

        <EduInfo
          eduInfo={eduInfo}
          handleSubmit={handleSubmit}
          register={register}
          onSubmit={onSubmitEdu} />

        <WorkInfo
          workInfo={workInfo}
          handleSubmit={handleSubmit2}
          register={register2}
          onSubmit={onSubmitWork} />
      </div>

      <CvGenerated
        genInfo={genInfo}
        skill={skill}
        eduInfo={eduInfo}
        workInfo={workInfo}
        removeElement={removeElement}
        removeElement2={removeElement2}
        removeElement3={removeElement3}
        file={file} />
    </div>
  )
}
