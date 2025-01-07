import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setNoteId } from "../../../state/notesSlice";
import { getBaseNotes } from "../../../actions/notesActions";
import "./NotesList.css";

function NotesList() {
    const [notes, setNotes] = useState([]);
    const authenticated = useSelector((state) => state.auth.authenticated);
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchNotes() {
            const notesData = await getBaseNotes();
            setNotes(notesData);
        };

        fetchNotes();
    }, [authenticated]);

    return (
        <div className="NotesList">
            {notes &&
                <ul className="NotesList__list">
                    {notes.map((note, index) => (
                        <li
                            className="NotesList__item"
                            key={index}
                            onClick={() => dispatch(setNoteId(note.id))}
                        >{note.title}</li>
                    ))}
                </ul>
            }
        </div>
    );
};

export default NotesList;
