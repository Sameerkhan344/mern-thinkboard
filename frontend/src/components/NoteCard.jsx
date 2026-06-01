import { PenSquareIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router";
import { formatDate } from "../lib/utils";
import { toast } from "react-toastify";
import api from "../lib/axios";
const NoteCard = ({ note, setNotes }) => {
  const handleDelete = async (e, id) => {
    e.preventDefault();
    if (!window.confirm("Are you sure you want to delete this note?")) return;
      try {
        await api.delete(`/notes/${id}`);
        toast.success("Note deleted successfully");
        setNotes((preNotes)=> preNotes.filter((note)=> note._id !== id)); //it will update the notes state by removing the deleted note, which will trigger a re-render and update the UI accordingly.
      } catch (error) {
        console.log("Error in handleDelete", error);
        toast.error("Failed note deleted");
      }


    // console.log(id);
  };
  return (
    <Link to={`/note/${note._id}`} className="">
      <div className="card bg-base-100 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-[#00FF9D]">
        <div className="card-body">
          <h3 className="cart-title text-base-content">{note.title}</h3>
          <p className="text-base-content/70 line-clamp-3">{note.content}</p>
          <div className="card-actions justify-between items-center mt-4">
            <span className="text-sm text-base-content/60">
              {formatDate(new Date(note.createdAt))}
            </span>
            <div className="flex items-center gap-1">
              <PenSquareIcon className="size-4" />
              <button
                className="btn btn-ghost btn-xs text-error"
                onClick={(e) => handleDelete(e, note._id)}
              >
                <Trash2Icon className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NoteCard;
