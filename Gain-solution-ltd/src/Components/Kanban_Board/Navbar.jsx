import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <div className="bg-gray-100 border-b border-gray-300 py-3 relative">
        
        <div className="px-4 flex items-center justify-between xl:flex-row xl:items-center">
          
          <div className="flex items-center gap-3">
            <div className="px-4 py-2 border border-gray-300 bg-white text-sm">
              Logo
            </div>
            <p className="text-gray-700 font-medium text-sm">Board Title</p>
          </div>

          <p className="
            hidden xl:block 
            absolute left-1/2 -translate-x-1/2 
            text-gray-700 font-medium text-sm
          ">
            Kanban Board - Header
          </p>

          <div className="hidden xl:flex items-center gap-3">
            <button className="px-4 py-2 border border-gray-300 bg-white text-sm">Project ▼</button>
            <button className="px-4 py-2 border border-gray-300 bg-white text-sm">Search</button>
            <button className="px-4 py-2 border border-gray-300 bg-white text-sm">Filter</button>
            <button className="px-4 py-2 border border-gray-300 bg-white text-sm">New Task</button>
          </div>

       
          <button
            className="block xl:hidden px-3 py-2 border border-gray-400 bg-white"
            onClick={() => setOpen(true)}
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      <div
        className={`
          fixed top-0 right-0 h-full w-64 bg-white border-l border-gray-300 shadow-lg
          transform transition-transform duration-300 z-50
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex justify-end p-4">
          <button className="px-3 py-1 border border-gray-300" onClick={() => setOpen(false)}>
            <X size={20} />
          </button>
        </div>

        <div className="flex flex-col gap-3 p-4">
          <button className="px-4 py-2 border border-gray-300 bg-white text-sm">Project ▼</button>
          <button className="px-4 py-2 border border-gray-300 bg-white text-sm">Search</button>
          <button className="px-4 py-2 border border-gray-300 bg-white text-sm">Filter</button>
          <button className="px-4 py-2 border border-gray-300 bg-white text-sm">New Task</button>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-20 z-40 xl:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
