import { useState } from "react";
import { Menu } from "lucide-react";
import MobileDrawer from "./MobileDrawer";

const controlClass =
  "px-4 py-2 text-sm rounded bg-white border border-gray-200 focus:outline-none focus:border-gray-300";

const Navbar = ({ setSearchQuery, setPriorityFilter, setColumnFilter }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <div className="bg-gray-100 border-b border-gray-200 py-3 px-4">
        <div className="flex items-center justify-between relative">
          <div className="flex items-center gap-3">
            <div className="px-4 py-2 border border-gray-200 bg-white rounded">
              Logo
            </div>
            <p className="font-medium text-gray-700">Board Title</p>
          </div>

          <p className="hidden xl:block absolute left-1/2 -translate-x-1/2 font-medium text-gray-600">
            Kanban Board - Header
          </p>

          <div className="hidden xl:flex items-center gap-3">
            <select
              defaultValue=""
              onChange={(e) => setColumnFilter(e.target.value)}
              className={controlClass}
            >
              <option value="" disabled>
                Project
              </option>
              <option value="all">All</option>
              <option value="backlog">Backlog</option>
              <option value="in-progress">In Progress</option>
              <option value="review">Review</option>
              <option value="done">Done</option>
            </select>

            <input
              type="text"
              placeholder="Search"
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`${controlClass} w-40`}
            />

            <select
              defaultValue="all"
              onChange={(e) => setPriorityFilter(e.target.value)}
              className={controlClass}
            >
              <option value="all">All Priority</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>

            <button className={controlClass}>New Task</button>
          </div>

          <button
            onClick={() => setDrawerOpen(true)}
            className="xl:hidden p-2 border border-gray-200 bg-white rounded"
          >
            <Menu size={18} />
          </button>
        </div>
      </div>

      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <select
          defaultValue=""
          onChange={(e) => setColumnFilter(e.target.value)}
          className={`w-full ${controlClass}`}
        >
          <option value="" disabled>
            Project
          </option>
          <option value="all">All</option>
          <option value="backlog">Backlog</option>
          <option value="in-progress">In Progress</option>
          <option value="review">Review</option>
          <option value="done">Done</option>
        </select>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchQuery(e.target.value)}
          className={`w-full ${controlClass}`}
        />
        <select
          defaultValue="all"
          onChange={(e) => setPriorityFilter(e.target.value)}
          className={`w-full ${controlClass}`}
        >
          <option value="all">All Priority</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <button className={`w-full ${controlClass}`}>New Task</button>
      </MobileDrawer>
    </>
  );
};

export default Navbar;
