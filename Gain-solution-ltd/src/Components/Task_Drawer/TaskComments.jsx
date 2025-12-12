const TaskComments = ({ comments }) => {
  return (
    <div>
      <p className="text-sm text-gray-500 mb-1">Comments</p>
      <div className="border border-gray-300 rounded bg-white min-h-[120px] p-3 space-y-2">
        <input
          placeholder="Add a comment..."
          className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
        />

        {comments?.list?.length ? (
          comments.list.map((c) => (
            <div
              key={c.id}
              className="border border-gray-200 rounded p-2 text-sm"
            >
              <p className="font-medium">{c.author}</p>
              <p className="text-gray-600">{c.text}</p>
              <p className="text-xs text-gray-400">{c.time}</p>
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
