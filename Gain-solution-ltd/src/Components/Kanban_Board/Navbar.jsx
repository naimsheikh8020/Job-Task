import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

export const controlClass =
  "px-4 py-2 text-sm rounded bg-white border border-gray-200 focus:outline-none focus:border-gray-300";

const Navbar = ({
  setSearchQuery,
  setPriorityFilter,
  setColumnFilter,
  onNewTask,
}) => {
  return (
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

        <NavbarDesktop
          setSearchQuery={setSearchQuery}
          setPriorityFilter={setPriorityFilter}
          setColumnFilter={setColumnFilter}
          onNewTask={onNewTask}
        />

        <NavbarMobile
          setSearchQuery={setSearchQuery}
          setPriorityFilter={setPriorityFilter}
          setColumnFilter={setColumnFilter}
          onNewTask={onNewTask}
        />
      </div>
    </div>
  );
};

export default Navbar;
