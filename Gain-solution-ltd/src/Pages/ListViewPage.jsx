const ListViewPage = ({ boardData }) => {
  const tasks = boardData.flatMap((column) => column.tasks);

  if (!tasks.length) {
    return <p className="p-6 text-gray-500">No tasks found.</p>;
  }

  return (
    <div className="p-6 space-y-3">
      <div className="hidden xl:grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_1fr_auto] gap-4 px-4 py-3 border border-gray-300 bg-gray-100 text-sm font-medium text-gray-600 items-center">
        <div>Task title</div>
        <div>Assignee</div>
        <div>Status</div>
        <div>Due date</div>
        <div>Priority</div>
        <div>Labels</div>
        <div>Comments</div>
        <div className="text-center">Menu</div>
      </div>

      {tasks.map((task) => (
        <div
          key={task.id}
          className="relative grid grid-cols-1 xl:grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_1fr_auto] gap-2 xl:gap-4 px-4 py-4 border border-gray-300  bg-white text-sm text-gray-700 xl:items-center">
          <div className="font-medium pr-6 xl:pr-0 truncate xl:whitespace-nowrap">
            {task.title}
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <span className="xl:hidden font-medium">Assignee: </span>
            {task.assignee?.image ? (
              <img
                src={task.assignee.image}
                alt={task.assignee.name}
                className="w-6 h-6 rounded-full object-cover"
              />
            ) : (
              <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center text-xs text-gray-600">
                ?
              </div>
            )}
            <span>{task.assignee?.name || "Unassigned"}</span>
          </div>

          <div className="capitalize">
            <span className="xl:hidden font-medium">Status: </span>
            {task.status}
          </div>

          <div>
            <span className="xl:hidden font-medium">Due: </span>
            {task.dueDate}
          </div>

          <div className="capitalize">
            <span className="xl:hidden font-medium">Priority: </span>
            {task.priority}
          </div>

          <div className="truncate">
            <span className="xl:hidden font-medium">Labels: </span>
            {task.labels?.length ? task.labels.join(", ") : "-"}
          </div>

          <div className="text-gray-600">
            <span className="xl:hidden font-medium">Comments: </span>
            {task.comments?.list?.length || 0}
          </div>

          <div className="absolute top-4 right-4 xl:static xl:flex xl:justify-center">
            <span className="cursor-pointer text-gray-400 hover:text-gray-600">
              ...
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListViewPage;
