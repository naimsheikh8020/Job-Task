import TaskComments from "./TaskComments";
import TaskActivity from "./TaskActivity";

const TaskMain = ({ task }) => {
  return (
    <div className="col-span-8 space-y-6 border border-gray-200 rounded-xl p-6">
      {/* TITLE */}
      <div>
        <p className="text-sm text-gray-500 mb-1">Task Title</p>
        <div className="border border-gray-300 rounded px-3 py-2 bg-white">
          {task.title}
        </div>
      </div>

      {/* DETAILS */}
      <div>
        <p className="text-sm text-gray-500 mb-1">Details</p>
        <div className="border border-gray-300 rounded px-3 py-4 bg-white min-h-[120px] text-gray-700">
          {task.details}
        </div>
      </div>

      <TaskComments comments={task.comments} />
      <TaskActivity activityLog={task.activityLog} />
    </div>
  );
};

export default TaskMain;
