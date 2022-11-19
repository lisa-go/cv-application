import React from "react";

function GenInfo () { 

    return (
      <div className="part">
        <h1>General Information</h1>
        <section>
          <div className="field" id="sphoto">
            <label htmlFor="photo">Photo</label>
            <input type="file" id="photo" name="photo" 
                  accept="image/png, image/jpeg"></input>
          </div>

          <div className="field" id="sname">
            <label htmlFor="fullname">Full Name</label>
            <input type="text" id="fullname"></input>
                  
          </div>

          <div className="field" id="semail">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email"></input>
          </div>

          <div className="field" id="sphone">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone"></input>
          </div>
        </section>

        
      </div>
    )
  
}

export default GenInfo;