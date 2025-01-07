import "./NoteDetail.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNoteDetail } from "../../../state/notesSlice";
import { getNoteDetail } from "../../../actions/notesActions";

function NoteDetail() {
    const noteId = useSelector((state) => state.notes.noteId);
    const noteDetail = useSelector((state) => state.notes.noteDetail)
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchNoteDetail() {
            if (noteId && noteId != noteDetail.id) {
                try {
                    const newNoteDetail = await getNoteDetail(noteId);
                    dispatch(setNoteDetail(newNoteDetail))
                } catch (error) {}
            }
        };

        fetchNoteDetail();
    }, [noteId]);

    return (
        <div className="NoteDetail">
            <div className="container">
                <div className="NoteDetail__inner">
                    <h2 className="NoteDetail__title">{noteDetail.title}</h2>
                    <p className="NoteDetail__content">{noteDetail.content}</p>
                </div>
            </div>
        </div>
    );
};

export default NoteDetail;
