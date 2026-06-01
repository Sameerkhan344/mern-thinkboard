import mongoose from "mongoose";

// 1 - we need to create a scheme
// 2-  we would create a model based off that schema

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
}, { timestamps: true }) //createdAt, updatedAt

const Note = mongoose.model("Note", noteSchema);

export default Note;