import { useState, useEffect } from "react";
import { Menu } from "lucide-react";

/* ---------------- DROPDOWN ---------------- */
const Dropdown = ({ open, onClose, children }) => {
  useEffect(() => {
    const handler = (e) => {
      if (!e.target.closest(".dropdown-box")) onClose();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [onClose]);

  if (!open) return null;

  return (
    <div
      className="absolute right-0 mt-2 bg-white border border-gray-300 
      rounded-md shadow-lg min-w-[180px] z-50 dropdown-box"
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  );
};

/* ---------------- MODAL ---------------- */
const Modal = ({ open, onClose, children }) => {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg p-6 w-[430px] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
};

/* ---------------- NAVBAR ---------------- */
const Navbar = ({
  setSearchQuery,
  setPriorityFilter,
  setColumnFilter,
}) => {
  const [showProject, setShowProject] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [openTaskModal, setOpenTaskModal] = useState(false);

  return (
    <>
      <div className="bg-gray-100 border-b border-gray-300 py-3 relative">
        <div className="px-4 flex items-center justify-between relative">
          {/* LEFT */}
          <div className="flex items-center gap-3">
            <div className="px-4 py-2 border bg-white">Logo</div>
            <p className="font-medium">Board Title</p>
          </div>

          {/* CENTER */}
          <p className="hidden xl:block absolute left-1/2 -translate-x-1/2 font-medium">
            Kanban Board - Header
          </p>

          {/* RIGHT */}
          <div className="hidden xl:flex items-center gap-3">
            {/* PROJECT */}
            <div className="relative">
              <button
                onClick={() => setShowProject((p) => !p)}
                className="px-4 py-2 border bg-white text-sm"
              >
                Project ▼
              </button>

              <Dropdown
                open={showProject}
                onClose={() => setShowProject(false)}
              >
                {[
                  { label: "All", value: "all" },
                  { label: "Backlog", value: "backlog" },
                  { label: "In Progress", value: "in-progress" },
                  { label: "Review", value: "review" },
                  { label: "Done", value: "done" },
                ].map((item) => (
                  <div
                    key={item.value}
                    onClick={() => {
                      setColumnFilter(item.value);
                      setShowProject(false);
                    }}
                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                  >
                    {item.label}
                  </div>
                ))}
              </Dropdown>
            </div>

            {/* SEARCH */}
            <input
              type="text"
              placeholder="Search tasks..."
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-3 py-2 border bg-white rounded text-sm w-40"
            />

            {/* FILTER */}
            <div className="relative">
              <button
                onClick={() => setShowFilter((p) => !p)}
                className="px-4 py-2 border bg-white text-sm"
              >
                Filter
              </button>

              <Dropdown open={showFilter} onClose={() => setShowFilter(false)}>
                <div className="p-3">
                  <p className="font-medium mb-2">Priority</p>
                  <select
                    defaultValue="all"
                    onChange={(e) => {
                      const value = e.target.value;

                      setPriorityFilter(value);

                      // 🔥 IMPORTANT FIX
                      // When user selects "All", clear search so full board shows
                      if (value === "all") {
                        setSearchQuery("");
                      }

                      setShowFilter(false);
                    }}
                  >
                    <option value="all">All</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </select>
                </div>
              </Dropdown>
            </div>

            {/* NEW TASK */}
            <button
              onClick={() => setOpenTaskModal(true)}
              className="px-4 py-2 border bg-white text-sm"
            >
              New Task
            </button>
          </div>

          {/* MOBILE ICON */}
          <button className="xl:hidden p-2 border bg-white">
            <Menu size={18} />
          </button>
        </div>
      </div>

      {/* NEW TASK MODAL */}
      <Modal open={openTaskModal} onClose={() => setOpenTaskModal(false)}>
        <h2 className="text-lg font-semibold mb-4">Create New Task</h2>
        <input className="w-full p-2 border rounded mb-3" placeholder="Title" />
        <textarea
          className="w-full p-2 border rounded mb-3"
          placeholder="Details"
        />
        <button className="w-full bg-blue-600 text-white py-2 rounded">
          Create Task
        </button>
      </Modal>
    </>
  );
};

export default Navbar;
