import React, { useState } from "react";

function GenInfo (props) { 
  const [genInfo, setGenInfo] = useState({
    photo: '',
    fullname: '',
    email: '',
    phone: ''
  })

  const handleChange = event => {
    const field = event.target.id;
    const value = event.target.value;
    setGenInfo(values => ({...values, [field]: value}));
    props.onChange(genInfo);
  }

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
        </section>

      </div>
    )
}

export default GenInfo;