const TaskComments = ({ comments }) => {
  const list = comments?.list || [];

  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <p className="text-sm text-gray-500">
          Comments <span className="text-gray-400">({list.length})</span>
        </p>
      </div>

      <div className="border border-gray-300 rounded bg-white p-3 space-y-2">
        {list.length ? (
          list.map((comment) => (
            <div
              key={comment.id}
              className="border border-gray-200 rounded p-2 text-sm"
            >
              <p className="font-medium">{comment.author}</p>
              <p className="text-gray-600">{comment.text}</p>
              <p className="text-xs text-gray-400">{comment.time}</p>
            </div>
          ))
        ) : (
          <p className="text-sm text-gray-400">No comments yet</p>
        )}
      </div>
    </div>
  );
};

export default TaskComments;
