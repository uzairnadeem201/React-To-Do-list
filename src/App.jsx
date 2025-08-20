import "./App.css";
import ColorSelector from "./components/ColorSelector";
import ToDoList from "./components/ToDoList";
import ToDoContextProvider from "./Providers";
import Header from "./components/Header";

function App() {
  //Context
  //header
  //todolist
  return (
    <ToDoContextProvider>
      <div className="app">
        <div className="app__container">
          <ColorSelector />
          <div className="todo">
            <Header />
            <ToDoList />
          </div>
        </div>
      </div>
    </ToDoContextProvider>
  );
}

export default App;
