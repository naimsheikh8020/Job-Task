import { ASSIGNEES } from "../../assets/assignees";

const TaskMetaFields = ({ task, onUpdate }) => {
  const fieldClass =
    "border border-gray-300 rounded px-3 py-2 bg-white text-sm w-full";

  return (
    <>
      <div>
        <p className="text-sm text-gray-500 mb-1">Status</p>
        <select
          className={fieldClass}
          value={task.status}
          onChange={(e) => onUpdate({ status: e.target.value })}
        >
          <option value="backlog">backlog</option>
          <option value="in-progress">in-progress</option>
          <option value="review">review</option>
          <option value="done">done</option>
        </select>
      </div>

      <div>
        <p className="text-sm text-gray-500 mb-1">Priority</p>
        <select
          className={fieldClass}
          value={task.priority}
          onChange={(e) => onUpdate({ priority: e.target.value })}
        >
          <option value="low">low</option>
          <option value="medium">medium</option>
          <option value="high">high</option>
        </select>
      </div>

      <div>
        <p className="text-sm text-gray-500 mb-1">Assignee</p>
        <select
          className={fieldClass}
          value={task.assignee?.name || "Unassigned"}
          onChange={(e) => {
            const selectedAssignee = ASSIGNEES[e.target.value];
            onUpdate({ assignee: selectedAssignee });
          }}
        >
          {Object.keys(ASSIGNEES).map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <p className="text-sm text-gray-500 mb-1">Due date</p>
        <input
          type="date"
          className={fieldClass}
          value={task.dueDate}
          onChange={(e) => onUpdate({ dueDate: e.target.value })}
        />
      </div>
    </>
  );
};

export default TaskMetaFields;
