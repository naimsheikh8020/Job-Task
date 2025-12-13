import boardData from "../assets/data";

const ListViewPage = () => {
  const tasks = [];

  boardData.forEach((column) => {
    column.tasks.forEach((task) => {
      tasks.push(task);
    });
  });

  return (
    <div className="p-4 lg:p-6 space-y-3">
      {/* Desktop Header */}
      <div className="hidden lg:grid grid-cols-6 border border-gray-300 bg-gray-100 px-4 py-2 text-xs font-semibold text-gray-600">
        <div>Task title</div>
        <div>Assignee</div>
        <div>Status</div>
        <div>Due date</div>
        <div>Priority</div>
        <div>Labels</div>
      </div>

      {tasks.map((task, index) => (
        <div
          key={index}
          className="border border-gray-300 bg-white p-4 text-sm text-gray-700"
        >
          {/* Desktop row */}
          <div className="hidden lg:grid grid-cols-6 items-center">
            <div className="truncate font-medium">{task.title}</div>
            <div>{task.assignee || "-"}</div>
            <div>{task.status}</div>
            <div>{task.dueDate || "-"}</div>
            <div className="capitalize">{task.priority}</div>
            <div className="truncate">
              {task.labels?.join(", ") || "-"}
            </div>
          </div>

          {/* Mobile card */}
          <div className="space-y-1 lg:hidden">
            <div className="font-medium">{task.title}</div>
            <div className="text-xs text-gray-500">
              {task.assignee || "Unassigned"} • {task.status} •{" "}
              {task.priority}
            </div>
            {task.labels?.length > 0 && (
              <div className="text-xs text-gray-500">
                Labels: {task.labels.join(", ")}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListViewPage;
