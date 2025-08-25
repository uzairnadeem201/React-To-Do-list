import { createSelector } from "@reduxjs/toolkit";

export const selectAllTasks = (state) => state.todos.allTasks;
export const selectQuery = (state) => state.todos.query;

export const selectFilteredTasks = createSelector(
  [selectAllTasks, selectQuery],
  (allTasks, query) => {
    if (!query) return allTasks;
    return allTasks.filter((task) =>
      task.text.toLowerCase().includes(query.toLowerCase())
    );
  }
);
