import { useState } from "react";
import Navbar from "../Components/Kanban_Board/Navbar";
import KanbanColumn from "../Components/Kanban_Board/KanbanColumn";
import AddTaskModal from "../Components/Kanban_Board/AddTaskModal";
import boardData from "../assets/data";
import TaskDrawer from "./TaskDrawer";
import NavbarFroTaskListView from "../Components/Task_List_View/NavbarFroTaskListView";
import ListViewPage from "./ListViewPage";

import useBoardFilters from "../hooks/useBoardFilters";
import useAddTaskModal from "../hooks/useAddTaskModal";

const KanbanPage = () => {
  const [columns, setColumns] = useState(boardData);
  const [selectedTask, setSelectedTask] = useState(null);
  const [viewMode, setViewMode] = useState("kanban");

  const [searchQuery, setSearchQuery] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("all");
  const [columnFilter, setColumnFilter] = useState("all");

  const {
    modalState,
    setTitle,
    openModal,
    closeModal,
    addTask,
  } = useAddTaskModal(setColumns);

  const filteredBoard = useBoardFilters({
    columns,
    searchQuery,
    priorityFilter,
    columnFilter,
  });

  return (
    <div>
      {selectedTask ? (
        <NavbarFroTaskListView
          viewMode={viewMode}
          setViewMode={setViewMode}
          priority={priorityFilter}
          setPriority={setPriorityFilter}
          setSearchQuery={setSearchQuery}
          onAddTask={() => openModal("backlog")}
        />
      ) : (
        <Navbar
          setSearchQuery={setSearchQuery}
          setPriorityFilter={setPriorityFilter}
          setColumnFilter={setColumnFilter}
          onNewTask={() => openModal("backlog")}
        />
      )}

      {selectedTask ? (
        viewMode === "list" ? (
          <ListViewPage boardData={filteredBoard} />
        ) : (
          <TaskDrawer
            task={selectedTask}
            onBack={() => setSelectedTask(null)}
          />
        )
      ) : (
        <div className="flex gap-4 p-4 sm:grid sm:grid-cols-2 overflow-x-auto xl:grid-cols-4 sm:overflow-visible">
          {filteredBoard.map((column) => (
            <KanbanColumn
              key={column.id}
              columnId={column.id}
              name={column.name}
              tasks={column.tasks}
              onTaskClick={setSelectedTask}
              onAddTask={openModal}
            />
          ))}
        </div>
      )}

      <AddTaskModal
        open={modalState.open}
        title={modalState.title}
        onChange={setTitle}
        onClose={closeModal}
        onSubmit={addTask}
      />
    </div>
  );
};

export default KanbanPage;
