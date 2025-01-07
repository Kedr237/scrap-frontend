import "./NoteDetail.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getNoteDetail } from "../../../actions/notesActions";

function NoteDetail() {
    const noteId = useSelector((state) => state.notes.noteId);
    const [noteTitle, setNoteTitle] = useState("");
    const [noteContent, setNoteContent] = useState("");

    useEffect(() => {
        async function fetchNoteDetail() {
            const noteDetail = await getNoteDetail(noteId);
            setNoteTitle(noteDetail[0].title);
            setNoteContent(noteDetail[0].content);
        };

        fetchNoteDetail();
    }, [noteId]);

    return (
        <div className="NoteDetail">
            <div className="container">
                <div className="NoteDetail__inner">
                    <h2 className="NoteDetail__title">{noteTitle}</h2>
                    <p className="NoteDetail__content">{noteContent}</p>
                </div>
            </div>
        </div>
    );
};

export default NoteDetail;
