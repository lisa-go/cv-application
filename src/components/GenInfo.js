import React from "react";

export default function GenInfo({ handleChange, genInfo, handleSubmit, register, onSubmit, handleFile }) {
  return (
    <div className="part">
      <h1>General Information</h1>
      <section>
        <div className="field">
          <label htmlFor="photo">Photo</label>
          <input type="file" id="photo" name="photo"
            accept="image/png, image/jpeg"
            onChange={handleFile}></input>
        </div>

        <div className="field">
          <label htmlFor="fullname">Full Name</label>
          <input type="text" id="fullname"
            value={genInfo.fullname} onChange={handleChange}></input>

        </div>

        <div className="field">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email"
            value={genInfo.email} onChange={handleChange}></input>
        </div>

        <div className="field">
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone"
            value={genInfo.phone} onChange={handleChange}></input>
        </div>

        <div className="field">
          <label htmlFor="address">Address</label>
          <input type="tel" id="address"
            value={genInfo.address} onChange={handleChange}></input>
        </div>

        <div className="field">
          <label htmlFor="introduction">Introduction</label>
          <input type="tel" id="introduction"
            value={genInfo.introduction} onChange={handleChange}></input>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="field">
            <label htmlFor="skills">Skills</label>
            <input type="tel" id="skills"
              {...register('skill')}></input>
          </div>
          <button type="submit">Add Skill</button>
        </form>
      </section>

    </div>
  )
}