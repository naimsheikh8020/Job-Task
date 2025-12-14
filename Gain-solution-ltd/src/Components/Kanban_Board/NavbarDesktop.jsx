import { controlClass } from "./Navbar";

const NavbarDesktop = ({
  setSearchQuery,
  setPriorityFilter,
  setColumnFilter,
  onNewTask,
}) => {
  return (
    <div className="hidden xl:flex items-center gap-3">
      <select
        defaultValue="all"
        onChange={(e) => setColumnFilter(e.target.value)}
        className={controlClass}
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

      <button className={controlClass} onClick={onNewTask}>
        New Task
      </button>
    </div>
  );
};

export default NavbarDesktop;
