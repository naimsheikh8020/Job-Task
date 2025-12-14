import React from "react";
import Button from "../Button/Button";

const NavbarFroTaskListView = ({
  viewMode,
  setViewMode,
  priority,
  setPriority,
}) => {
  return (
    <>
      <div className="border-b border-gray-300 bg-gray-100">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between px-4 sm:px-6 py-4">
          <Button text="Add task" />

          <span className="text-center text-base sm:text-lg font-semibold text-gray-600">
            Tasks - Top Bar
          </span>

          <div className="flex justify-center sm:justify-end gap-2">
            <Button text="Search" />
            <Button text="Bell" />
            <Button text="User" />
          </div>
        </div>
      </div>

      {/* FILTER BAR */}
      <div className="flex flex-col sm:flex-row sm:justify-end gap-3 px-4 sm:px-6 py-3">
        <select
          value={viewMode}
          onChange={(e) => setViewMode(e.target.value)}
          className="rounded border border-gray-300 bg-white px-4 py-2 font-medium text-gray-700"
        >
          <option value="kanban">Kanban View</option>
          <option value="list">List View</option>
        </select>

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="rounded border border-gray-300 bg-white px-4 py-2 font-medium text-gray-700"
        >
          <option value="all">All</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>
    </>
  );
};

export default NavbarFroTaskListView;
