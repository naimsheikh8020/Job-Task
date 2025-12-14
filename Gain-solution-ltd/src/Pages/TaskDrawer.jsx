import { useState } from "react";
import TaskMain from "../Components/Task_Drawer/TaskMain";
import TaskSidebar from "../Components/Task_Drawer/TaskSidebar";

const TaskDrawer = ({ task }) => {
  const [localTask, setLocalTask] = useState(task);

  const handleUpdate = (changes) => {
    setLocalTask((prev) => ({
      ...prev,
      ...changes,
    }));
  };

  return (
    <div className="p-4 lg:p-6 bg-gray-50">
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 lg:p-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8">
            <TaskMain task={localTask} />
          </div>
          <div className="lg:col-span-4">
            <TaskSidebar task={localTask} onUpdate={handleUpdate} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDrawer;
