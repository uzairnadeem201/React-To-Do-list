import "./styles.css";
import ToDOList from "../ToDoList";
import { Search } from "lucide-react";

const ToDO = () => {
  return (
    <div className="todo">
      <div className="todo__header">
        <Search className="mt-4"/>
        <input placeholder="Search" className="input" />
      </div>
      <ToDOList />
    </div>
  );
};

export default ToDO;
