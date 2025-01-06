import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    noteId: sessionStorage.getItem("noteId"),
}

const notesSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {
        setNoteId: (state, action) => {
            state.noteId = action.payload;
            sessionStorage.setItem(action.payload);
        },
    }
});