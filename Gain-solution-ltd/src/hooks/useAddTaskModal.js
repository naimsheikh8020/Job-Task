import { useState } from "react";

const useAddTaskModal = (setColumns) => {
  const [state, setState] = useState({
    open: false,
    title: "",
    columnId: null,
  });

  const openModal = (columnId) => {
    setState({ open: true, title: "", columnId });
  };

  const closeModal = () => {
    setState({ open: false, title: "", columnId: null });
  };

  const addTask = (e) => {
    e.preventDefault();
    if (!state.title.trim() || !state.columnId) return;

    setColumns((prev) =>
      prev.map((column) =>
        column.id === state.columnId
          ? {
              ...column,
              tasks: [
                ...column.tasks,
                {
                  id: Date.now(),
                  title: state.title.trim(),
                  details: "",
                  status: column.id,
                  priority: "low",
                  assignee: { name: "Unassigned", image: null },
                  comments: { input: "", list: [] },
                  activityLog: [],
                  dueDate: "",
                  labels: [],
                  estimate: "",
                },
              ],
            }
          : column
      )
    );

    closeModal();
  };

  return {
    modalState: state,
    setTitle: (title) => setState((s) => ({ ...s, title })),
    openModal,
    closeModal,
    addTask,
  };
};

export default useAddTaskModal;
