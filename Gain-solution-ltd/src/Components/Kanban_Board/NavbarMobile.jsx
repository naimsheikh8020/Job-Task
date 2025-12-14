import { useState } from "react";
import { Menu } from "lucide-react";
import MobileDrawer from "./MobileDrawer";
import { controlClass } from "./Navbar";

const NavbarMobile = ({
  setSearchQuery,
  setPriorityFilter,
  setColumnFilter,
  onNewTask,
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleColumnChange = (value) => {
    setColumnFilter(value);
    setDrawerOpen(false);
  };

  const handlePriorityChange = (value) => {
    setPriorityFilter(value);
    setDrawerOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setDrawerOpen(true)}
        className="xl:hidden p-2 border border-gray-200 bg-white rounded"
      >
        <Menu size={18} />
      </button>

      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <select
          defaultValue="all"
          onChange={(e) => handleColumnChange(e.target.value)}
          className={`w-full ${controlClass}`}
        >
          <option value="all">Project</option>
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
          onChange={(e) => handlePriorityChange(e.target.value)}
          className={`w-full ${controlClass}`}
        >
          <option value="all">All Priority</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>

        <button
          className={`w-full ${controlClass}`}
          onClick={() => {
            onNewTask();
            setDrawerOpen(false);
          }}
        >
          New Task
        </button>
      </MobileDrawer>
    </>
  );
};

export default NavbarMobile;
