const ListViewPage = ({ boardData }) => {
  const tasks = boardData.flatMap((column) => column.tasks);

  if (tasks.length === 0) {
    return <p className="p-6 text-gray-500">No tasks found.</p>;
  }

  return (
    <div className="p-6 space-y-3">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="border border-gray-200 rounded p-4 bg-white"
        >
          <div className="flex justify-between items-start">
            <p className="font-medium">{task.title}</p>
            <span className="text-xs capitalize text-gray-500">
              {task.priority}
            </span>
          </div>

          <p className="text-sm text-gray-600 mt-1">
            {task.details}
          </p>

          <div className="text-xs text-gray-400 mt-2">
            Status: {task.status}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListViewPage;
