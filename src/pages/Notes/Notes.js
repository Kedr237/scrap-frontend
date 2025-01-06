import NotesList from "./NotesList/NotesList";
import NoteDetail from "./NoteDetail/NoteDetail";
import "./Notes.css";

function Notes() {
    return (
      <div className="Notes">
        <NotesList />
        <NoteDetail />
      </div>      
    );
}

export default Notes;