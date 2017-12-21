import React from "react";

export default function(props){
    return (
        <div className="noteCard">
            <i className="fa fa-edit"></i>
            <i className="fa fa-times" onClick={(()=>{
                props.removeNote(props.note.key)
            })}></i>
            <h4>{props.note.titile}</h4>
            <p>{props.note.text}</p>
        </div>
    )
}
