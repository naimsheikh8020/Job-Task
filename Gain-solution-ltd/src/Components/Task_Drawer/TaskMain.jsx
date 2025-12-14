import TaskComments from "./TaskComments";
import TaskActivity from "./TaskActivity";

const priorityStyles = {
  low: "bg-gray-100 text-gray-700",
  medium: "bg-yellow-100 text-yellow-700",
  high: "bg-red-100 text-red-700",
};


const TaskMain = ({ task }) => {
  return (
    <div className="col-span-8 space-y-6 border border-gray-200 rounded-xl p-6">
      <div className="flex items-center justify-between gap-2">
        <div>
          <p className="text-sm text-gray-500 mb-1">Task Title</p>
          <div
            className={"border border-gray-300 rounded px-3 py-2 bg-white cursor-grab"}
          >
            {task.title}
          </div>
        </div>

        <span
          className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${
            priorityStyles[task.priority]
          }`}
        >
          {task.priority}
        </span>
      </div>

      <div className="flex items-center gap-4 text-sm text-gray-600">
        <div>
          <span className="font-medium">Due:</span> {task.dueDate}
        </div>

        <div className="flex items-center gap-2">
          {task.assignee?.image ? (
            <img
              src={task.assignee.image}
              alt={task.assignee.name}
              className="w-7 h-7 rounded-full object-cover"
            />
          ) : (
            <div className="w-7 h-7 rounded-full bg-gray-300 flex items-center justify-center text-xs">
              ?
            </div>
          )}
          <span>{task.assignee?.name || "Unassigned"}</span>
        </div>
      </div>

      <div>
        <p className="text-sm text-gray-500 mb-1">Details</p>
        <div
          className={"border border-gray-300 rounded px-3 py-4 bg-white text-gray-700 cursor-grab"}
        >
          {task.details}
        </div>
      </div>

      <div className="cursor-grab">
        <TaskComments comments={task.comments} />
      </div>

      <div className="cursor-grab">
        <TaskActivity activityLog={task.activityLog} />
      </div>
    </div>
  );
};

export default TaskMain;
