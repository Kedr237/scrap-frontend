import "./NoteDetail.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNoteDetail } from "../../../state/notesSlice";
import { getNoteDetail } from "../../../actions/notesActions";

function NoteDetail() {
    const newId = useSelector((state) => state.notes.newId);
    const noteDetail = useSelector((state) => state.notes.noteDetail)
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchNoteDetail() {
            if (newId && newId != noteDetail.id) {
                try {
                    const newNoteDetail = await getNoteDetail(newId);
                    console.log(newNoteDetail[0])
                    dispatch(setNoteDetail(newNoteDetail[0]))
                } catch (error) {}
            }
        };

        fetchNoteDetail();
    }, [newId]);

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
