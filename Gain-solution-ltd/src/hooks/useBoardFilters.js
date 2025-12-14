import { useMemo } from "react";

const useBoardFilters = ({
  columns,
  searchQuery,
  priorityFilter,
  columnFilter,
}) => {
  const filteredBoard = useMemo(() => {
    return columns
      .filter((column) =>
        columnFilter === "all" ? true : column.id === columnFilter
      )
      .map((column) => {
        const tasks = column.tasks.filter((task) => {
          const q = searchQuery.trim().toLowerCase();

          const matchesSearch =
            !q ||
            task.title?.toLowerCase().includes(q) ||
            task.details?.toLowerCase().includes(q) ||
            task.assignee?.name?.toLowerCase().includes(q);

          const matchesPriority =
            priorityFilter === "all" || task.priority === priorityFilter;

          return matchesSearch && matchesPriority;
        });

        return { ...column, tasks };
      });
  }, [columns, searchQuery, priorityFilter, columnFilter]);

  return filteredBoard;
};

export default useBoardFilters;
