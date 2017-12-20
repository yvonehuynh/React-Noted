import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    render(){
        return (
            <div>
                <header className="mainHeader">
                    <h1>Noted</h1>
                    <nav>
                        <a href="">Add New Note</a>
                    </nav>
                </header>
                <section className="notes">
                
                </section>
                <aside className="sidebar">
                    <form>
                    <h3>Add New Note</h3>
                        <label htmlFor="note-title">Title</label>
                        <input type="text" name="note-title"/>
                        <label htmlFor="note-text">Text</label>
                        <textarea name="note-text" ></textarea>
                        <input type="submit" value="Add New Note"/>
                    </form>
                </aside>
            </div>
        )
    }
}
ReactDOM.render(<App/>, document.getElementById("app"));