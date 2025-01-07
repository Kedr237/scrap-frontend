import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    newId: sessionStorage.getItem("newNoteId"),
    noteDetail: {
        id: sessionStorage.getItem("noteId"),
        title: sessionStorage.getItem("noteTitle"),
        content: sessionStorage.getItem("noteContent"),
    },
};

const notesSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {
        setNewId: (state, action) => {
            state.newId = action.payload;
            sessionStorage.setItem("newNoteId", action.payload);
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

export const { setNewId, setNoteDetail } = notesSlice.actions;

export default notesSlice.reducer;
