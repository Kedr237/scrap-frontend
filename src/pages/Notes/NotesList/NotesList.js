import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getBaseNotes } from "../../../actions/notesActions";
import "./NotesList.css";

function NotesList() {
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(false);
    const refreshToken = useSelector((state) => state.auth.refreshToken);

    // useEffect(() => {
    //     async function fetchNotes() {
    //         setLoading(true);
    //         const notesData = await getBaseNotes();
    //         setNotes(notesData);
    //         setLoading(false); 
    //     };

    //     fetchNotes();
    // }, [refreshToken]);

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