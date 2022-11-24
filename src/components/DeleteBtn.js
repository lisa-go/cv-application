import React from "react";

function DeleteBtn ({ divid, removeElement }) {


    return (
        <button onClick={() => removeElement(divid)}>Delete</button>
    )
  
}

export default DeleteBtn;