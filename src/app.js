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
                    <div className="noteCard">
                    <i className="fa fa-edit"></i>
                    <i className="fa fa-lines"></i>
                    <h4>Test Note</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor fuga aliquam ipsa. Repellat, tempore et minus iste consequatur quia iusto laboriosam aspernatur at ipsam. Eaque saepe iusto tempora neque vel.</p>
                    </div>
                </section>
                <aside className="sidebar">
                    <form>
                        <h3>Add New Note</h3>
                        <div className="close-btn">
                            <i className="fa fa-times"></i>
                        </div>
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