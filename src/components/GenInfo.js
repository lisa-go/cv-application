import React from "react";

function GenInfo ({ handleChange, genInfo, handleSubmit, register, onSubmit }) { 
    return (
      <div className="part">
        <h1>General Information</h1>
        <section>
          <div className="field" id="sphoto">
            <label htmlFor="photo">Photo</label>
            <input type="file" id="photo" name="photo" 
                  accept="image/png, image/jpeg" 
                  value={genInfo.photo} onChange={handleChange}></input>
          </div>

          <div className="field" id="sname">
            <label htmlFor="fullname">Full Name</label>
            <input type="text" id="fullname" 
              value={genInfo.fullname} onChange={handleChange}></input>
                  
          </div>

          <div className="field" id="semail">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" 
              value={genInfo.email} onChange={handleChange}></input>
          </div>

          <div className="field" id="sphone">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" 
              value={genInfo.phone} onChange={handleChange}></input>
          </div>

          <div className="field" id="saddress">
            <label htmlFor="address">Address</label>
            <input type="tel" id="address" 
              value={genInfo.address} onChange={handleChange}></input>
          </div>

          <div className="field" id="sintroduction">
            <label htmlFor="introduction">Introduction</label>
            <input type="tel" id="introduction" 
              value={genInfo.introduction} onChange={handleChange}></input>
          </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="field" id="sskills">
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

export default GenInfo;