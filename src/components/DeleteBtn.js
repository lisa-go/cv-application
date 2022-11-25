import React from "react";

export default function DeleteBtn({ id, removeElement }) {
    return (
        <button onClick={() => removeElement(id)}>Delete</button>
    )
}