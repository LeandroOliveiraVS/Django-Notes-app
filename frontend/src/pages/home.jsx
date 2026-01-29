import {useState, useEffect} from "react"
import api from "../api"
import "../styles/Home.css"
import "../styles/Note.css"
import "../styles/LoadingIndicator.css"
import Note from "../components/Note"

function Home() {
    const [notes, setNotes] = useState([]);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");


    useEffect(() => {
        getNotes();
    }, [])

    const getNotes = () => {
        api.get("/api/notes/")
        .then((res) => res.data)
        .then((data) => {setNotes(data); console.log(data)})
        .catch((err) => alert(err));
    }

    const deleteNote = (id) => {
        api.delete(`/api/notes/delete/${id}`)
        .then((res) => {
            if (res.status === 204) alert("Note deleted!")
            else alert("Failed to delete note.")
            getNotes()
        }).catch((error) => alert(error));
        
    }

    const createNote = (e) => {
        e.preventDefault()
        api.post("/api/notes/", {content, title}).then((res) => {
            if (res.status == 201) alert("Note created!")
            else alert("Faile to create note!")
            getNotes()
        }).catch((err) => alert(err))
    }

    return (
    <div>
        <div>
            <h2>Notas</h2>
            
            {notes.map((note) => 
                <div className="note">
                    <Note note={note} onDelete={deleteNote} key={note.id}/>
                </div>
            )}
            
        </div>
        <h2>Criar uma nota</h2>
        <form onSubmit={createNote}>
            <label htmlFor="title">Titulo:</label>
            <input 
                type="text" 
                name="title" 
                id="title" 
                required 
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />
            <br />
            <label htmlFor="content">Conteudo:</label>
            <textarea
                name="content"
                id="content"
                required
                onChange={(e) => setContent(e.target.value)}
                value={content}
            />
            <br />
            <input type="submit" value="Submit" />
        </form>
    </div>
    )
}

export default Home