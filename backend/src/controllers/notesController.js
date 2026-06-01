import Note from "../models/Note.js";

export async function getAllNotes(_, res) {
    try {
        const note = await Note.find().sort({ createdAt: -1 }); // -1 will sort in desc (newsest first)
        res.status(200).json(note);
    } catch (error) {
        console.log("Error in getAllNotes Controller", error)
        res.status(500).json({ message: "Internal Server error" })
    }
}
export async function getNoteById(req, res) {
    try {
        const note = await Note.findById(req.params.id);
        if (!note) return res.json({ message: "note not found" })
        res.status(200).json(note);
    } catch (error) {
        console.log("Error in getNoteById Controller", error)
        res.status(500).json({ message: "Internal Server error" })
    }
}
export async function createNotes(req, res) {
    try {
        const { title, content } = req.body;
        const note = new Note({ title, content });

        const savedNote = await note.save();
        res.status(201).json(savedNote)
    } catch (error) {
        console.log("Error in createNotes Controller", error)
        res.status(500).json({ message: "Internal Server error" })
    }
}
export async function updateNotes(req, res) {
    try {
        const { title, content } = req.body;
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, { title, content }, {
            new: true
        });
        if (!updatedNote) return res.status(400).json({ message: "Note not found" })
        res.status(200).json(updatedNote);
    } catch (error) {
        console.log("Error in updateNotes Controller", error)
        res.status(500).json({ message: "Internal Server error" })
    }
}
export async function deleteNotes(req, res) {
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id);
        if (!deletedNote) return res.status(400).json({ message: "Note not found" });
        res.status(200).json({ message: "Note deleted Successfully" });
    } catch (error) {
        console.log("Error in deleteNotes Controller", error)
        res.status(500).json({ message: "Internal Server error" })
    }

}