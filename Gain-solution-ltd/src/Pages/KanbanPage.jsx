import React, { useState } from "react";
import Navbar from "../Components/Kanban_Board/Navbar";
import KanbanColumn from "../Components/Kanban_Board/KanbanColumn";
import boardData from "../assets/data";
import TaskDrawer from "./TaskDrawer";
import NavbarFroTaskListView from "../Components/Task_List_View/NavbarFroTaskListView";
import ListViewPage from "./ListViewPage";

const KanbanPage = () => {
  const [selectedTask, setSelectedTask] = useState(null);
  const [viewMode, setViewMode] = useState("kanban"); // 🔑

  const [searchQuery, setSearchQuery] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("all");
  const [columnFilter, setColumnFilter] = useState("all");

  const handleTaskClick = (task) => setSelectedTask(task);
  const handleBack = () => setSelectedTask(null);

  const filteredBoard = boardData
    .filter((column) => {
      if (columnFilter === "all") return true;
      return column.id === columnFilter;
    })
    .map((column) => {
      const tasks = column.tasks.filter((task) => {
        const q = searchQuery.trim().toLowerCase();

        const matchesSearch =
          !q ||
          task.title?.toLowerCase().includes(q) ||
          task.details?.toLowerCase().includes(q) ||
          task.assignee?.toLowerCase().includes(q) ||
          task.labels?.join(" ").toLowerCase().includes(q) ||
          task.status?.toLowerCase().includes(q);

        const matchesPriority =
          priorityFilter === "all" ||
          task.priority?.toLowerCase() === priorityFilter;

        return matchesSearch && matchesPriority;
      });

      return { ...column, tasks };
    });

  return (
    <div>
      {/* NAVBAR */}
      {selectedTask ? (
        <NavbarFroTaskListView
          viewMode={viewMode}
          setViewMode={setViewMode}
        />
      ) : (
        <Navbar
          setSearchQuery={setSearchQuery}
          setPriorityFilter={setPriorityFilter}
          setColumnFilter={setColumnFilter}
        />
      )}

      {/* CONTENT */}
      {selectedTask ? (
        viewMode === "list" ? (
          <ListViewPage />
        ) : (
          <TaskDrawer task={selectedTask} onBack={handleBack} />
        )
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 p-4">
          {filteredBoard.map((column) => (
            <KanbanColumn
              key={column.id}
              name={column.name}
              tasks={column.tasks}
              onTaskClick={handleTaskClick}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default KanbanPage;
