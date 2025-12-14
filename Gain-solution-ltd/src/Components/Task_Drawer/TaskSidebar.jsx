import TaskMetaFields from "./TaskMetaFields";
import TaskCommentsInput from "./TaskCommentsInput";
import TaskDescriptionEditor from "./TaskDescriptionEditor";

const TaskSidebar = ({ task, onUpdate }) => {
  return (
    <div className="col-span-4 space-y-4 border border-gray-200 rounded-xl p-6">
      <TaskMetaFields task={task} onUpdate={onUpdate} />
      <TaskCommentsInput task={task} onUpdate={onUpdate} />
      <TaskDescriptionEditor task={task} onUpdate={onUpdate} />
    </div>
  );
};

export default TaskSidebar;
