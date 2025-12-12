const TaskActivity = ({ activityLog }) => {
  return (
    <div>
      <p className="text-sm text-gray-500 mb-1">Activity log</p>
      <div className="border border-gray-300 rounded bg-white min-h-[120px] p-3 space-y-2">
        {activityLog?.length ? (
          activityLog.map((a) => (
            <div key={a.id} className="text-sm text-gray-600">
              • {a.action} —{" "}
              <span className="text-gray-400">{a.time}</span>
            </div>
          ))
        ) : (
          <p className="text-sm text-gray-400">No activity yet</p>
        )}
      </div>
    </div>
  );
};

export default TaskActivity;
