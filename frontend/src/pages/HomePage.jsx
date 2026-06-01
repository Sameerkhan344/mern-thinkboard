import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import RateLimitedUi from "../components/RateLimitedUi";
import { toast } from "react-toastify";
import NoteCard from "../components/NoteCard";
import api from "../lib/axios";
import NotesNoteFound from "../components/NotesNoteFound";

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await api.get("/notes");
        setNotes(res.data);
        // console.log(res.data);
        setIsRateLimited(false);
      } catch (error) {
        // console.log("Error fetching notes");
        if (error.response?.status === 429) {
          setIsRateLimited(true);
        } else {
          toast.error("Failed to load notes");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchNotes();
  }, []);

  return (
    <>
    <div className="min-h-screen">
      <Navbar />
      {isRateLimited && <RateLimitedUi />}
      {notes.length === 0 && !isRateLimited && <NotesNoteFound />}
      <div className="max-w-7xl mx-auto p-4 mt-6">
        {loading && (
          <div className="items-center text-primary py-10">
            Loading notes...
          </div>
        )}
        {notes.length > 0 && !isRateLimited && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note) => (
              <div key={note._id}>
                <NoteCard key={note._id} note={note} setNotes={setNotes} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default HomePage;
