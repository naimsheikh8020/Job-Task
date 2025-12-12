const TaskSidebar = ({ task }) => {
  return (
    <div className="col-span-4 space-y-4 border border-gray-200 rounded-xl p-6">
      <div>
        <p className="text-sm text-gray-500 mb-1">Status</p>
        <div className="border border-gray-300 rounded px-3 py-2 bg-white text-sm">
          {task.status || "-"}
        </div>
      </div>

      <div>
        <p className="text-sm text-gray-500 mb-1">Priority</p>
        <div className="border border-gray-300 rounded px-3 py-2 bg-white text-sm">
          {task.priority || "-"}
        </div>
      </div>

      <div>
        <p className="text-sm text-gray-500 mb-1">Assignee</p>
        <div className="border border-gray-300 rounded px-3 py-2 bg-white text-sm">
          {task.assignee || "-"}
        </div>
      </div>

      <div>
        <p className="text-sm text-gray-500 mb-1">Due date</p>
        <div className="border border-gray-300 rounded px-3 py-2 bg-white text-sm">
          {task.dueDate || "-"}
        </div>
      </div>

      <div>
        <p className="text-sm text-gray-500 mb-1">Labels</p>
        <div className="border border-gray-300 rounded px-3 py-2 bg-white text-sm">
          {task.labels?.length ? task.labels.join(", ") : "-"}
        </div>
      </div>

      <div>
        <p className="text-sm text-gray-500 mb-1">Estimate</p>
        <div className="border border-gray-300 rounded px-3 py-2 bg-white text-sm">
          {task.estimate || "-"}
        </div>
      </div>
    </div>
  );
};

export default TaskSidebar;
