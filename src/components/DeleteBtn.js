import React from "react";

function DeleteBtn ({ id, removeElement }) {

    return (
        <button onClick={() => removeElement(id)}>Delete</button>
    )
  
}

export default DeleteBtn;