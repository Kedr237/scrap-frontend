import apiClient from "../api/apiClient";
import { NOTES_URL } from "../helpers/config";

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