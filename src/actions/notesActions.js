import apiClient from "../api/apiClient";
import { NOTES_URL } from "../helpers/config";
import { NOTE_PATH } from "../helpers/paths";

export async function getBaseNotes(parent="null") {
    try {
        const response = await apiClient.get(`${NOTES_URL}?parent=${parent}`);
        return response.data;
    } catch (error) {
        console.error("Error receiving notes.");
    }
};

export async function getNoteDetail(id) {
    try {
        const response = await apiClient.get(`${NOTES_URL}?id=${id}`);
        return response.data;
    } catch (error) {
        console.error("Error receiving note detail.");
    }
}

export async function createNote() {
    const note = {
        title: "Undefined",
    }

    try {
        const response = await apiClient.post(`${NOTES_URL}`, note);
        window.location.href = `${NOTE_PATH}?noteId=${response.data.id}`;
    } catch (error) {
        console.log("Error creating note.")
    }
};