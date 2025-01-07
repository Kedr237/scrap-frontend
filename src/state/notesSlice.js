import { createSlice } from "@reduxjs/toolkit";

function getNoteIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("noteId");
};

function setNoteIdInUrl(noteId) {
    const urlParams = new URLSearchParams(window.location.search);
    if (noteId) {
        urlParams.set("noteId", noteId);
    } else {
        urlParams.delete("noteId");
    }
    const newUrl = `${window.location.pathname}?${urlParams.toString()}`;
    window.history.replaceState(null, "", newUrl);
}

const initialState = {
    noteId: getNoteIdFromUrl(),
    noteDetail: {
        id: parseInt(sessionStorage.getItem("noteId")),
        title: sessionStorage.getItem("noteTitle"),
        content: sessionStorage.getItem("noteContent") === "null" ? null : sessionStorage.getItem("noteContent"),
    },
};

const notesSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {
        setNoteId: (state, action) => {
            state.noteId = action.payload;
            setNoteIdInUrl(action.payload);
        },
        setNoteDetail: (state, action) => {
            const { id, title, content } = action.payload;
            state.noteDetail = { id, title, content };
            sessionStorage.setItem("noteId", id);
            sessionStorage.setItem("noteTitle", title);
            sessionStorage.setItem("noteContent", content);
        },
    },
});

export const { setNoteId, setNoteDetail } = notesSlice.actions;

export default notesSlice.reducer;
