import { useState, useEffect } from "react";
import { getBaseNotes } from "../../../actions/notesActions";
import "./NotesList.css";

function NotesList() {
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(false);



    useEffect(() => {
        async function fetchNotes() {
            setLoading(true);
            const notesData = await getBaseNotes();
            setNotes(notesData);
            setLoading(false); 
        };

        fetchNotes();
    }, []);

    return (
        <div className="NotesList">
            {!loading && notes &&
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