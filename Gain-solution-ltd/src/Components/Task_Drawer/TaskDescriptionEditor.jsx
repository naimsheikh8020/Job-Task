import { useEffect, useState } from "react";

const TaskDescriptionEditor = ({ task, onUpdate }) => {
  const fieldClass =
    "border border-gray-300 rounded px-3 py-2 bg-white text-sm w-full";

  const [descriptionDraft, setDescriptionDraft] = useState(task.details || "");

  useEffect(() => {
    setDescriptionDraft(task.details || "");
  }, [task.id]);

  return (
    <div>
      <p className="text-sm text-gray-500 mb-1">Description</p>

      <textarea
        rows={4}
        className={fieldClass}
        value={descriptionDraft}
        onChange={(e) => setDescriptionDraft(e.target.value)}
      />

      <button
        onClick={() => onUpdate({ details: descriptionDraft })}
        className="mt-2 px-3 py-1 text-sm border border-gray-300 rounded bg-gray-50 hover:bg-gray-100"
      >
        Save
      </button>
    </div>
  );
};

export default TaskDescriptionEditor;
