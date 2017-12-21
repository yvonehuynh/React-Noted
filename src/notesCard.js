import React from "react";

export default class NoteCard extends React.Component{
    constructor(){
        super();
        this.state={
            editing: false,
            note: {}
        }
    }
    componentDidMount(){
        this.setState({
            note: this.props.note
        })
    }
    render(){
        return (
            <div className="noteCard">
                <i className="fa fa-edit"></i>
                <i className="fa fa-times" onClick={(()=>{
                    props.removeNote(this.state.note.key)
                })}></i>
                <h4>{this.state.note.title}</h4>
                <p>{this.state.note.text}</p>
            </div>
        )
    }
}
