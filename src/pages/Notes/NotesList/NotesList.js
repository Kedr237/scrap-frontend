import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getBaseNotes, getNoteDetail } from "../../../actions/notesActions";
import "./NotesList.css";

function NotesList() {
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(false);
    const authenticated = useSelector((state) => state.auth.authenticated);

    async function fetchNoteDetail(id) {
        const noteDetail = await getNoteDetail(id);
    };

    useEffect(() => {
        async function fetchNotes() {
            if (authenticated === true) {
                setLoading(true);
                const notesData = await getBaseNotes();
                setNotes(notesData);
                setLoading(false); 
            } 
        };

        fetchNotes();
    }, [authenticated]);

    return (
        <div className="NotesList">
            {!loading && notes &&
                <ul>
                    {notes.map((note, index) => (
                        <li key={index} onClick={() => fetchNoteDetail(note.id)}>{note.title}</li>
                    ))}
                </ul>
            }
        </div>
    );
};

export default NotesList;