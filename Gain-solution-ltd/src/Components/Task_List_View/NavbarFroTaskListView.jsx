import React from "react";
import Button from "../Button/Button";

const NavbarFroTaskListView = ({ viewMode, setViewMode }) => {
  return (
    <>
      {/* Top bar */}
      <div className="border-b border-gray-300 bg-gray-100">
        <div className="flex items-center justify-between px-6 py-4">
          <Button text="Add task" />

          <span className="text-lg font-semibold text-gray-600">
            Tasks - Top Bar
          </span>

          <div className="flex items-center gap-2">
            <Button text="Search" />
            <Button text="Bell" />
            <Button text="User" />
          </div>
        </div>
      </div>

      {/* Controls row */}
      <div className="flex justify-end gap-2 px-6 py-3">
        <select
          value={viewMode}
          onChange={(e) => setViewMode(e.target.value)}
          className="rounded border border-gray-300 bg-white px-4 py-2 font-medium text-gray-700"
        >
          <option value="kanban">Kanban View</option>
          <option value="list">List View</option>
        </select>

        <select className="rounded border border-gray-300 bg-white px-4 py-2 font-medium text-gray-700">
          <option>All</option>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
      </div>
    </>
  );
};

export default NavbarFroTaskListView;
