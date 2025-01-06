import { useState } from "react";
import { getBaseNotes } from "../../../actions/notesActions";
import "./NotesList.css";

function NotesList() {
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(false);

    async function handleGetNotes() {
        setLoading(true);
        const notesData = await getBaseNotes();
        setNotes(notesData);
        setLoading(false);  
    };

    return (
        <div className="NotesList">
            <button onClick={() => handleGetNotes()}>Get notes</button>
            <br />
            <br />
            {!loading &&
                <ul>
                    {notes.map((note, index) => (
                        <li key={index}>{note.title}</li>
                    ))}
                </ul>
            }
        </div>
    );
}

export default NotesList;