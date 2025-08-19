import { createContext, useContext, useMemo, useState } from "react";

export const TodosContext = createContext();

const ToDoContextProvider = ({ children }) => {
  const [allTasks, setAllTasks] = useState([]);
  const [query, setQuery] = useState("");

  const addTask = (task) => {
    setAllTasks((prev) => [...prev, task]);
  };

  const editTask = (task, newText, dueDate) => {
    const updatedTasks = allTasks.map((t) =>
      t.id === task.id
        ? { ...t, text: newText ?? t.text, createdAt: dueDate ?? t.createdAt }
        : t
    );
    setAllTasks(updatedTasks);
  };

  const setSearchQuery = (newQuery) => {
    setQuery(newQuery);
  };

  const tasks = useMemo(() => {
    if (!query) return allTasks;
    return allTasks.filter((task) =>
      task.text.toLowerCase().includes(query.toLowerCase())
    );
  }, [allTasks, query]);

  return (
    <TodosContext.Provider
      value={{ tasks, addTask, editTask, setSearchQuery }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export default ToDoContextProvider;

export const useToDoContext = () => {
  const context = useContext(TodosContext);
  if (!context) {
    throw new Error(
      "useToDoContext must be used within a ToDoContextProvider"
    );
  }
  return context;
};
