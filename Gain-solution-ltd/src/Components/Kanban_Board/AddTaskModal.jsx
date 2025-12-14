import { X } from "lucide-react";
import Button from "../Button/Button";

const AddTaskModal = ({
  open,
  title,
  onChange,
  onClose,
  onSubmit,
}) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative bg-white rounded-xl border border-gray-200 shadow-sm w-full max-w-sm p-5 z-10">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-medium text-gray-700">Add task</p>
          <button onClick={onClose}>
            <X className="w-4 h-4 text-gray-400" />
          </button>
        </div>

        <form onSubmit={onSubmit} className="space-y-3">
          <input
            autoFocus
            value={title}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Task title"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
          />

          <div className="flex justify-end gap-2 pt-2">
            <Button text="Cancel" onClick={onClose} />
            <Button text="Add task" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTaskModal;
