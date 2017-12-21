import React from "react";
import ReactDOM from "react-dom";
import NoteCard from "./notesCard";

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyB6kvie2akbF6WmeFdP6nXttuB1_1Hs52c",
    authDomain: "noted-d4895.firebaseapp.com",
    databaseURL: "https://noted-d4895.firebaseio.com",
    projectId: "noted-d4895",
    storageBucket: "",
    messagingSenderId: "635844775457"
  };
  firebase.initializeApp(config);

class App extends React.Component {
    constructor(){
        super();
        this.state={
            notes: []
        }
    this.showSidebar = this.showSidebar.bind(this);
    this.addNote = this.addNote.bind(this);
    }
    componentDidMount(){
        firebase.database().ref().on("value", (res)=>{
            const userData = res.val();
            const dataArray = [];
            for(let objKey in userData) {
                userData[objKey].key = objKey;
                dataArray.push(userData[objKey])
            }   
            this.setState({
                notes: dataArray
            })
        });
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

        const dbRef = firebase.database().ref();
        dbRef.push(note);
        
        this.noteText.value = "",
        this.noteText.value ="",
        this.showSidebar(e);
    }
    removeNote(noteId){

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
                            <NoteCard note={note} key={`note-${i}`} removeNote={this.removeNote}/>
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