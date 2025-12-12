import TaskMain from "../Components/Task_Drawer/TaskMain";
import TaskSidebar from "../Components/Task_Drawer/TaskSidebar";


const TaskDrawer = ({ task, onBack }) => {
  return (
    <div className="p-6 min-h-screen">
      <button
        onClick={onBack}
        className="mb-4 px-4 py-2 bg-white border border-gray-300 rounded"
      >
        ← Back
      </button>

      <div className="bg-white border border-gray-300 rounded shadow-sm p-6">
        <div className="grid grid-cols-12 gap-6">
          <TaskMain task={task} />
          <TaskSidebar task={task} />
        </div>
      </div>
    </div>
  );
};

export default TaskDrawer;
