import "./App.css";
import ColorSelector from "./components/ColorSelector";
import ToDoList from "./components/ToDoList";
import ToDoContextProvider from "./Provider";
import { Provider } from "react-redux";
import store from './redux/store'
import Header from "./components/Header";

function App() {
  //Context
  //header
  //todolist
  return (
    <Provider store={store}>
      <div className="app">
        <div className="app__container">
          <ColorSelector />
          <div className="todo">
            <Header />
            <ToDoList />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
