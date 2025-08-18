import { createContext, useContext, useState } from "react";
export const TodosContext = createContext();

const ToDoContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => { 
    setTasks((prev) => [...prev, task]);
  }

  const editTask = (task,newText) => { 
    const updatedTasks = tasks.map((t) =>
        t.id === task.id ? { ...t, text: newText } : t
      );
      setTasks(updatedTasks);
  }


  const deleteTask = (id) => { }




  return (
    <TodosContext.Provider value={{ tasks, addTask, editTask, deleteTask}}>
      {children}
    </TodosContext.Provider>
  );
};



export default ToDoContextProvider;

export const useToDoContext = () => {
    const context = useContext(TodosContext);
    if (!context) {
        throw new Error("useToDoContext must be used within a ToDoContextProvider");
    }
    return context;
}