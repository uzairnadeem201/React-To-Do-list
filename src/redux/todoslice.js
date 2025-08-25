import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allTasks: [],
  query: "",
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.allTasks.push(action.payload);
    },
    editTask: (state, action) => {
      const { task, newText, dueDate } = action.payload;
      state.allTasks = state.allTasks.map((t) =>
        t.id === task.id
          ? { ...t, text: newText ?? t.text, createdAt: dueDate ?? t.createdAt }
          : t
      );
    },
    setSearchQuery: (state, action) => {
      state.query = action.payload;
    },
  },
});

export const { addTask, editTask, setSearchQuery } = todoSlice.actions;
export default todoSlice.reducer;
