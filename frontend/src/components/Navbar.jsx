import { PlusIcon } from "lucide-react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <header className="bg-base-300 border-b border-base-content/10">
      <div className="mx-auto max-w-6xl p-4">
        <div className="flex justify-between items-center">
        <h1 className="font-bold text-3xl text-primary font-mono tracking-tighter">Thinkboard</h1>
        <div className="flex gap-4 items-center">
          <Link to={"/create"} className="btn btn-primary">
          <PlusIcon className="h-5 w-5"/>
          <span>New Note</span>
          </Link>
        </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
