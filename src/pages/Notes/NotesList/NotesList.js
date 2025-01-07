import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setNoteId } from "../../../state/notesSlice";
import { createNote, getBaseNotes } from "../../../actions/notesActions";
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
            <div className="NotesList__container">
                <svg
                    className="NotesList__plus"
                    viewBox="0 0 24 24" fill="none"
                    onClick={createNote}
                >
                    <path fillRule="evenodd" clipRule="evenodd" d="M2 2H22V22H2V2ZM11.25 18V12.75H6V11.25H11.25V6H12.75V11.25H18V12.75H12.75V18H11.25Z" fill="#000000"/>
                </svg>

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
        </div>
    );
};

export default NotesList;
