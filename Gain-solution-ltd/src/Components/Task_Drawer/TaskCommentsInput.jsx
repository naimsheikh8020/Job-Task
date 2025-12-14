const TaskCommentsInput = ({ task, onUpdate }) => {
  const fieldClass =
    "border border-gray-300 rounded px-3 py-2 bg-white text-sm w-full";

  return (
    <div>
      <p className="text-sm text-gray-500 mb-1">Comments</p>
      <input
        className={fieldClass}
        placeholder="Write a comment..."
        value={task.comments?.input || ""}
        onChange={(e) =>
          onUpdate({
            comments: {
              ...task.comments,
              input: e.target.value,
            },
          })
        }
        onKeyDown={(e) => {
          if (e.key === "Enter" && task.comments?.input?.trim()) {
            onUpdate({
              comments: {
                input: "",
                list: [
                  ...(task.comments?.list || []),
                  {
                    id: Date.now(),
                    author: task.assignee?.name || "Unassigned",
                    text: task.comments.input,
                    time: new Date().toISOString().split("T")[0],
                  },
                ],
              },
            });
          }
        }}
      />
    </div>
  );
};

export default TaskCommentsInput;
