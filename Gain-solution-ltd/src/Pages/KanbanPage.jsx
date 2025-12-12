import React, { useState } from "react";
import Navbar from "../Components/Kanban_Board/Navbar";
import KanbanColumn from "../Components/Kanban_Board/KanbanColumn";
import ListViewPage from "./ListViewPage";
import boardData from "../assets/data";

const KanbanPage = () => {
  const [selectedTask, setSelectedTask] = useState(null);

  const [searchQuery, setSearchQuery] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("all");
  const [columnFilter, setColumnFilter] = useState("all");

  const handleTaskClick = (task) => setSelectedTask(task);
  const handleBack = () => setSelectedTask(null);

  /**
   * ✅ FIXED FILTER LOGIC
   * - Single source of truth (boardData)
   * - No conditional rendering
   * - "All" properly resets
   */
  const filteredBoard = boardData
    .filter((column) => {
      if (columnFilter === "all") return true;
      return column.id === columnFilter;
    })
    .map((column) => {
      const tasks = column.tasks.filter((task) => {
        const q = searchQuery.trim().toLowerCase();

        // Check if task matches search query (if any)
        const matchesSearch =
          !q ||
          (task.title && task.title.toLowerCase().includes(q)) ||
          (task.details && task.details.toLowerCase().includes(q)) ||
          (task.assignee && task.assignee.toLowerCase().includes(q)) ||
          (task.labels && task.labels.join(" ").toLowerCase().includes(q)) ||
          (task.status && task.status.toLowerCase().includes(q));

        // Check if task matches priority filter
        const matchesPriority =
          priorityFilter === "all" ||
          (task.priority && task.priority.toLowerCase() === priorityFilter.toLowerCase());

        return matchesSearch && matchesPriority;
      });

      return {
        ...column,
        tasks,
      };
    });

  return (
    <div>
      <Navbar
        setSearchQuery={setSearchQuery}
        setPriorityFilter={setPriorityFilter}
        setColumnFilter={setColumnFilter}
      />

      {selectedTask ? (
        <ListViewPage task={selectedTask} onBack={handleBack} />
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
