import React from "react";

const KanbanColumn = ({ columnId, name, tasks, onTaskClick, onAddTask }) => {
  return (
    <div className="border border-gray-200 bg-gray-100 rounded-md p-4 w-full flex-shrink-0 min-w-[280px] sm:min-w-0 sm:flex-shrink">
      <button
        onClick={() => onAddTask(columnId)}
        className="text-sm text-gray-700 mb-3 font-medium text-start"
      >
        + Add task
      </button>

      <div className="flex flex-col gap-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            onClick={() => onTaskClick(task)}
            className="border border-gray-300 rounded-xl bg-white p-10 text-center text-gray-700 text-sm cursor-pointer hover:bg-gray-50 transition"
          >
            {task.title}
          </div>
        ))}
      </div>

      <p className="text-center text-gray-600 text-sm mt-6 font-medium">
        {name} ({tasks.length})
      </p>
    </div>
  );
};

export default KanbanColumn;
