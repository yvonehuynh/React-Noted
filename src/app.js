import React from "react";
import ReactDOM from "react-dom";
import NoteCard from "./notesCard";

class App extends React.Component {
    constructor(){
        super();
        this.state={
            notes: []
        }
    this.showSidebar = this.showSidebar.bind(this);
    this.addNote = this.addNote.bind(this);
    }
    showSidebar(e) {
        e.preventDefault();
        this.sideBar.classList.toggle("show");
    }
    addNote(e){
        e.preventDefault();
        const note = {
            title: this.noteTtitle.value,
            text: this.noteText.value
        }
        const newNotes = Array.from(this.state.notes);
        newNotes.push(note);
        this.setState({
            notes: newNotes
        })
        this.noteText.value = "",
        this.noteText.value ="",
        this.showSidebar(e);
    }
    render(){
        return (
            <div>
                <header className="mainHeader">
                    <h1>Noted</h1>
                    <nav>
                        <a href="" onClick={e => this.showSidebar(e)}>Add New Note</a>
                    </nav>
                </header>
                <section className="notes">
                    {this.state.notes.map((note, i) => {
                        return (
                            <NoteCard note={note} key={`note-${i}`}/>
                        )
                    }).reverse()}
                </section>
                <aside className="sidebar" ref={ref=>this.sideBar = ref}>
                    <form onSubmit={this.addNote}>
                        <h3>Add New Note</h3>
                        <div className="close-btn" onClick={this.showSidebar}>
                            <i className="fa fa-times"></i>
                        </div>
                        <label htmlFor="note-title">Title</label>
                        <input type="text" name="note-title" ref={ref => this.noteTtitle = ref}/>
                        <label htmlFor="note-text">Text</label>
                        <textarea name="note-text" ref={ref =>this.noteText = ref}></textarea>
                        <input type="submit" value="Add New Note"/>
                    </form>
                </aside>
            </div>
        )
    }
}
ReactDOM.render(<App/>, document.getElementById("app"));