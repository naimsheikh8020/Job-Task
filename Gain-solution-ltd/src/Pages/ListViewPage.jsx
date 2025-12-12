import React from "react";

const ListViewPage = ({ task, onBack }) => {
  return (
    <div className="p-6">

      <button
        onClick={onBack}
        className="mb-4 px-4 py-2 bg-gray-200 border border-gray-300 rounded"
      >
        ← Back
      </button>

      <h1 className="text-2xl font-bold mb-3">{task.title}</h1>


      <p className="text-gray-700 mb-4">{task.details}</p>

      <div className="space-y-2">
        <p><strong>Status:</strong> {task.status}</p>
        <p><strong>Priority:</strong> {task.priority}</p>
        <p><strong>Assignee:</strong> {task.assignee}</p>
        <p><strong>Due Date:</strong> {task.dueDate}</p>
        <p><strong>Estimate:</strong> {task.estimate}</p>
      </div>

    </div>
  );
};

export default ListViewPage;
